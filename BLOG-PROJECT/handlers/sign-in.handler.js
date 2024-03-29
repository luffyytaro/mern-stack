import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import signInModel from "../models/sign-in.model.js";

const { sign } = jwt;

export async function registration(req, res) {
    try {
        let { username, email, password , profile} = req.body;
        console.log(password.length < 4);
        if ((username.length < 4) || !email || (password.length < 4)) {
            return res.status(400).json({ msg: "fields cannot be empty" });
        }
        let userExist = await signInModel.findOne({ username });
        if (userExist) return res.status(400).json({ msg: "username already exist" });
        let hashedPass = await bcrypt.hash(password, 10);
        await signInModel.create({ username, email, password: hashedPass, profile });
        return res.status(201).json({ msg: "registration successfully completed" });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}

export async function signIn(req, res) {
    try {
        const { username, password } = req.body;
        if (!username || !password) return res.status(400).json({ msg: "username or password cannot be empty" });
        let user = await signInModel.findOne({ username });
        if (!user) return res.status(400).json({ msg: "incorrect username or password" });
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
        let result = await signInModel.findOne({_id: userId},{password: 0});
        return res.json({msg: "private data", user: result})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}