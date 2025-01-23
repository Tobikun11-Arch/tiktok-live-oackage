import { Router } from "express";
import { Get_Comments } from "../controllers/WatcherController";

const router = Router()

router.get('/get/comments', Get_Comments)


export default router;