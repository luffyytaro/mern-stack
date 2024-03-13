import { Router } from "express";
import auth from "./middleware/auth.js";
import { register, login, pd } from "./handlers/login.handler.js";

const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/private-data").get(auth,pd);
export default router;