<template>
  <NavBar />
  <div class="page-wrap">
    <router-view></router-view>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue';

// whatever we write below will be available for us to use in our template above
export default {
  name: "App",
  components: { 
    NavBar
  },
};
</script>
