import express  from "express";
import dotenv from "dotenv";
import connect from "./connections.js"
import router from "./routers.js";

dotenv.config();
const server = express();
server.use(express.json({
    limit: "10mb"
}));

server.use(express.static("./public"));
server.use("/api", router);

connect().then(() => {
    server.listen(process.env.PORT, error => {
        if (error) return console.log(error);
        console.log("server started");
    })
})