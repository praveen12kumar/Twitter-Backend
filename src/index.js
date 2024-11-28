import express from 'express';
import {config} from 'dotenv';
import connect from './config/database.js';
import apiRoutes from "./Routes/index.js";

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
    })

})
.catch((error)=>{
    console.log("Mongodb connection error", error);
});





