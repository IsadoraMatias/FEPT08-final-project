import { defineStore } from "pinia";

export const useNewsStore = defineStore("news", {
  //state
  state: () => ({
    newsList: [],
    loading: false,
    error: null,
  }),
  //getter
  //Logica para manipular los states
  getters: {
    getNews: (state) => state.newsList, //traer las newws
    getLoading: (state) => state.loading, //cargar el loading
    getError: (state) => state.error, //cargar el error
  },
  //actions: aquí debo hacer el fetch
  actions: {
    async fetchNews() {
      try {
        this.loading = true;
        this.error = false;
        console.log("API Key:", import.meta.env.VITE_API_KEY);

        const response = await fetch(
          `https://newsapi.org/v2/everything?q=women+in+technology&sortBy=publishedAt&pageSize=30&apiKey=${
            import.meta.env.VITE_API_KEY
          }`
        );

        //Checking if the api call is working
        console.log(response);

        if (!response.ok) {
          this.error = true;
          throw new Error("Sorry, this news is unavaible");
        }
        const data = await response.json();
        this.newsList = data.articles;
      } catch (error) {
        console.log(error);
        this.error = true;
      } finally {
        this.loading = false;
      }
    },
  },
});
