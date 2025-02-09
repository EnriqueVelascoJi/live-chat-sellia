    // frontend/src/graphql.js
    
    import gql from 'graphql-tag'
    
    export const CHATS_QUERY = gql`
      query ChatsQuery {
        chats {
          id
          from
          message
        }
      }
    `
