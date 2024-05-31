const Tweet = require('../models/Tweet');

exports.postTweet = async (req, res) => {
    try {
        const { text } = req.body;
        const tweet = new Tweet({ userId: req.user.userId, text });
        await tweet.save();
        res.status(201).send('Tweet posted successfully');
    } catch (error) {
        res.status(400).send(error.message);
    }
};

exports.getTimeline = async (req, res) => {
    try {
        const { userId } = req.params;
        const { cursor } = req.query;
        const limit = 10;
        const tweets = await Tweet.find({ userId })
            .sort({ createdAt: -1 })
            .limit(limit)
            .skip(cursor ? Number(cursor) : 0);
        res.json(tweets);
    } catch (error) {
        res.status(400).send(error.message);
    }
};
