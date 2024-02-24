import {Router} from "express";

import { getData,postData } from "./request-handlers/test.handler.js";

const router = Router();

router.route("/").get((req,res) =>res.send("router"));
router.route("/2").get((req,res) =>res.send("router2"));
router.route("/get-data").get(getData);
router.route("/post-data").post(postData);

export default router;