import mongoose,{Schema} from "mongoose"; 

const tweetSchema = new Schema({
    content:{
        type:String,
        required:true,
        max:[250, "Tweet should not be more than 250 characters."],
    },
    // tweet can have many likes
    likes:[{
        type:Schema.Types.ObjectId,
        ref:"Like",
    }],
    
},{
    timestamps:true,
});

const Tweet = mongoose.model("Tweet",tweetSchema);

export default Tweet;