import { defineStore } from "pinia";

export const useCounterStore = defineStore('counter',{
    //state
    state: ()=> ({
        count: 0,
        name: "Isa",
        title:"avui és 10/12/24"
    }),
    //getter
    getters:{
        doubleCount: (state) => state.count * 2,
        multiplyFour: (state) => {return state.count * 4},
        halfCount: (state) => {return state.count / 2},
    },
    //actions
    actions: {
        increment(){
            return this.count++;
        },
        decrement(){
            return this.count--;
        },
    },

});