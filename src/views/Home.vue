<template>
    <div class="flex h-screen w-full flex-col items-center justify-center rounded-lg p-6 bg-custom-pink">
        <div class="grid h-full w-full grid-cols-10 grid-rows-5 gap-4">
            <div class="col-span-4 row-span-3 rounded-3xl bg-custom-green flex flex-col justify-center items-center">
                <h2 class="text-custom-purple-dark montserrat-title text-3xl mb-5">¡Bienvenida a CodeGrrrl!</h2>
                <div
                    class="text-custom-purple-dark montserrat-title text-2xl flex flex-col justify-center items-center">
                    <p>Un espacio creado para inspirar y</p>
                    <p>apoyarte, a aventurarse en el</p>
                    <p>mundo de la programación.</p>
                    <p>¡Descubre noticias, desafíos y</p>
                    <p>mucho más!</p>
                </div>
            </div>

            <div class="col-span-5 row-span-1 rounded-3xl bg-custom-yellow flex justify-center items-center">
                <h3 class="text-5xl text-custom-purple-dark montserrat-title" id="contact-item">Contact me!</h3>
            </div>
            <div class="col-span-1 row-span-1 rounded-3xl" id=" image-item"><img src="/girl-working.gif"
                    alt="Girl working" class="w-full h-full object-cover rounded-3xl" /></div>
            <div class="col-span-2 row-span-2 rounded-3xl bg-custom-purple cursor-pointer" id="game-item" @click="goToGame"></div>
            <div class="col-span-4 row-span-2 rounded-3xl bg-custom-green cursor-pointer" id="news-item" @click="goToNews">news</div>
            <div class="col-span-4 row-span-2 rounded-3xl bg-custom-purple cursor-pointer" id="blog-item" @click="goToBlog">blog</div>
            <div class="col-span-6 row-span-2 rounded-3xl bg-custom-yellow flex justify-center items-center">
                <h1 class="text-8xl text-custom-purple-dark montserrat-title" id="code-grl-item">Code Grrrl!</h1>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    methods:{
        goToGame() {
            this.$router.push('/game');
        },
        goToNews() {
            this.$router.push('/news');
        },
        goToBlog(){
            this.$router.push('/blog');
        }
    },
    name: "Home",
};
</script>
<style></style>
