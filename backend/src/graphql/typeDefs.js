import { TimestampTypeDefinition, UUIDDefinition } from "graphql-scalars"
import { gql } from "apollo-server";


const typeDefs = [gql`
  type User {
    id: UUID
    username: String!
    
  }
  type Message {
    id: UUID,
    content: String!
    type: String!
    sender: UUID!
    timestamp: Timestamp!
  }

  type Query {
    messages: [Message]!
    users: [User]!
  }
  

  type Mutation {
    createUser(username: String!): User
    createMessage(content: String!, type: String!, sender: UUID!): Message
    
  } 

  type Subscription {
    newMessage: Message,
    newUser: User
  }

`, TimestampTypeDefinition, UUIDDefinition];

export default typeDefs