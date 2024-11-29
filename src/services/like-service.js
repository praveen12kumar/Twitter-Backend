
import {LikeRepository, TweetRepository} from "../repository/index.js";

class LikeService{
    constructor(){
        this.likeRepository = new LikeRepository();
        this.tweetRepository = new TweetRepository();
    }

    async toggleLike(modelId, modelType, userId){     //api/v1/likes/toggle?id=model_id&type=model_type
        // check what are you toggling Tweet or Comment 
        // find out the tweet Liked or not
        // if liked => Removed from the likes array of that tweet
        // if not liked => added to the likes array of that tweet
        
        if(modelType === 'Tweet'){
            var likeable = await this.tweetRepository.find(modelId) // populate likes to get the tweet 
            console.log(likeable);
        }
         else if(modelType === 'Comment'){
            //Todo
         }
         else{
             throw new Error("Invalid model type");
         }
         // return the tweet that has been liked
         const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            likeable: modelId,
            onModel: modelType
         });
         if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.deleteOne();
            var isAdded = false;
         }
         else{
            const newLike = await this.likeRepository.create({
                user:userId,
                onModel:modelType,
                likeable:modelId,
            });
            likeable.likes.push(newLike.id);
            await likeable.save();
            var isAdded = true;
         }
         return isAdded;
    }
}

export default LikeService;