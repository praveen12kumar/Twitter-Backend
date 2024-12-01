import { CommentService } from "../services/index.js";

const commentService = new CommentService();

export const createComment = async (req, res) => {
    try {
        const response = await commentService.createComment(req.query.modelId, req.query.modelType, req.body.userId, req.body.content);
        return res.status(200).json({
            success: true,
            message: "Comment created successfully",
            data: response,
            err: {}
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error
        })
    }
};


