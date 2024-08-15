import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import userRouter from "./routes/user.routes.js"

const app = express()

app.use(cors(
    {
        origin: ["https://resume-x-maker.vercel.app"],
        methods: ["POST", "GET"],
        credentials: true,
        exposedHeaders: ['Set-Cookie']
    }
))

app.set("trust proxy", 1)
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ extended: true, limit: "16kb" }))
app.use(express.static("public"))
app.use(cookieParser())

// user routers
app.use("/api/v1/users", userRouter)

// http://localhost:8000/api/v2/users


export default app