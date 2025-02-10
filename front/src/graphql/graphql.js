    
import gql from 'graphql-tag'


export const USER_QUERY = gql`
  query UsersQuery {
    users {
      id,
      username
    }
  }`

export const USER_MUTATION = gql`
  mutation UserMutation($username: String!) {
    createUser(username: $username) {
      id,
      username
    }
  }`
    
export const USER_SUBSCRIPTION = gql`
  subscription UserSubscription{
    newUser {
      id,
      username
    }
  }`


export const MESSAGE_QUERY = gql`
  query MessageQuery{
    messages {
      id,
      content,
      sender,
      type,
      timestamp
    }
  }`

export const MESSAGE_MUTATION = gql`
  mutation MessageMutation($content: String!, $sender: UUID!, $type: String!) {
    createMessage(content: $content, sender: $sender, type: $type) {
      content,
      sender,
      type
    }
  }`
    
export const MESSAGE_SUBSCRIPTION = gql`
  subscription MessageSubscription {
    newMessage {
      id,
      content,
      sender,
      type,
      timestamp
    }
  }`
