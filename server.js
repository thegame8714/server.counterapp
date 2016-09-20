// To run mongo: mongod --dbpath ./data/db
// babel-node server.js --presets es2015,stage-2
"user strict"
import express from 'express'
var app = express()
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import graphqlHTTP from 'express-graphql'
import { graphql } from 'graphql'
import schema from './graphql/index'
import {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString
} from 'graphql'

import userType from './graphql/types/users'

var path = 'mongodb://localhost/counterapp'
try {
  mongoose.connect(path)
} catch(e) {
  console.log(e)
}

import User from './app/models/user'
import Activity from './app/models/activity'
import userActivity from './app/models/userActivity'

//configure app to use bodyParser()
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;

var middleware = require('./middleware/basic_middleware');

var user_routes = require('./routes/user_routes');
var activity_routes = require('./routes/activity_routes');

//REGISTER ROUTES FROM REST
app.use('/api',[middleware, user_routes, activity_routes]);

app.use('/graphql', graphqlHTTP({
  schema: schema,
  pretty: true,
  graphiql: true
})).listen(8888, () =>  {
  console.log('GraphQl Server is now running on localhost:8888')
})


//START THE SERVER
var start = exports.start = function(port, callback){
    return app.listen(port,callback);
};

var stop = exports.stop = function(callback){
    return app.close(callback);
};

start(port);
console.log('Magic happpens on port ' + port)
