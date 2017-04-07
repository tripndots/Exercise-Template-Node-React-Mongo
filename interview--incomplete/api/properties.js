import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const router = express.Router()

// DO NOT TOUCH
// Declare Schema
let propertySchema = mongoose.Schema({
	address: String,
	state: String,
	zip: String
});

// DO NOT TOUCH
// Declare model
let Property = mongoose.model('Property', propertySchema)

// DO NOT TOUCH
// Get Request for all Properties
router.get('/', (req, res) => {
	Property.find({}, (err, users) => {
		res.send(users);
	})
});

// ***************************************** //
// Handle Post Request for adding a Property //

// ********** YOUR CODE GOES HERE ********** //

// ***************************************** //

export default router;