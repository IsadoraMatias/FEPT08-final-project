<template>
    <div>
        <h1 class="text-custom-purple-dark montserrat-title text-3xl justify-center items-center">¡Bienvenida a la nuestra News!</h1>
        <p v-if="loading">Loading...</p>
        <p v-if="error">Sorry, this news is unavaible</p>
    </div>
</template>
<script>
import NewsCards from '../components/NewsCards.vue';
export default {
    name: "NewsPage",
    components: { NewsCards },
    data() {
        return {
            news: [],
            loading: false,
            error: false
        };
    },
    mounted() {
        this.getNews()
    },
    methods: {
        async getNews() {
            try {
                this.loading = true;
                this.error = false;
                console.log("API Key:", import.meta.env.VITE_API_KEY);

                const response = await fetch(`https://newsapi.org/v2/everything?q=women+in+technology&By=publishedAt&apiKey=${import.meta.env.VITE_API_KEY}`);

                //Checking if the api call is working
                console.log(response)

                if (!response.ok) {
                    this.error = true;
                    throw new Error("Sorry, this news is unavaible");
                }
                const data = await response.json()
                this.news = data.articles
            } catch (error) {
                console.log(error)
                this.error = true;
            } finally {
                this.loading = false
            }
        },
    },
  
};
</script>

<style></style>