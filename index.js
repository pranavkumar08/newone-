import { configDotenv } from "dotenv"
import express from "express"
import connectdb from "./src/database/db.js"

configDotenv()
const app = express()


app.listen(process.env.PORT, () => {
    connectdb()
    console.log(`server is running on ${process.env.PORT}`)
})
