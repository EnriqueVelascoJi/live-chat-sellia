import { TimestampTypeDefinition, UUIDDefinition } from "graphql-scalars"
import { gql } from "apollo-server";


const typeDefs = [gql`
  type User {
    id: UUID
    username: String!
    
  }
  type Message {
    id: ID,
    content: String!
    from: String!
    to: String!
    timestamp: Timestamp
  }

  type Query {
    getAllMessages: [Message]!
    usersCount: Int
    getAllUsers: [User]!
    getUserById(id: String!): User
  }

  type Mutation {
    createUser(username: String!): User

    createMessage(content: String!, from: String!, to: String!): Message

    updateUser(
      id: String
      name: String
      phone: String
      age: Int
      city: String
    ): User
    deleteUser(id: String): User
  } 
    type Subscription {
newMessage: Message
}

`, TimestampTypeDefinition, UUIDDefinition];

export default typeDefs