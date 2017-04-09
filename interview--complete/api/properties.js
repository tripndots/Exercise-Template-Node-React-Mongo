import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const router = express.Router()

// Declare Schema
let propertySchema = mongoose.Schema({
	address: String,
	state: String,
	zip: String
});

// Declare model
let Property = mongoose.model('Property', propertySchema)

// Get Request for all Properties
router.get('/', (req, res) => {
	Property.find({}, (err, users) => {
		res.send(users);
	})
});

// Post Request for adding a Property
router.post('/', (req, res) => {
	let newProperty = new Property(req.body)
	newProperty.save().then(() => {
		Property.find({}, (err, users) => {
			res.send(users);
		})
	})
})

export default router;
