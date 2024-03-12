import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import loginModel from "../model/login.model.js"

const { sign } = jwt;

export async function register(req, res) {
    try {
        let { username, email, password } = req.body;
        console.log(password.length < 4);
        if ((username.length < 4) || !email || (password.length < 4)) {
            return res.status(400).json({ msg: "fields cannot be empty" });
        }
        let userExist = await loginModel.findOne({ username });
        if (userExist) return res.status(400).json({ msg: "username already exist" });
        let hashedPass = await bcrypt.hash(password, 10);
        await loginModel.create({ username, email, password: hashedPass });
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
    res.json({ msg: "private data" })
}