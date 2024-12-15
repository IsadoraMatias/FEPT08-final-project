<template>
  <div>
    <Navbar v-if="!isHomePage" />
    <router-view />
  </div>
</template>
<script>
import Navbar from './components/Navbar.vue';

export default {
  name: "App",
  data() {
    return {

    }
  },
  components: {
    Navbar
  },
  computed: {
    isHomePage() {
      return this.$route.path ==='/home';
    }
  }
}
</script>
<style></style>