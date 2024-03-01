import { Router } from "express";

import { setTodo, getTodo, editTodo, delTodo } from "./req-handler/test.handler.js";

const router = Router();

router.route("/setTodo").post(setTodo);
router.route("/getTodo").get(getTodo);
router.route("/editTodo").put(editTodo);
router.route("/delTodo").delete(delTodo)

export default router;