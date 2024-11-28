import { TweetRepository, HashtagRepository } from "../repository/index.js";

class TweetService{

    constructor(){
        this.tweetRepository = new TweetRepository();
        this.hashtagRepository = new HashtagRepository();

    }


    async create(data){
        // extract out the title of the hashtags from the content of tweet
        // create the tweet
        // create the hashtags in bulk 
        // in the hashtags array, there are some hastags thay are already in the array and some are new hashtags
        // for the existing once, we need to add the tweet id to the tweets array
        // for the new once, we need to create a new hashtag and add the tweet id to the tweets array
        
        const content = data.content;
        // only extract the title of the tags
        const tags = content.match(/#[a-zA-Z0-9]+/g).map((tag)=> tag.substring(1).toLowerCase())   
        
        const tweet = await this.tweetRepository.create(data);
        // find the existing tags
        const alreadyPresentTag = (await this.hashtagRepository.findByName(tags))
        // extract the title of the tags
        const titleOfAlreadyPresentTag = alreadyPresentTag.map((tag)=> tag.title);
        // find the new tags
        const newTags = tags.filter((tag)=> !titleOfAlreadyPresentTag.includes(tag)); 
        // process the new hashtags
        const newHashtag = newTags.map((tag)=> ({title: tag, tweets: [tweet._id]}));
        // create the new hashtags in bulk
        await this.hashtagRepository.createBulk(newHashtag);
        // add the tweet id to the tweets array of the existing hashtags
        alreadyPresentTag.forEach((tag)=> {
            tag.tweets.push(tweet._id)
            tag.save();
        });
  
        return tweet;
    }

}


export default TweetService;

/*
    need to extract the hashtags from tweet
    this is my #first tweet, very #excited
*/