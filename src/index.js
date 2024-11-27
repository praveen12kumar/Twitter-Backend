import express from 'express';
import {config} from 'dotenv';
import connect from './config/database.js';
import TweetRepository from "./repository/tweetRepository.js";

config({
    path:"./.env"
});


const PORT = process.env.PORT || 5000
const app = express();


connect()
.then(()=>{
    app.listen(PORT,()=>{
        console.log(`Server is listening on port ${PORT}`);
    })
})
.catch((error)=>{
    console.log("Mongodb connection error", error);
});


