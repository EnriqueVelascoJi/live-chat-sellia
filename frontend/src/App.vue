    
<template> 
<RouterView />

</template>

<script>
  import { RouterLink, RouterView } from 'vue-router'

import gql from "graphql-tag"
import NavBar from "./components/Global/NavBar.vue"

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
      mutation: gql`mutation ($username: String!) {
        createUser(username: $username) {
          username
        }
      }`,
      variables: {
        username: this.username,
      },
    }).then((data) => {
      console.log(data)
    }).catch((error) => {
      console.error(error)
    })
    },
  },
};
</script>
