import { Router } from "express";
import auth from "./middleware/auth.js";
import { register, login, work ,pd, profile, textbox, readtext } from "./handlers/login.handler.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/work").post(work);
router.route("/profile").get(auth,profile);
router.route("/private-data").get(auth,pd);
router.route("/textbox").post(auth,textbox);
router.route("/readtext").get(readtext);
export default router;