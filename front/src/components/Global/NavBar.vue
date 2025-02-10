    
<template>
<ul class="nav nav-tabs">
  <li class="nav-item">
    <RouterLink to="/main-caht">
      <a class="nav-link active" aria-current="page" href="#">Main chat room</a>
    </RouterLink>
  </li>
  <li class="nav-item">
    <RouterLink to="/main-caht">
      <a class="nav-link" href="#">Your chat</a>
    </RouterLink>
  </li>
  <li class="nav-item disabled">
    <a class="nav-link" href="#">Your groups</a>
  </li>
  <li class="nav-item">
    <RouterLink to="/users">
      <a class="nav-link" href="#">Users</a>
    </RouterLink>
  </li>
  
</ul>

  </template>


<script>



export default {
  name: 'navbar',
  
  
  data() {
    return {
      username: '',
      message: '',
      user: this.$route.params.id,

      
    };
  },
  
};
</script>
  
