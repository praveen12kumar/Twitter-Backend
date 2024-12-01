import express from 'express';
import {createTweet} from "../../controller/tweetController.js";
import { toggleLike } from '../../controller/likeController.js';
import {createComment} from "../../controller/commentController.js"

const router = express.Router();


router.post("/tweets", createTweet);
router.post("/likes/toggle", toggleLike);
router.post("/comments", createComment);

export default router;
