<template>
  <div class="bg-custom-yellow p-6 ">
    
    <!-- container padre-->
    <div class="flex flex-col h-full gap-6">
      <div class="flex flex-wrap justify-between text-2xl text-custom-purple-dark font-bold mb4"><h1>Desvelando la Programación: Juego de Formas</h1></div>
      <!-- item titulo juego  -->

      <!-- item game -->
      <div class="flex flex-wrap gap-6 justify-between"><div
          class="bg-white text-custom-purple-dark rounded-lg shadow-lg p-4 w-full sm:w-1/3 flex flex-col justify-center items-center">
        <h1 class="text-2xl text-custom-purple-dark font-bold mb4">¡Bienvenida!</h1>
            <p class="text-lg text-custom-purple-dark font-bold mb4">Aquí verás lo básico de la interacción en páginas web. Usa los botones para cambiar el color, la forma y animar la figura, viendo cómo pequeños cambios la transforman</p></div>
        <!-- item forma -->
        <div
          class="bg-white text-custom-purple-dark rounded-lg shadow-lg p-4 w-full sm:w-1/3 flex flex-col justify-center items-center">
          <GeometricGame :isColor="gameStore.isColor" :isRounded="gameStore.isRounded"
            :isAnimated="gameStore.isAnimated" />
        </div>
        <!-- item controles -->
        <div>
          <!-- controles del juego -->
          <div class="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center flex-1">
            <h2 class="text-2xl text-custom-purple-dark font-bold mb4">Controles</h2>
            <p class="text-lg text-center text-gray-600 font-bold mb-6">Use os botoes para controlar estilos</p>
            <button class="bg-purple-300 text-custom-purple-dark font-bold py-2 px-4 rounded mb-4"
              @click="gameStore.changeColor">Mudar Cor</button>
            <button class="bg-custom-green text-custom-purple-dark font-bold py-2 px-4 rounded mb-4"
              @click="gameStore.roundedShape">Arredondar</button>
            <button class="bg-custom-pink text-custom-purple-dark font-bold py-2 px-4 rounded mb-4"
              @click="gameStore.animatedShape">Animar</button>
          </div>
        </div>
      </div>

      <!-- item cajas texto -->
       <!-- item 1 -->
      <div class="flex justify-between gap-6">
        <div
          class="bg-custom-purple text-custom-purple-dark rounded-lg shadow-lg p-4 w-full sm:w-1/3 flex flex-col justify-center items-center">
          <h3 class="text-xl font-bold mb-4">¡Estás en la Fase 1! </h3>
          <p class="text-gray-900 font-medium p-4">En esta fase, podrás interactuar con la página y ver cómo puedes modificar el elemento geométrico. En las siguientes fases, aprenderás cómo construir este elemento</p>

        </div>
        <!-- item texto 2 -->
        <div
          class="bg-custom-green text-custom-purple-dark rounded-lg shadow-lg p-4 w-full sm:w-1/3 flex flex-col justify-center items-center">
          <h3 class="text-xl font-bold mb-4">Página Web</h3>
<p class="text-gray-900 font-medium p-4">
  ¿Sabías que para empezar a construir una página web, necesitas tres cosas fundamentales? 
  Primero, HTML, que es el lenguaje para estructurar la página y definir su contenido. 
  Después, CSS, que te permite diseñar y darle estilo a la página, como colores, fuentes y disposición. 
  Finalmente, JavaScript, que hace que la página sea interactiva, permitiendo que los usuarios interactúen con los elementos.
</p>
</div>
        <!-- item texto 3 -->
        <div
          class="bg-custom-pink text-custom-purple-dark rounded-lg shadow-lg p-4 w-full sm:w-1/3 flex flex-col justify-center items-center">
          <h3 class="text-xl font-bold mb-4">Proximas fases</h3>
<p class="text-gray-900 font-medium p-4">
  ¡El futuro de nuestro juego estará en las próximas fases! Iremos poco a poco descubriendo el mundo de la programación desde lo más básico. Vamos a construir nuestra forma geométrica con HTML, con CSS la vamos a colorear y diseñar, y finalmente aplicaremos las animaciones utilizando JavaScript. ¡Súper guay!
</p>
         
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