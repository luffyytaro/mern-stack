
import fs from "fs";

export function signup(req,res){
    let {username , password} = req.body;
    if(!username || !password) {
        return res.status(400).json("username and password cannot be empty");
    }
    fs.readFile("./logins.json","utf-8",(error,data) =>{
        let logins = data? JSON.parse(data) :[];
        logins.push({username , password});
        fs.writeFile("./logins.json", JSON.stringify(logins),error =>{
            if(error) return res.status(500).json("error reciecved");
            return res.status(200).json("succesfully recieved");
        })
    })
}
 
export function signin(req, res){
    res.status(200).json("you're logged IN")
}