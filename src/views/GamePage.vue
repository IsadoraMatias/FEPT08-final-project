
<template>
    <div>
        <h2>{{ counter.name }}</h2>
    </div>
</template>

<script>
import { useCounterStore } from '../stores/counter';
export default {
    name: "GamePage",
    data(){
        return{}
    },
    computed:{
        counter(){
            return useCounterStore()
        },
    },
    methods:{

    },
}
</script>

<style ></style>