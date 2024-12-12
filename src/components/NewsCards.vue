<template>
    <div class="flex items-center justify-start rounded-lg bg-custom-green bg-cover p-6 md:p-12">
        <div class="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div v-for="news in filteredNews" :key="news.url"
                class="flex flex-col justify-between overflow-hidden rounded-lg bg-slate-50 shadow">
                <a :href="news.url" target="_blank">
                    <div>
                        <img v-if="news.urlToImage" :src="news.urlToImage" alt="News-Image"
                            class="h-48 w-full object-cover">
                        <div class="p-4">
                            <h2 class="text-lg font-semibold">{{ news.title }}</h2>
                            <p class="text-gray-600">{{ news.description }}</p>
                        </div>
                    </div>
                    <div class="flex items-center justify-between p-4 pt-0">
                        <div>
                            <p class="text-sm font-medium">{{ news.author }}</p>
                        </div>
                    </div>
                </a>

            </div>
        </div>
    </div>
</template>

<script>
import { useNewsStore } from '../stores/NewsStore';
export default {
    name: "NewsCards",
    computed: {
        newsStore() {
            return useNewsStore();
        },
        filteredNews() {
            return this.newsStore.getNews.filter(news => news.url !== "[Removed]" &&
                news.title !== "[Removed]" &&
                news.description !== "[Removed]");
        }
    },
};
</script>

<style></style>