import express from 'express'
import mongoose from 'mongoose'

const router = express.Router()

// Declare Schema
let propertySchema = mongoose.Schema({
  address: String,
  state: String,
  zip: String
})

// Declare model
let Property = mongoose.model('Property', propertySchema)

// Set inital Data
const initialData = [
  {
    'address': '2360 Westridge Center',
    'state': 'California',
    'zip': 89183
  }, {
    'address': '05991 Grover Trail',
    'state': 'California',
    'zip': 89052
  }, {
    'address': '8287 Caliangt Plaza',
    'state': 'Arizona',
    'zip': 89052
  }, {
    'address': '35 Thompson Court',
    'state': 'Texas',
    'zip': 89183
  }, {
    'address': '297 Marquette Circle',
    'state': 'California',
    'zip': 89052
  }
]

Property.create(initialData, (err) => {
  if (err) {
    console.log(err)
  }
  console.log('Load of initial data complete.')
})

// Get Request for all Properties
router.get('/', (req, res) => {
  Property.find({}, (err, users) => {
    if (err) console.log(err)
    res.send(users)
  })
})

// Post Request for adding a Property
router.post('/', (req, res) => {
  let newProperty = new Property(req.body)
  let promise = Property.create(newProperty)
  promise.then(() => {
    Property.find({}, (err, users) => {
      if (err) console.log(err)
      res.send(users)
    })
  })
})

export default router
