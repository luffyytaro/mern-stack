import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import loginModel from "../model/login.model.js"
import textModel from "../model/text.model.js";

const { sign } = jwt;

export async function register(req, res) {
    try {
        let { username, email, password , profile} = req.body;
        console.log(password.length < 4);
        if ((username.length < 4) || !email || (password.length < 4)) {
            return res.status(400).json({ msg: "fields cannot be empty" });
        }
        let userExist = await loginModel.findOne({ username });
        if (userExist) return res.status(400).json({ msg: "username already exist" });
        let hashedPass = await bcrypt.hash(password, 10);
        await loginModel.create({ username, email, password: hashedPass, profile });
        return res.status(201).json({ msg: "registration successfully completed" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}

export async function login(req, res) {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ msg: "username or password cannot be empty" });
        let user = await loginModel.findOne({ username });
        if (!user) return res.status(400).json({ ms: "incorrect username or password" });
        console.log(user);
        let valid = await bcrypt.compare(password, user.password);

        if (valid) {
            let token = sign({
                userId: user._id,
                username
            }, process.env.SECRET_KEY, {
                expiresIn: "24h"
            })
            return res.status(200).json({
                msg: "login successful",
                token
            })
        }
        return res.status(400).json({ msg: "incorrect username or password" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}

export async function pd(req, res) {
    try {
        let {userId} = req.user;
        let result = await loginModel.findOne({_id: userId},{password: 0});
        return res.json({msg: "private data", user: result})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}

export async function work(req, res) {
    try {
        let { username, email, password , profile} = req.body;
        console.log(password.length < 4);
        if ((username.length < 4) || !email || (password.length < 4)) {
            return res.status(400).json({ msg: "fields cannot be empty" });
        }
        let userExist = await loginModel.findOne({ username });
        if (userExist) return res.status(400).json({ msg: "username already exist" });
        let hashedPass = await bcrypt.hash(password, 10);
        await loginModel.create({ username, email, password: hashedPass, profile });
        return res.status(201).json({ msg: "registration successfully completed" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}



export async function profile(req, res) {
    try {
        let {userId} = req.user;
        let result = await loginModel.findOne({_id: userId},{password: 0});
        return res.status(200).json({msg:"text cannot be empty",result})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}

export async function textbox(req, res){
    try {
        let {text} = req.body;
        let { userId } = req.user;
        if(!text) return res.status(400).json({msg:"text cannot be empty"});
        await textModel.create({text, userId});
        return res.status(201).json({msg:"text added successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}

export async function readtext(req, res){
    try {
        let {text} = req.body;
        let { userId } = req.user;
        if(!text) return res.status(400).json({msg:"text cannot be empty"});
        await textModel.find({userId});
        return res.status(201).json({msg:"text added successfully"});
    } catch (error) {
        console.log(error);
        return res.status(500).json({msg:"some error occured"});
    }
}

