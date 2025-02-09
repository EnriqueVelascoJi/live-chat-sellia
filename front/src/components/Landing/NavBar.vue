    
<template>
  <nav class="navbar navbar-dark bg-primary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="../../assets/images/chating.png" alt="" width="50" height="50" class="d-inline-block align-text-top">
        Quique´s Live chat
      </a>
    </div>
  </nav>

  </template>
  
  <script>
  import gql from 'graphql-tag'
  
  export default {
    name: 'navbar',
    data() {
      return {
        username: '',
        messages: [],
  
        
      };
    },
    methods: {
      enterChat() {
        console.log(this.username)
        this.$apollo.mutate({
        // Query
        mutation: gql`mutation ($username: String!) {
          createUser(username: $username) {
            username
          }
        }`,
        variables: {
          username: this.username,
        },
      }).then((data) => {
        // Result
        console.log(data)
      }).catch((error) => {
        // Error
        console.error(error)
        // We restore the initial user input
      })
      },
    },
  };
  </script>
  