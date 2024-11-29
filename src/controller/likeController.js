import { LikeService } from "../services/index.js";

const likeService = new LikeService();

export const toggleLike = async(req, res)=>{
     const{modelId, modelType} = req.params();
    try {
        const response = await likeService.toggleLike(modelId, modelType, req.body.userId);
        return res.status(200).json({
            success:true,
            message:"Like toggled successfully",
            data:response,
            err:{}
        })
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:"Something went wrong",
            data:{},
            err:error
        })
    }
}