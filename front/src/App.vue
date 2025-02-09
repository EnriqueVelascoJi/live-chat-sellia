    
<template>
  <NavBar />
 

<RouterView />

</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'

import gql from "graphql-tag"
import NavBar from "./components/Landing/NavBar.vue"

export default {
  name: 'app',
  components: {
    NavBar
  },
  data() {
    return {
      username: '',
      messages: [],

      
    };
  },
  methods: {
    signup() {
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
