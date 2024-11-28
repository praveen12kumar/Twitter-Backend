import express from 'express';
import {config} from 'dotenv';
import connect from './config/database.js';
import {TweetRepository} from "./repository/index.js";
import {HashtagRepository} from "./repository/index.js";

import {TweetService} from "./services/index.js";

config({
    path:"./.env"
});


const PORT = process.env.PORT || 5000
const app = express();


connect()
.then(()=>{
    app.listen(PORT, async()=>{
        console.log(`Server is listening on port ${PORT}`);


        // const repo = new HashtagRepository();
        // const newHastags = await repo.findByName(["adventure", "fun"]);
        // console.log(newHastags);

        // const service = new TweetService();
        // const tweet = await service.create({content:"this is #after #hashtag #processing, having #fun and very #excited"});
    
    })

})
.catch((error)=>{
    console.log("Mongodb connection error", error);
});





