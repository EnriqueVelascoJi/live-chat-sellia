<template>


<div id="app" class="main-banner wow fadeIn"  data-wow-duration="1s" data-wow-delay="0.5s">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="row">
            <div class="col-lg-6 align-self-center">
              <div class="left-content show-up header-text wow fadeInLeft" data-wow-duration="1s" data-wow-delay="1s">
                <div class="row">
                  <div class="col-lg-12">
                    <h2>Quique´s Live Chat </h2>
                    <p>Here you can chat on live wit all your friends. You choose chat with only one person at time or also by making a group</p>
                  </div>
                  <div class="col-lg-12">
                    <div class="red-button first-button scroll-to-section">
                      <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Start chatting </button>
                    </div>
                    
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6">
              <div class="right-image wow fadeInRight" data-wow-duration="1s" data-wow-delay="0.5s">
                <img src="../assets/images/chating.png" alt="" width="100%" >
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>


  <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Start Chatting on live with your friends</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <form>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Username:</label>
            <input type="text" class="form-control" id="recipient-name" v-model="username">
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button @click="signup" type="button" class="btn btn-primary">Signup</button>
      </div>
    </div>
  </div>
</div>

</template>

<script>

import gql from "graphql-tag"
import { useRoute, useRouter } from "vue-router";


export default {
  name: 'home',
  
  data() {
    return {
      username: '',
      messages: [],
      router: useRouter()

      
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
      this.router.push("/chat")
    }).catch((error) => {
      // Error
      console.error(error)
      // We restore the initial user input
    })
    },
  },
};
</script>
