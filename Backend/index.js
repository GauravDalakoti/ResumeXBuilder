// require('dotenv').config({path:"./env"})

import dotenv from "dotenv"
// import connectDB from "./db/index.js"
// import app from "./app.js"

import app from "./src/app.js"
import connectDB from "./src/db/index.js"

dotenv.config({ path: "./.env" })

connectDB()
    .then(() => {

        app.on("error", (error) => {

            console.log("ERORR:", error)
            throw error
        })

        app.get("/", (req, res) => {

            res.send("hello server running")
        })

        app.listen(process.env.PORT || 8000, () => {

            console.log(`Server is running at port http://localhost:${process.env.PORT}`)
        })
    })
    .catch((err) => {

        console.log("MONGO db connection failed !!!", err)
    })