import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"



const app = express()


/*
Configuration of cors and cookie-parser
-> they are configured after the app is made
-> they are configured before the routes are made
*/

//cors configuration
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

//cookie-parser configuration
app.use(cookieParser())

// data from json body
app.use(express.json({limit : "16kb"}))

//url encoded data
app.use(express.urlencoded({extended: true}))

//file/filder to store -> img,fevicon
app.use(express.static('public'))

app.use(cookieParser())




export { app }