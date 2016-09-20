import {
    GraphQLObjectType,
    GraphQLString
} from 'graphql'

let MessageType = new GraphQLObjectType({
    name: "MessageTrackApp",
    description: "This is the type for the messages that the API should return",
    fields: {
        text: {
            type: GraphQLString
        } 
    }
})

export default MessageType