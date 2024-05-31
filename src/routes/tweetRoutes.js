const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const tweetController = require('../controllers/tweetController');

router.post('/', auth, tweetController.postTweet);
router.get('/:userId/timeline', auth, tweetController.getTimeline);

module.exports = router;
