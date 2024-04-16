import { Router } from "express";
import auth from "./middleware/auth.js";
import { register, login, work ,pd, profile } from "./handlers/login.handler.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/work").post(work);
router.route("/profile").post(profile);
router.route("/private-data").get(auth,pd);
export default router;