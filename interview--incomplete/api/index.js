import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

const router = express.Router()

router.get('/', (req, res) => {
	res.send('Welcome to the API page')
});

export default router;