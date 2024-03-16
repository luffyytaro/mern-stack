import path from "path";
import postModel from "../models/post.model.js";

export async function addPost(req,res) {
    try {
        let {filename} = req.file;
        let {title, des} = req.body;
        let {userId} = req.user;
        if (!filename ||!title) return res.status(400).json({msg:"Image and title cannot be empty"});
        await postModel.create({
            title,
            des,
            image: filename,
            userId
        });
        return res.status(201).json({msg:"post created"})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}

export async function getPost(req, res) {
    try {
        let result = await postModel.find();
        return res.status(200).json({msg:"post fetched", posts: result})
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}

export async function image(req,res) {
    try {
        let {name} = req.params;
        return res.sendFile(path.resolve(`./library/${name}`));
    } catch (error) {
        console.log(error);
        return res.status(500).json({ msg: "some error occured" });
    }
}