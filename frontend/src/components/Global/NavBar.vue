    
<template>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <RouterLink to="/main-chat">
      <a v-bind:class="{active: $route.fullPath=='/main-chat'}" class="nav-link" aria-current="page" href="#">Main chat room</a>
    </RouterLink>
  </li>
  <li class="nav-item">
      <a class="nav-link disabled" href="#">Your chat</a>
  </li>
  <li class="nav-item disabled">
    <a class="nav-link disabled" href="#">Your groups</a>
  </li>
  <li class="nav-item">
    <RouterLink to="/users">
      <a v-bind:class="{active: $route.fullPath=='/users'}" class="nav-link" href="#">Users</a>
    </RouterLink>
  </li>
  
</ul>

  </template>


<script>



export default {
  name: 'navbar',

  data() {
    return {
      
    };
  },
  
};
</script>
  
