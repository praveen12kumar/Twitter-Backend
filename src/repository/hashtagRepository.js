import Hashtag from "../models/hashtag.model.js";
import CrudRepository from "./crudRepository.js";

class HashtagRepository extends CrudRepository{
    
    constructor(){
        super(Hashtag);
    }

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

    async findByName(titleList){
        try {
            const hashtag = await Hashtag.find({title:titleList});
            return hashtag;
        } catch (error) {
            console.log("Error in getting Hashtag", error);
            throw error;
        }
    }

}

export default HashtagRepository;