import { TimestampResolver, UUIDResolver } from "graphql-scalars"
import { PubSub } from "graphql-subscriptions"


import User from "../models/User.model.js";
import Messsage from "../models/Message.model.js"

const pubsub = new PubSub();
const NEW_MESSAGE = "NEW_MESSAGE";
const NEW_USER = "NEW_USER";




const resolvers = {
    Timestamp: TimestampResolver,
    UUID: UUIDResolver,
    Query: {
      messages: async () => {
        return await Messsage.find()
      },

      users: async () => {
        return await User.find()
      }
    },
    Mutation: {
      createUser: async(root, args) => { 
        console.log(args)
        const user = new User({
          ...args,
        })
        pubsub.publish(NEW_USER, {newUser: user})        
        return await user.save()
        
      },

      createMessage: async(root, args) => {
        console.log(args)
        const message = new Messsage({
          ...args
        })
        pubsub.publish(NEW_MESSAGE, {newMessage: message})        
        return await message.save()
      },
      
    },
    Subscription: {
      newMessage: {
        subscribe: () => pubsub.asyncIterableIterator([NEW_MESSAGE])
      },

      newUser: {
        subscribe: () => pubsub.asyncIterableIterator([NEW_USER])
      }
    }
  };

export default resolvers;