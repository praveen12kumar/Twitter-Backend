import Hashtag from "../models/hashtag.model.js";

class HashtagRepository{
    

    async create(data){
        try {
            const hashtag = await Hashtag.create(data);
            return hashtag
        } catch (error) {
            console.log("Error in creating Hashtag", error);
            throw error;
        }
    }

    async createBulk(data){
        try {
            const hashtags = await Hashtag.insertMany(data);
            return hashtags;

        } catch (error) {
            console.log("Error in creating Bulk Hashtag", error);
            throw error;
        }
    }

    async get(id){
        try {
            const hashtag = await Hashtag.findById(id);
            return hashtag;
        } catch (error) {
            console.log("Error in getting Hashtag", error);
            throw error;
        }
    }

    async findByName(titleList){
        try {
            const hashtag = await Hashtag.find({title:titleList});
            return hashtag;
        } catch (error) {
            console.log("Error in getting Hashtag", error);
            throw error;
        }
    }

    async destroy(id){
        try {
            const hashtag = await Hashtag.findByIdAndDelete(id);
            return hashtag;
        } catch (error) {
            console.log("Error in deleting Hashtag", error);
            throw error;
        }
    }
}

export default HashtagRepository;