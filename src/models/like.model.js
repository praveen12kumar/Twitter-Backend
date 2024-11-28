import mongoose, {Schema} from "mongoose";

const likeShema = new Schema({
    onModel:{
        type:String,
        required:true,
        enum:["Tweet","Comment"]  // that way it can be scalable
    },
    likeableId:{
        type:Schema.Types.ObjectId,
        required:true,
        refPath:"onModel"
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:"User",
        required:true,
    }
},{
    timestamps:true
});

const Like  = mongoose.model("Like",likeShema);
export default Like;
