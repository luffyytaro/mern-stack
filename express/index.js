import express from "express";

import router from "./router.js";
const app = express();

app.use(express.static("./public"));
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));

app.use("/api", router);

app.listen(4000,error =>{
    if(error) console.log(error);
    console.log("server started");
});