import {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLList,
  GraphQLBoolean,
  GraphQLID
} from 'graphql'

import Activity from '../../app/models/activity'
import activityData from '../../app/controllers/activities/activities'

let activityType = new GraphQLObjectType({
  name: 'Activity',
  fields: {
    id: {
      type: new GraphQLNonNull(GraphQLID)
    },
    name: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString
    }
  }
})

let getAllActivities = {
  type: new GraphQLList(activityType),
  resolve: () => {
    return new Promise((resolve,reject) => {
      activityData.getActivities((err,activities) => {
        if(err)
          reject(err)

        resolve(activities)
      })
    })
  }
}

let getSingleActivity = {
  type: activityType,
  args: {
    name: {
      type: GraphQLString
    },
    id: {
      type: GraphQLString
    }
  },
  resolve: (_,args) => {
    return new Promise((resolve,reject) => {
      activityData.getActivityById(args, (err,activities) => {
        if(err)
          reject(err)

        resolve(activities)
      })
    })
  }
}

let addNewActivity = {
  type: activityType,
  args: {
    name: {
      type: GraphQLString
    },
    type: {
      type: GraphQLString
    }
  },
  resolve: (_, args) => {
    return new Promise((resolve, reject) => {
      activityData.addNewActivity(args, (err, newActivity)=> {
        if(err)
          reject(err)

        resolve(newActivity)
      })
    })
  }
}

let deleteActivity = {
  type: activityType,
  args: {
    id: {
      type: GraphQLString
    }
  },
  resolve: (_, args) => {
    return new Promise((resolve, reject) => {
      activityData.deleteActivity(args, (err, activity)=> {
        if(err)
          reject(err)

        resolve(activity)
      })
    })
  }
}

let deleteAllActivities = {
  type: activityType,
  resolve: () => {
    return new Promise((resolve, reject) => {
      activityData.deleteAllActivities((err) => {
        if(err)
          reject(err)

        resolve(new Activity())
      })
    })
  }
}


export const activity = {
  activityType,
  getAllActivities,
  getSingleActivity,
  addNewActivity,
  deleteActivity,
  deleteAllActivities
}
