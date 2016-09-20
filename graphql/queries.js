import {
  GraphQLObjectType
} from 'graphql'

import { user as userObj} from './types/users'
import { activity as activityObj} from './types/activities'

let QueryType = new GraphQLObjectType({
  name: 'QueryTrackApp',
  description: "This is the list of queries that the app support",
  fields: {
    users: userObj.getAllUsers,
    userById: userObj.getSingleUser,
    activities: activityObj.getAllActivities,
    activityById: activityObj.getSingleActivity
  }
})

export default QueryType
