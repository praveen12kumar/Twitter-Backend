import Like from "../models/like.model.js";
import CrudRepository from "./crudRepository.js";

class LikeRepository extends CrudRepository {
    constructor() {
        super(Like);
    }

    async findByUserAndLikeable(data){
        try {
            const like = await Like.findOne(data);
            return like;
        } catch (error) {
            console.log("Something went wrong");
            throw error;
        }
    }
}

export default LikeRepository;