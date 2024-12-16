<template>
  <div class="bg-custom-yellow h-screen p-6">
    <!-- container padre-->
    <div class="flex flex-col h-full gap-6">
      <!-- item titulo juego
          <div class="flex flex-wrap gap-6 bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center items-center flex-1">
            <h2 class="text-2xl text-custom-purple-dark font-bold mb4">Controles</h2></div> -->
      <!-- item game -->
      <div class="flex flex-wrap gap-6 justify-between">
        <!-- item forma -->
        <div class="bg-white rounded-lg shadow-lg p-8 flex justify-center items-center flex-1">
          <GeometricGame :isColor="gameStore.isColor" :isRounded="gameStore.isRounded"
            :isAnimated="gameStore.isAnimated" />
        </div>
        <!-- item controles -->
        <div>
          <!-- controles del juego -->
          <div class="bg-white rounded-lg shadow-lg p-8 flex flex-col justify-center items-center flex-1">
            <h2 class="text-2xl text-custom-purple-dark font-bold mb4">Controles</h2>
            <p class="text-lg text-center text-gray-600 font-bold mb-6">Use os botoes para controlar estilos</p>
            <button class="bg-purple-300 text-custom-purple-dark font-bold py-2 px-4 rounded mb-4"
              @click="gameStore.changeColor">Mudar Cor</button>
            <button class="bg-purple-300 text-custom-purple-dark font-bold py-2 px-4 rounded mb-4"
              @click="gameStore.roundedShape">Arredondar</button>
            <button class="bg-purple-300 text-custom-purple-dark font-bold py-2 px-4 rounded mb-4"
              @click="gameStore.animatedShape">Animar</button>
          </div>
        </div>
      </div>

      <!-- item cajas texto -->
      <div class="flex justify-between gap-6">
        <div
          class="bg-custom-purple text-white rounded-lg shadow-lg p-4 w-full sm:w-1/3 flex flex-col justify-center items-center">
          <h3 class="text-xl font-bold mb-4">CSS</h3>
          <p>CSS é a linguagem de estilos. Ele permite personalizar a aparência das páginas web, como cores, tamanhos,
            espaçamentos e fontes.
            CSS é a linguagem de estilos. Ele permite personalizar a aparência das páginas web, como cores, tamanhos,
            espaçamentos e fontes
            CSS é a linguagem de estilos. Ele permite personalizar a aparência das páginas web, como cores, tamanhos,
            espaçamentos e fontes</p>
        </div>
        <!-- item texto 2 -->
        <div
          class="bg-custom-purple text-white rounded-lg shadow-lg p-4 w-full sm:w-1/3 flex flex-col justify-center items-center">
          <h3 class="text-xl font-bold mb-4">CSS</h3>
          <p>CSS é a linguagem de estilos. Ele permite personalizar a aparência das páginas web, como cores, tamanhos,
            espaçamentos e fontes.
            CSS é a linguagem de estilos. Ele permite personalizar a aparência das páginas web, como cores, tamanhos,
            espaçamentos e fontes
            CSS é a linguagem de estilos. Ele permite personalizar a aparência das páginas web, como cores, tamanhos,
            espaçamentos e fontes
          </p>
        </div>
        <div
          class="bg-custom-purple text-white rounded-lg shadow-lg p-4 w-full sm:w-1/3 flex flex-col justify-center items-center">
          <h3 class="text-xl font-bold mb-4">CSS</h3>
          <p>CSS é a linguagem de estilos. Ele permite personalizar a aparência das páginas web, como cores, tamanhos,
            espaçamentos e fontes.
            CSS é a linguagem de estilos. Ele permite personalizar a aparência das páginas web, como cores, tamanhos,
            espaçamentos e fontes
            CSS é a linguagem de estilos. Ele permite personalizar a aparência das páginas web, como cores, tamanhos,
            espaçamentos e fontes</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useGameStore } from '../stores/gameStore';
import GeometricGame from '../components/GeometricGame.vue';

export default {
  components: {
    GeometricGame,
  },
  computed: {
    gameStore() {
      return useGameStore();
    },
  },

  methods: {
    //botón cambia la color
    changeColor() {
      this.gamestore.changeColor();
    },
    //botón cambia la forma
    roundedShape() {
      this.gamestore.roundedShape();
    },
    //botón de animación
    animatedShape() {
      this.gamestore.animatedShape();
    }
  }

};
</script>