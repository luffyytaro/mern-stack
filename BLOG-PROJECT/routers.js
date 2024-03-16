import { Router } from "express";
import auth from "./middlewares/authorization.js";
import multer from "multer";


import { registration, signIn, pd } from "./handlers/sign-in.handler.js";
import { addPost, getPost,image } from "./handlers/post.handler.js";


const storage = multer.diskStorage({
    destination: "./library",
    filename: (req, file, cb) => {
        console.log(file);
        let date = new Date();
        let namePrefix =`${date.getHours()}-${date.getMinutes()}-${date.getSeconds()}`
        cb(null,`${namePrefix}-${file.originalname}`); 
    }
});
const uploader = multer({storage});

const router = Router();


router.route("/registration").post(registration);
router.route("/signIn").post(signIn);
router.route("/private-data").get(auth,pd);
router.route("/add-post").post(auth, uploader.single("image"), addPost);
router.route("/get-post").get(getPost);
router.route("/image/:name").get(image);


export default router;