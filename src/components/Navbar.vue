<template>
    <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-custom-purple">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div class="flex justify-between lg:auto px-4 lg:static lg:block lg:justify-start">
                <h1 class="text-3xl font-bold mr-4 py-2 text-white text-montserrat-title">Code Grrrl</h1>
            </div>

      <button 
        class="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none" 
        type="button" 
        @click="toggleNavbar()"
      >
      <font-awesome-icon icon="bars" class="text-white text-xl" />
      </button>
            <ul class="flex flex-col lg:flex-row list-none ml-auto lg:flex" v-bind:class="{'hidden': !showMenu, 'flex':showMenu}">
                <li class="nav-item flex items-center "><router-link to="/home" class="px-3 py-2 flex items-center font-bold text-white hover:rotate-6 hover:scale-110">HOME</router-link>
                    </li>
                    <li class="nav-item flex items-center group"><router-link to="/game" class="px-3 py-2 flex items-center font-bold text-white hover:rotate-6 hover:scale-110">GAME</router-link></li>
                        <li class="nav-item v"><router-link to="/news" class="px-3 py-2 flex items-center font-bold text-white hover:rotate-6 hover:scale-110">NEWS</router-link></li>
                            <li class="nav-item flex items-center "><router-link to="/blog" class="px-3 py-2 flex items-center font-bold text-white hover:rotate-6 hover:scale-110">BLOG</router-link></li>
            </ul>
        </div>
    </nav>
</template>
<script>

export default {
    name: "Navbar",
    data(){
        return  {
            showMenu: false
        }
    },
    methods:{
        toggleNavbar: function(){
            this.showMenu = !this.showMenu;
        }
    }
}
</script>
<style>
    
</style>