import { Router } from "express";

import {  getList, editList, delList, setList } from "./request-handler/request.handler.js";



const router = Router();



router.route("/setList").post(setList);
router.route("/getList").get(getList);
router.route("/editList").put(editList);
router.route("/delList").delete(delList)

export default router;