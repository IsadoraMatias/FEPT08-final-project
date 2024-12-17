<template>
  <div>
    <!-- <h1 class="text-custom-purple-dark montserrat-title text-3xl justify-center items-center">¡Bienvenida a la nuestra
      News!</h1> -->
    <p v-if="loading"><img src="/public/loading.gif" alt="Loading"></p>
    <p v-if="error">Sorry, this news is unavaible</p>
    <NewsCards />
  </div>
</template>

<script>
import { useNewsStore } from '../stores/NewsStore.js';
import NewsCards from '../components/NewsCards.vue';


export default {
  name: "NewsPage",
  components: { NewsCards },

  computed: {
    newsStore() {
      return useNewsStore();
    },

    news() {
      return this.newsStore.getNews;
    },
    loading() {
      return this.newsStore.getLoading;
    },
    error() {
      return this.newsStore.getError;
    },
  },

  mounted() {
    this.newsStore.fetchNews();
  },
};
</script>

<style></style>