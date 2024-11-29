import express from 'express';
import {config} from 'dotenv';
import connect from './config/database.js';
import apiRoutes from "./Routes/index.js";
import {UserRepository} from "./repository/index.js"
import {LikeService} from "./services/index.js"

config({
    path:"./.env"
});


const PORT = process.env.PORT || 5000
const app = express();
  
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use("/api", apiRoutes);


connect()
.then(()=>{
    app.listen(PORT, async()=>{
        console.log(`Server is listening on port ${PORT}`);
        
        // const likeService = new LikeService();
        // const tweet = await likeService.toggleLike("6747fc05cf059c065a4fb68f", "Tweet", "67486d0d11f9a2fc41b0d240" )
        // console.log(tweet);
        
    })

})
.catch((error)=>{
    console.log("Mongodb connection error", error);
});





