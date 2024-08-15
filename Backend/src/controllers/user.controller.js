import { asyncHandler } from "../utils/asyncHandler.js"
import ApiError from "../utils/ApiError.js"
import { User } from "../models/user.models.js"
import ApiResponse from "../utils/ApiResponse.js"
import jwt from "jsonwebtoken"

const generateAccessAndRefreshTokens = async (userId) => {

    try {

        const user = await User.findById(userId)
        const accessToken = user.generateAccessToken()
        const refreshToken = user.generateRefreshToken()
        user.refreshToken = refreshToken
        await user.save({ validateBeforeSave: false })

        return { accessToken, refreshToken }

    } catch (error) {

        throw new ApiError(500, "Something went wrong while generating access and refresh token")
    }

}

const registerUser = asyncHandler(async (req, res) => {

    // get the data from frontend
    // validate the data
    // check if user already exist
    // store the data 
    // remove refresh token and password from the response
    // check for  user creation
    // res

    const { username, email, password } = req.body

    if (
        [email, username, password].some((field) =>

            field?.trim() === ""
        )
    ) {

        throw new ApiError(400, "All fields are required")
    }

    const validateEmail = email.match(
        /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );

    if (!validateEmail) {

        throw new ApiError(400, "invalid email")
    }

    if (!password > 7) {

        throw new ApiError(400, "Password must contain atleast 8 character")
    }

    const existedUser = await User.findOne({

        $or: [{ username }, { email }]
    })

    if (existedUser) {

        throw new ApiError(409, "User with email or username already exist")
    }

    const user = await User.create({ username: username, email, password })

    const createdUser = await User.findById(user._id).select("-password -refreshToken")

    if (!createdUser) {

        throw new ApiError(500, "Something went wrong while registering the user")
    }

    return res.status(200)
        .json(
            new ApiResponse(200, createdUser, "user register successfully")
        )
})

const loginUser = asyncHandler(async (req, res) => {

    // get username, email, password
    // validate data:username,email,password
    // find the user :uername,email,password
    // check the password
    // refrsh token and access token
    // send cookies

    const { email, password } = req.body

    if (!email) {

        throw new ApiError(400, "username or email is required")
    }

    const user = await User.findOne({

        email
    })

    if (!user) {

        throw new ApiError(404, "user does not exist")
    }

    const isPasswordValid = await user.isPasswordCorrect(password)

    if (!isPasswordValid) {

        throw new ApiError(401, "Invalid user credentials")
    }

    const { accessToken, refreshToken } = await generateAccessAndRefreshTokens(user._id)

    const loggedInUser = await User.findById(user._id).select("-password -refreshToken")

    const options = {

        httpOnly: true,
        secure: true,
        Samesite: 'None'

    }

    return res.status(200)
        .cookie("accessToken", accessToken, options)
        .cookie("refreshToken", refreshToken, options)
        .json(new ApiResponse(200, { loggedInUser, accessToken, refreshToken }, "User Logged In Successfully"))

})

const logoutUser = asyncHandler(async (req, res) => {

    await User.findByIdAndUpdate(

        req.user._id,
        {
            $unset: {
                refreshToken: 1 // this removes the field from document
            }
        },
        {
            new: true
        }
    )

    const options = {

        httpOnly: true,
        secure: true
    }

    return res.status(200)
        .clearCookie("accessToken", options)
        .clearCookie("refreshToken", options)
        .json(new ApiResponse(200, {}, "User logged Out"))

})

const refreshAccessToken = asyncHandler(async (req, res) => {

    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {

        throw new ApiError(401, "unauthorized request")
    }

    try {

        const decodedToken = jwt.verify(incomingRefreshToken, process.env.REFRESH_TOKEN_SECRET)
        const user = await User.findById(decodedToken?._id)

        if (!user) {

            throw new ApiError(401, "Invalid refresh token")
        }

        if (incomingRefreshToken !== user?.refreshToken) {

            throw new ApiError(401, "Refresh token is expired or used")
        }

        const options = {

            httpOnly: true,
            secure: true
        }

        const { accessToken, newRefreshToken } = await generateAccessAndRefreshTokens(user._id)

        return res.status(200)
            .cookie("accessToken", accessToken, options)
            .cookie("refreshToken", newRefreshToken, options)
            .json(
                new ApiResponse(
                    200,
                    { accessToken, refreshToken: newRefreshToken },
                    "Access token refreshed"
                )
            )

    } catch (error) {

        throw new ApiError(401, error?.message || "Invalid refresh token")
    }

})

const changeCurrentUserPassword = asyncHandler(async (req, res) => {

    // get oldpassword,newpassword
    // check oldpassword
    // update password
    // res

    const { oldpassword, newpassword } = req.body

    const user = await User.findById(req.user?._id)
    const isPasswordValid = await user.isPasswordCorrect(oldpassword)

    if (!isPasswordValid) {

        throw new ApiError(400, "invalid user credentials")
    }

    user.password = newpassword
    await user.save({ validateBeforeSave: false })

    return res.status(200)
        .json(new ApiResponse(200, {}, "Password changed Successfulyy"))

})

const getCurrentUser = asyncHandler(async (req, res) => {

    return res.status(200)
        .json(new ApiResponse(200, req.user, "current user fetched successfully"))

})

const updateUserAccountDetails = asyncHandler(async (req, res) => {

    const { username, email } = req.body

    if (!username || !email) {

        throw new ApiError(400, "all fields must be required")
    }

    const user = await User.findByIdAndUpdate(

        req.user?._id,
        {
            $set: {

                username: username,
                email: email
            }
        },
        {
            new: true
        }
    ).select("-password")

    return res.status(200)
        .json(
            new ApiResponse(200, user, "Account Detail updated successfully")
        )

})


export { registerUser, loginUser, logoutUser, refreshAccessToken, changeCurrentUserPassword, getCurrentUser, updateUserAccountDetails }