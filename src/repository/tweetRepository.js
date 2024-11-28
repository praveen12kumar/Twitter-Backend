import  Tweet from "../models/tweet.model.js";


class TweetRepository {

    

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


    async find(id){
        try {
            const tweet = await Tweet.findById({id});
            return tweet;
        } catch (error) {
            console.log("Error in getting tweet", error);
            throw error;
        }
    }

    async deleteTweet(){
        try {
            const tweet = await Tweet.findByIdAndDelete(id);
            return tweet;
            
        } catch (error) {
            console.log("Ennor in deleting Tweet", error);
            throw error
        }
    }
}


export default TweetRepository;



// CRUD => create, get and delete
// not update because tweet is immutable