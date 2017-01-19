const router = require('express').Router();

router.use('/restaurants', require('./restaurants-route'));
router.use('/review', require('./review-route'));

module.exports = router