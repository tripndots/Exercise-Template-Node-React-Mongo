import mongoose from 'mongoose';
import bodyParser from 'body-parser'

import express from 'express';
const server = express();

import apiRouter from './api';
import properties from './api/properties'

server.use(express.static(__dirname + '/assets'));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use('/api', apiRouter);
server.use('/api/properties', properties)

// start database
mongoose.connect('mongodb://localhost:27017/interview');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('MongoDB is connected...')
});

// catch 404 and forward to error handler
server.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
server.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
 

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

server.listen(process.env.PORT || 8888, () => {
	console.log('Express started. Server is online on port 8888.');
});

export default server;