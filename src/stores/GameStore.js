
import { defineStore } from "pinia";

export const useGameStore = defineStore('game',{
    state:() => ({
        isColor:'custom-purple', //color de inciio
        isRounded: false, //inicio forma cuadrado
        isAnimated: false, //inicio estatico
        phase: 1, //fase 1 empieza activa
    }),
    actions:{
        //metodos
        //cambiar color
        changeColor(){
            this.isColor = this.isColor === 'custom-purple' ? 'custom-purple-dark': 'custom-purple';
        },

        //cambiar forma
        roundedShape(){
            this.isRounded = !this.isRounded;
        },

        //inicia animacion
        animatedShape(){
            this.isAnimated = !this.isAnimated;
        },

        //fase seguiente
        nextPhase(){
            this.phase = this.phase === 1 ? 2 : 1;
        },
    },
});