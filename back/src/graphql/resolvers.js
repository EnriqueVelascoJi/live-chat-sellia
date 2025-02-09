import { TimestampResolver, UUIDResolver } from "graphql-scalars"
import { v4 } from "uuid";
import { PubSub } from "graphql-subscriptions"


import User from "../models/User.model.js";
import Messsage from "../models/Message.model.js"

const pubsub = new PubSub();
const NEW_MESSAGE = "NEW_MESSAGE";


const users = [
    {
      id: "8a169ade-2d06-4508-b5ba-57e730bef4af",
      username: "John",
      
    },
    {
      id: "ef3347db-d6f3-46ac-84aa-36f4c6076cc3",
      username: "Jane",
      
    },
  ];

const messages = []
  
  

const resolvers = {
    Timestamp: TimestampResolver,
    UUID: UUIDResolver,
    Query: {
        getAllMessages: async () => {
          return await Messsage.find()
        },
      usersCount: () => users.length,
      getAllUsers: async () => {
        return await User.find()
      },
      getUserById: (root, args) => users.find((user) => user.id === args.id),
    },
    Mutation: {
      createUser: async(root, args) => { 
        const user = new User({
          ...args,
        }) 
        return await user.save()
        
      },
      createMessage: async(root, args) => {
        const message = new Messsage({
          ...args
        })
        pubsub.publish(NEW_MESSAGE, {newMessage: message})        
        return await message.save()
      },
      updateUser: (root, args) => {
        let user = users.find((user) => user.id === args.id);
        if (user) {
          user = Object.assign(user, args);
          return user;
        }
        return null;
      },
      deleteUser: (root, args) => {
        let user = users.find((user) => user.id === args.id);
        if (user) {
          users.splice(users.indexOf(user), 1);
          return user;
        }
        return null;
      },
    },
    Subscription: {
      newMessage: {
        subscribe: () => pubsub.asyncIterableIterator([NEW_MESSAGE])
      }
    }
  };

export default resolvers;