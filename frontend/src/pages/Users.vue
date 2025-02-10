
<template>
  
  <NavBar />
  
  <section >
  <div class="container py-5">

    <div class="row">
      <div class="col-md-12">

        <div class="card" id="chat3" style="border-radius: 15px; background-color:bisque;">
          <div class="card-body">

            <div class="row">

                <div class="p-3">


                  <div data-mdb-perfect-scrollbar-init style="position: relative; height: 400px; overflow: scroll">
                    <ul class="list-unstyled mb-0">

                      <li class="p-2 border-bottom"
                        v-for="(user, id) in users"
                        :key="id"
                      >
                        <a href="#!" class="d-flex justify-content-between">
                            <div class="d-flex flex-row">
                              <div>
                                <img
                                  src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/unknown-512.png"
                                  alt="avatar" class="d-flex align-self-center me-3" width="60">
                                <span class="badge bg-success badge-dot"></span>
                              </div>
                              <div class="pt-3">
                                <p class="fw-bold mb-0">{{ user.username }}</p>
                              </div>
                            </div>
                          
                          </a>
                        </li>
                      
                     
                    </ul>
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
import { USER_MUTATION, USER_QUERY, USER_SUBSCRIPTION } from "../graphql/graphql"



export default {
  name: 'users',
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
    users: {
      query: USER_QUERY,

      update(data) {
        console.log(data)
        return data.users
      },
  
      subscribeToMore: {
        document: USER_SUBSCRIPTION,
        
        // Mutate the previous result
        updateQuery: (previousResult, { subscriptionData }) => {
          console.log(previousResult, subscriptionData)
          const data =  [
              ...previousResult.users, subscriptionData.data.newUser
            ]
          return {
            users: data
          }
          
        },
      }  
    } 
  },
  methods: {
    
  }
  
};
</script>

