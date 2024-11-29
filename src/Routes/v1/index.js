import express from 'express';
import {createTweet} from "../../controller/tweetController.js";
import { toggleLike } from '../../controller/likeController.js';

const router = express.Router();


router.post("/tweets", createTweet);
router.post("/likes/toggle", toggleLike);

export default router;
