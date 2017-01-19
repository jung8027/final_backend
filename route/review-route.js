const router = require('express').Router();

//REQUIRE MODELS
const Review = require('../models').Review;

//FUNCTIONS
const getAllReviews = (req,res)=>(
	Review.findAll()
	.then(ReviewsInfo=>res.send(ReviewsInfo))
)

const createReview = (req,res)=>(
	Review.create({
		rating: req.body.rating,
		description: req.body.description,
		date: req.body.date,
		RestaurantId: req.body.RestaurantId
	})
	.then(ReviewInfo=>res.send(ReviewInfo))

)

//ROUTES
router.route('/')
	.post(createReview)

module.exports = router