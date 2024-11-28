import { TweetService } from "../services/index.js";

const tweetService = new TweetService();

export const createTweet = async(req, res)=>{
    try {
        const response = await tweetService.create(req.body);
        return res.status(200).json({
            success:true,
            message:"Tweet created successfully",
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Sommething went wrong",
            data:{},
            err:error
        })
    }
}