import  Tweet from "../models/tweet.model.js";
import CrudRepository from "./crudRepository.js";


class TweetRepository extends CrudRepository{

    constructor(){
        super();
    }

    async create(data){    // data will be of type Tweet model
        try {
            let tweet =  await Tweet.create(data); 
            return tweet;
        } catch (error) {
            console.log("Error in creating tweet", error);
            throw error;
        }
    }

    async getAll(){
        try {
            const tweets = await Tweet.find({});
            return tweets;
        } catch (error) {
            console.log("Error in getting all tweets", error);
            throw error;
        }
    }

    
}


export default TweetRepository;



// CRUD => create, get and delete
// not update because tweet is immutable