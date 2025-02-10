
<template>
  <NavBar />
  <section >
  <div class="container py-5">

    <div class="row">
      <div class="col-md-12">

        <div class="card" id="chat3" style="border-radius: 15px; background-color:bisque;">
          <div class="card-body">

            <div class="row">
             


                <div class="pt-3 pe-3" data-mdb-perfect-scrollbar-init
                  style="position: relative; height: 400px; overflow: scroll;">

                  <div
                    v-for="(message, id) in messages"
                    :key="id"
                  >
                   

                      <div v-if="sender === message.sender" class="d-flex flex-row justify-content-end">
                       
                        <div>
                          <p class="small p-2 ms-3 mb-1 rounded-3 text-white  bg-primary">{{ message.content }}</p>
                          <p class="small p-2 me-3 mb-1 text-muted ">{{ message.sender }}</p>

                          <p class="small ms-3 mb-3 rounded-3 text-muted float-end">
                            {{ new Date(message.timestamp).toLocaleString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                          }) }}
                          </p>
                        </div>
                         <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                          alt="avatar 1" style="width: 45px; height: 100%; margin-left: 10px;">
                      </div>

                      <div v-else class="d-flex flex-row justify-content-start">
                        <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                          alt="avatar 1" style="width: 45px; height: 100%; margin-right: 10px;">
                        <div>

                          <p class="small p-2 me-3 mb-1 rounded-3 bg-body-tertiary">{{ message.content }}</p>
                          <p class="small p-2 me-3 mb-1 text-muted ">{{ message.sender }}</p>

                          <p class="small me-3 mb-3 rounded-3 text-muted float-start">
                            {{ new Date(message.timestamp).toLocaleString([], {
                                hour: "2-digit",
                                minute: "2-digit",
                          }) }}
                          </p>
                        </div>
                        
                      </div>

                  </div>

                  

                </div>

                <div class="text-muted d-flex justify-content-start align-items-center pe-3 pt-3 mt-2">
                  <img src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
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
</section>
</template>


<script>

import gql from "graphql-tag"
import { useRoute, useRouter } from "vue-router";
import NavBar from "../components/Global/NavBar.vue"
import { MESSAGE_MUTATION, MESSAGE_QUERY, MESSAGE_SUBSCRIPTION, USER_QUERY, USER_SUBSCRIPTION} from "../graphql/graphql"


export default {
  name: 'mainChat',
  components: {
    NavBar
  },
  
  data() {
    return {
      username: '',
      message: '',
      sender: this.$store.getters.getUserId,
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
          updateQuery: (previousResult, { subscriptionData }) => {
            const data =  [
                ...previousResult.messages, subscriptionData.data.newMessage
            ]
            return {
              messages: data
            }
          },
      }  
    },
     
  },
  methods: {
    sendMessage() {
      this.$apollo.mutate({
      mutation: MESSAGE_MUTATION,
      variables: {
        content: this.message,
        sender: this.sender,
        type: "Global"
      },
      }).then((data) => {
        this.message = ''
        
      }).catch((error) => {
        console.error(error)
        this.message = ''
      })
    },
    
  }
  
};
</script>

