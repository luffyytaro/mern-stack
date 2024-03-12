import { Router } from "express";

import { setTodo, getTodo, editTodo, delTodo } from "./req-handler/test.handler.js";

import { register, login, pd } from "./req-handler/login.handler.js";
import auth from "./middlewares/auth.js";
const router = Router();

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/private-data").get(auth,pd);

router.route("/setTodo").post(setTodo);
router.route("/getTodo").get(getTodo);
router.route("/editTodo").put(editTodo);
router.route("/delTodo").delete(delTodo);


export default router;