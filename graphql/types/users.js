import {
  GraphQLObjectType,
  GraphQLInputObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLBoolean,
  GraphQLList,
  GraphQLID
} from 'graphql';

import User from '../../app/models/user'
import userData from '../../app/controllers/users/users'
import MessageType from './message'

let userType =  new GraphQLObjectType({
  name: 'User',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    first_name: {
      type: GraphQLString
    },
    last_name: {
      type: GraphQLString
    },
    address_street_line_1: {
      type: GraphQLString
    },
    address_street_line_2: {
      type: GraphQLString
    },
    address_street_line_3: {
      type: GraphQLString
    },
    post_code: {
      type: GraphQLString
    },
    country: {
      type: GraphQLString
    },
    verified: {
      type: GraphQLBoolean
    }
  }
})

let userInputType = new GraphQLInputObjectType({
  name: "UserInput",
  fields: () => ({
    first_name:  { type: new GraphQLNonNull(GraphQLString)},
    last_name: { type: new GraphQLNonNull(GraphQLString)},
    address_street_line_1: { type: new GraphQLNonNull(GraphQLString)},
    address_street_line_2: { type: GraphQLString},
    address_street_line_3: { type: GraphQLString},
    post_code: { type: new GraphQLNonNull(GraphQLString)},
    country: { type: new GraphQLNonNull(GraphQLString)}
  })
})

let getAllUsers = {
  type:  new GraphQLList(userType),
  resolve: () => {
    return new Promise((resolve, reject) => {
      userData.getUsers((err,users) => {
        if(err)
          reject(err)

        resolve(users)
      })
    })
  }
}

let getSingleUser = {
  type: userType,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: (_,args) => {
    return new Promise((resolve, reject) => {
      userData.getUserById(args, (err,user) => {
        if(err)
          reject(err)

        resolve(user)
      })
    })
  }
}

let addUser = {
  type: userType,
  args: {
    article: { type: userInputType}
  },
  resolve: (_, args) => {
    return new Promise((resolve, reject) => {
      userData.addNewUser(args.article, (err, newUser)=> {

        if(err)
          reject(err)

        resolve(newUser)
      })
    })
  }
}

let deleteUser = {
  type: MessageType,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: (_, args) => {
    return new Promise((resolve, reject) => {
      userData.deleteUser(args, (err, user)=> {
        if(err)
          reject(err)

        resolve({
          text: "User deleted succesfully"
        })
      })
    })
  }
}

let deleteAllUsers = {
  type: MessageType,
  resolve: () => {
    return new Promise((resolve, reject) => {
      userData.deleteAllUsers((err) => {
        if(err)
          reject(err)

        resolve({
          text: "All users have been deleted"
        })
      })
    })
  }
}


export const user = {
  userType,
  getAllUsers,
  getSingleUser,
  addUser,
  deleteUser,
  deleteAllUsers
}
