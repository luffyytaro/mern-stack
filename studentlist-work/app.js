import express from "express";
import dotenv from "dotenv";

import connect from "./connect.js";
import router from "./router.js"
dotenv.config();

const server = express();

server.use(express.json());
server.use("/api",router);

connect().then(() =>{
    server.listen(process.env.PORT, error =>{
        if(error) return console.log(error);
        console.log("server started");
    })
})