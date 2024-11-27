import mongoose from "mongoose";
import { DB_name } from "../constants.js";


const connect = async()=>{
    try {
        const connect =  await mongoose.connect(`${process.env.MONGO_URI}/${DB_name}`);
        console.log(` \n MongoDB Connected ! DB host: ${connect.connection.host}`);
    } catch (error) {
        console.log("MongoDB Connection Error", error);
        process.exit(1);
    }
}

export default connect;