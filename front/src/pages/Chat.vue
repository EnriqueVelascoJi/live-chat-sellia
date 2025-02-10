
<template>
  <NavBar />
  <section >
  <div class="container py-5">

    <div class="row">
      <div class="col-md-12">

        <div class="card" id="chat3" style="border-radius: 15px; background-color:bisque;">
          <div class="card-body">

            <div class="row">
              <div class="col-md-6 col-lg-5  mb-4 mb-md-0">

                <div class="p-3">

                  <div class="input-group rounded mb-3">
                    <input type="search" class="form-control rounded" placeholder="Search" aria-label="Search"
                      aria-describedby="search-addon" />
                    <span class="input-group-text border-0" id="search-addon">
                      <i class="fas fa-search"></i>
                    </span>
                  </div>

                  <div data-mdb-perfect-scrollbar-init style="position: relative; height: 400px; overflow: scroll">
                    <ul class="list-unstyled mb-0">
                      <li class="p-2 border-bottom">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                                alt="avatar" class="d-flex align-self-center me-3" width="60">
                              <span class="badge bg-success badge-dot"></span>
                            </div>
                            <div class="pt-1">
                              <p class="fw-bold mb-0">Marie Horwitz</p>
                              <p class="small text-muted">Hello, Are you there?</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">Just now</p>
                            <span class="badge bg-danger rounded-pill float-end">3</span>
                          </div>
                        </a>
                      </li>
                      <li class="p-2 border-bottom">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava2-bg.webp"
                                alt="avatar" class="d-flex align-self-center me-3" width="60">
                              <span class="badge bg-warning badge-dot"></span>
                            </div>
                            <div class="pt-1">
                              <p class="fw-bold mb-0">Alexa Chung</p>
                              <p class="small text-muted">Lorem ipsum dolor sit.</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">5 mins ago</p>
                            <span class="badge bg-danger rounded-pill float-end">2</span>
                          </div>
                        </a>
                      </li>
                      <li class="p-2 border-bottom">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
                                alt="avatar" class="d-flex align-self-center me-3" width="60">
                              <span class="badge bg-success badge-dot"></span>
                            </div>
                            <div class="pt-1">
                              <p class="fw-bold mb-0">Danny McChain</p>
                              <p class="small text-muted">Lorem ipsum dolor sit.</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">Yesterday</p>
                          </div>
                        </a>
                      </li>
                      <li class="p-2 border-bottom">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava4-bg.webp"
                                alt="avatar" class="d-flex align-self-center me-3" width="60">
                              <span class="badge bg-danger badge-dot"></span>
                            </div>
                            <div class="pt-1">
                              <p class="fw-bold mb-0">Ashley Olsen</p>
                              <p class="small text-muted">Lorem ipsum dolor sit.</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">Yesterday</p>
                          </div>
                        </a>
                      </li>
                      <li class="p-2 border-bottom">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava5-bg.webp"
                                alt="avatar" class="d-flex align-self-center me-3" width="60">
                              <span class="badge bg-warning badge-dot"></span>
                            </div>
                            <div class="pt-1">
                              <p class="fw-bold mb-0">Kate Moss</p>
                              <p class="small text-muted">Lorem ipsum dolor sit.</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">Yesterday</p>
                          </div>
                        </a>
                      </li>
                      <li class="p-2">
                        <a href="#!" class="d-flex justify-content-between">
                          <div class="d-flex flex-row">
                            <div>
                              <img
                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                                alt="avatar" class="d-flex align-self-center me-3" width="60">
                              <span class="badge bg-success badge-dot"></span>
                            </div>
                            <div class="pt-1">
                              <p class="fw-bold mb-0">Ben Smith</p>
                              <p class="small text-muted">Lorem ipsum dolor sit.</p>
                            </div>
                          </div>
                          <div class="pt-1">
                            <p class="small text-muted mb-1">Yesterday</p>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>

                </div>

              </div>

              <div class="col-md-6 col-lg-7 ">

                <div class="pt-3 pe-3" data-mdb-perfect-scrollbar-init
                  style="position: relative; height: 400px; overflow: scroll;">

                  <div
                    v-for="(message, id) in messages"
                    :key="id"
                  >
             

                  <div v-if="message.from == 'd5e71663-a329-46cf-8c47-3ff2991019db'" class="d-flex flex-row justify-content-start">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                      alt="avatar 1" style="width: 45px; height: 100%;">
                    <div>
                      <p class="small p-2 ms-3 mb-1 rounded-3 bg-body-tertiary">{{ message.content }}</p>
                      <p class="small ms-3 mb-3 rounded-3 text-muted float-end">12:00 PM | Aug 13</p>
                    </div>
                  </div>

                  <div v-else class="d-flex flex-row justify-content-end">
                    <div>
                      <p class="small p-2 me-3 mb-1 text-white rounded-3 bg-primary">{{ message.content }}</p>
                      <p class="small me-3 mb-3 rounded-3 text-muted">12:00 PM | Aug 13</p>
                    </div>
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                      alt="avatar 1" style="width: 45px; height: 100%;">
                  </div>

                </div>

                  

                </div>

                <div class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                  <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava6-bg.webp"
                    alt="avatar 3" style="width: 40px; height: 100%;">
                  <input @keyup.enter="sendMessage" v-model="message" type="text" class="form-control form-control-lg" id="exampleFormControlInput2"
                    placeholder="Type message">
                  <a class="ms-1 text-muted" href="#!"><i class="fas fa-paperclip"></i></a>
                  <a class="ms-3 text-muted" href="#!"><i class="fas fa-smile"></i></a>
                  <a @click="sendMessage" class="ms-3" ><i class="fas fa-paper-plane"></i></a>
                </div>
                

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>

  </div>
</section>
</template>


<script>

import gql from "graphql-tag"
import { useRoute, useRouter } from "vue-router";
import NavBar from "../components/Global/NavBar.vue"
import { MESSAGE_MUTATION, MESSAGE_QUERY, MESSAGE_SUBSCRIPTION } from "../graphql/graphql"


export default {
  name: 'chat',
  components: {
    NavBar
  },
  
  data() {
    return {
      username: '',
      message: '',
      router:useRouter()

      
    };
  },
  apollo: {
    messages : {
      query: MESSAGE_QUERY,

      update(data) {
        return data.messages
      },

      subscribeToMore: {
        document: MESSAGE_SUBSCRIPTION,
        
        // Mutate the previous result
        updateQuery: (previousResult, { subscriptionData }) => {
          const data =  [
              ...previousResult.messages, subscriptionData.data.newMessage
            ]
          console.log(data)
          return {
            messages: data
          }
          
        },
      }  
    } 
  },
  methods: {
    sendMessage() {


      console.log(this.message)
      this.$apollo.mutate({
      // Query
      mutation: gql`mutation ($content: String!, $from: String!, $to: String!) {
        createMessage(content: $content, from: $from, to: $to) {
          content, from, to
        }
      }`,
      variables: {
        content: this.message,
        from: "a6a1d59a-605a-4ae4-9799-c64fe6d6379f",
        to: "d5e71663-a329-46cf-8c47-3ff2991019db"
      },
    }).then((data) => {
      // Result
    }).catch((error) => {
      // Error
      console.error(error)
      // We restore the initial user input
    })

    
    
    },
    
  }
  
};
</script>

