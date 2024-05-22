import express from "express";
import { dbConnection } from "./database/dbConnection.js";
import dotenv from "dotenv";
import messageRouter from "./router/messageRouter.js";
import cors from "cors";
const app = express();

dotenv.config({path: "./config/config.env"});

app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
})
);
// Middleware
app.use(express.json());// The data we get is in json format so to pass it in string we use this
app.use(express.urlencoded({extended: true}));// It checks the data types

app.use("/api/v1/message",messageRouter)

dbConnection();



export default app;