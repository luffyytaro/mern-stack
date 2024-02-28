
import { Router } from "express";
import fs from "fs";
import { testSet } from "./req-handlers/test.handler.js";


const router = Router();

router.route("/test").post(testSet);

export default router;