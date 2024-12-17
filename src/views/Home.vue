<template>
  <div class="flex h-screen w-full flex-col items-center justify-center rounded-lg p-6 bg-custom-pink ">
    <div class="grid h-full w-full grid-cols-10 grid-rows-5 gap-4">

      <!-- item News -->
      <div
        class="col-span-4 row-span-3 rounded-3xl bg-custom-green flex flex-col drop-shadow-xl justify-center items-center cursor-pointer hover:scale-70 active:scale-95 transition-transform duration-200 title"
        id="news-item" @click="goToNewsPage" title="HAGA CLIC PARA LEER LAS NOVEDADES"> <!--FUTURO: personalizar el title -->
        <div v-if="randomNews"
          class="flex flex-col justify-between overflow-hidden rounded-lg bg-slate-50 shadow w-full h-full">
          <div class="flex-1">
            <img v-if="randomNews.urlToImage" :src="randomNews.urlToImage" alt="News-Image"
              class="w-full h-full object-cover rounded-t-xl" />
          </div>
        </div>
      </div>

      <!-- item contact -->
      <div class="col-span-6 row-span-1 rounded-3xl bg-custom-yellow flex drop-shadow-md justify-center items-center">
        <h3 class="text-5xl text-custom-purple-dark montserrat-title" id="contact-item">
          Contact me!
        </h3>
      </div>

      <!-- item gif
      <div class="col-span-1 row-span-1" id=" image-item">
        <img src="/girl-working.gif" alt="Girl working" class="w-full h-full object-cover" />
      </div> -->

      <!-- item game -->
      <div
        class="col-span-2 row-span-2 rounded-3xl bg-custom-purple drop-shadow-md cursor-pointer hover:scale-70 active:scale-95 transition-transform duration-200"
        id="game-item" @click="goToGame" title="Haga clic para iniciar tu aventura en la programación">
        <img src="/girl-working.gif" alt="Girl working" class="w-full h-full object-cover" /></div>
       
     <!-- item Welcome -->
      <div
        class="col-span-4 row-span-2 rounded-3xl bg-custom-green flex flex-col justify-center items-center drop-shadow-xl ">
        <h2 class="text-custom-purple-dark montserrat-title text-2xl mb-5">
          ¡Bienvenida a CodeGrrrl!
        </h2>
        <div class="text-custom-purple-dark montserrat-title text-xl flex flex-col justify-center items-center">
          <p>Un espacio creado para inspirar y</p>
          <p>apoyarte, a aventurarse en el</p>
          <p>mundo de la programación.</p>
          <p>¡Descubre noticias, desafíos y</p>
          <p>mucho más!</p>
        </div>
      </div>

      <!-- item blog-->
      <div
        class="col-span-4 row-span-2 rounded-3xl bg-custom-purple drop-shadow-md cursor-pointer hover:scale-70 active:scale-95 transition-transform duration-200"
        id="blog-item" @click="goToBlog">
        blog
      </div>

      <!-- item codegrl -->
      <div class="col-span-6 row-span-2 rounded-3xl bg-custom-yellow drop-shadow-md flex justify-center items-center">
        <h1 class="text-8xl text-custom-purple-dark montserrat-title" id="code-grl-item">
          Code Grrrl!
        </h1>
      </div>
    </div>
  </div>
</template>

<script>
import { useNewsStore } from "../stores/NewsStore";

export default {
  name: "Home",
  data() {
    return {
      randomNews: null,
    };
  },
  computed: {
    newsStore() {
      return useNewsStore();
    },
    filteredNews() {
      return this.newsStore.getNews.filter(
        (news) =>
          news.url !== "[Removed]" &&
          news.title !== "[Removed]" &&
          news.description !== "[Removed]"
      );
    },
  },

  methods: {
    async fetchNewsAndGenerate() {
      await this.newsStore.fetchNews();
      this.generateRandomNews()
    },
    generateRandomNews() {
      if (this.filteredNews.length > 0) {
        const randomIndex = Math.floor(Math.random() * this.filteredNews.length); // índice aleatório
        this.randomNews = this.filteredNews[randomIndex];
      }
    },
    goToGame() {
      this.$router.push("/game");
    },
    goToNewsPage() {
      this.$router.push({ path: "/news" });
    },
    goToBlog() {
      this.$router.push("/blog");
    },
  },

  mounted() {
    this.fetchNewsAndGenerate();
  },
};

</script>
<style></style>
