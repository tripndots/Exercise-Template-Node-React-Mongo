# Excercise-Template-Node-React-Mongo 

This is a template for testing a web developer's skill in:
MongoDB with Mongoose, ReactJS, Node with Express

This is to test competence in:
Asynchronous Functions, Promises, Mongoose, React Event Firing, Lifting State in React, HTTP.

## Software Requirements
You must install MongoDB and NodeJS

## Running the Completed
To start, first visit the interview--complete folder and:
```
npm install
mongod
npm start
```
Navigate to `www.localhost.com:8888` and you should see the application. When you add a new property it should add that property directly to the database and live update the property list. The api for the mongo data for "properties" is at `www.localhost.com:8888/api/properties`

## Running the Incomplete
To start, first visit the interview--incomplete folder and:
```
npm install
mongod
webpack -w
npm start
```

There are only 2 files that need to be eddited for completion:
`src/container/App.js` and `api/properties.js`

The developer may need to navigate to the two other container:
`AddProperty.js` and `PropertyList.js`, but do not need to be editted.

The developer has access to bluebird, axios, and of course fetch.
Note: If using bluebird, you must import it.
