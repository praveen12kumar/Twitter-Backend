import mongoose, {Schema} from "mongoose";

const hashtagSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    tweets:[{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Tweet"
    }]
});


// hashtagSchema.pre('save', function(next) {

// })

const Hashtag = mongoose.model("Hashtag",hashtagSchema);
export default Hashtag;