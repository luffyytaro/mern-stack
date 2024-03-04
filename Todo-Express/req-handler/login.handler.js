import bcrypt from "bcrypt";

import loginModel from "../model/login.model.js"

export async function register(req, res) {
    try {
        let {username, email, password} = req.body;
        if(!username ||!email ||!password) return res.status(400).json({msg:"fields cannot be empty"});
        let hashedPass = await bcrypt.hash(password, 10);
        await loginModel.create({username, email, password: hashedPass});
        return res.status(201).json({msg:"registration successfully completed"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}