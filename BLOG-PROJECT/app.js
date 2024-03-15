import express  from "express";
import dotenv from "dotenv";
import connect from "./connection.js";

dotenv.config();
const server= express();

connect().then(() => {
    server.listen(process.env.PORT, error => {
        if (error) return console.log(error);
        console.log("server started");
    })
})