<template>
  <div class="bg-custom-yellow p-6 h-screen ">
    
    <!-- container padre-->
    <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      <!-- <div class="flex flex-wrap justify-between text-2xl text-custom-purple-dark font-bold mb4"><h1>Desvelando la Programación: Juego de Formas</h1></div> -->
      
      <!-- item game -->
      <div class="bg-white text-custom-purple-dark rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
        <h1 class="text-2xl text-custom-purple-dark font-bold">¡Bienvenida!</h1>
            <p class="text-lg text-custom-purple-dark font-bold">Aquí verás lo básico de la interacción en páginas web. Usa los botones para cambiar el color, la forma y animar la figura, viendo cómo pequeños cambios la transforman</p></div>
        <!-- item forma -->
        <div class="bg-white text-custom-purple-dark rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
          <GeometricGame :isColor="gameStore.isColor" :isRounded="gameStore.isRounded"
            :isAnimated="gameStore.isAnimated" />
        </div>
        <!-- item controles -->
        
          <!-- controles del juego -->
          <div class="bg-white rounded-lg shadow-lg p-4 flex flex-col justify-center items-center">
            <h2 class="text-2xl text-custom-purple-dark font-bold mb4">Controles</h2>
            <p class="text-lg text-center text-gray-600 font-bold mb-6">Use os botoes para controlar estilos</p>
            <button class="bg-purple-300 text-custom-purple-dark font-bold py-2 px-4 rounded mb-2"
              @click="gameStore.changeColor">Mudar Cor</button>
            <button class="bg-custom-green text-custom-purple-dark font-bold py-2 px-4 rounded mb-2"
              @click="gameStore.roundedShape">Arredondar</button>
            <button class="bg-custom-pink text-custom-purple-dark font-bold py-2 px-4 rounded mb-2"
              @click="gameStore.animatedShape">Animar</button>
          </div>
        
     <!-- item cajas texto -->
       <!-- item 1 -->
      
        <div
          class="bg-custom-purple text-custom-purple-dark rounded-lg shadow-lg p-4">
          <h3 class="text-xl font-bold mb-4">¡Estás en la Fase 1! </h3>
          <p class="text-gray-900 font-medium">En esta fase, podrás interactuar con la página y ver cómo puedes modificar el elemento geométrico. En las siguientes fases, aprenderás cómo construir este elemento</p>
</div>
        <!-- item texto 2 -->
        <div
          class="bg-custom-green text-custom-purple-dark rounded-lg shadow-lg p-4">
          <h3 class="text-xl font-bold mb-4">Página Web</h3>
<p class="text-gray-900 font-medium">
  ¿Sabías que para empezar a construir una página web, necesitas tres cosas fundamentales? 
  Primero, HTML, que es el lenguaje para estructurar la página y definir su contenido. 
  Después, CSS, que te permite diseñar y darle estilo a la página, como colores, fuentes y disposición. 
  Finalmente, JavaScript, que hace que la página sea interactiva, permitiendo que los usuarios interactúen con los elementos.
</p>
</div>
        <!-- item texto 3 -->
        <div
          class="bg-custom-pink text-custom-purple-dark rounded-lg shadow-lg p-4">
          <h3 class="text-xl font-bold mb-4">Proximas fases</h3>
<p class="text-gray-900 font-medium p-4">
  ¡El futuro de nuestro juego estará en las próximas fases! Iremos poco a poco descubriendo el mundo de la programación desde lo más básico. Vamos a construir nuestra forma geométrica con HTML, con CSS la vamos a colorear y diseñar, y finalmente aplicaremos las animaciones utilizando JavaScript. ¡Súper guay!
</p>
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
      this.gameStore.changeColor();
    },
    //botón cambia la forma
    roundedShape() {
      this.gameStore.roundedShape();
    },
    //botón de animación
    animatedShape() {
      this.gameStore.animatedShape();
    }
  }

};
</script>