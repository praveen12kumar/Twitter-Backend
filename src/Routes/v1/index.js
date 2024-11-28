import express from 'express';
import {createTweet} from "../../controller/tweetController.js";

const router = express.Router();


router.post("/tweets", createTweet);

export default router;
