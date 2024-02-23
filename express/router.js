import {Router} from "express";

const router = Router();

router.route("/").get((req,res) =>res.send("router"));
router.route("/2").get((req,res) =>res.send("router2"));

export default router;