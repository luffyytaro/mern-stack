import express from "express";
import dotenv from "dotenv";

import connect from "./connection.js";
import router from "./router.js";

const server = express();
dotenv.config();
server.use(express.json({
    limit: "5mb"
}));
server.use(express.static("./public"));
server.use("/api", router);

connect().then(() => {

    server.listen(process.env.PORT, error => {
        if (error) return console.log(error);
        console.log("server started");
    })
})