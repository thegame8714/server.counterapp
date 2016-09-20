import {
  GraphQLObjectType
} from 'graphql'

import { user as userObj} from './types/users'
import { activity as activityObj} from './types/activities'

let MutationType =  new GraphQLObjectType({
  name: "MutationTrackApp",
  description: "This is the list of mutation that this app support",
  fields: {
    addUser: userObj.addUser,
    deleteUser: userObj.deleteUser,
    deleteAllUsers: userObj.deleteAllUsers,
    addActivity: activityObj.addNewActivity,
    deleteActivity: activityObj.deleteActivity,
    deleteAllActivities: activityObj.deleteAllActivities
  }
})

export default MutationType
