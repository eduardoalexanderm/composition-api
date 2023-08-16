<template>
    <h1>Composition api</h1>
    <h3>
        {{ counter }}
    </h3>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
</template>


<script>
import { ref } from 'vue'
import useCounter from '@/composables/useCounter';
export default {
    name: 'Counter',
    props: {

    },
    emits: [],
    setup() {
        const {counter, increase, decrease} = useCounter()

        return{
            counter, increase, decrease
        }
        // const counter = ref(5);

        // // const increase = () =>{
        // //     counter.value++   
        // // }

        // // const decrease = () =>{
        // //     counter.value--   
        // // }



        // return {
        //     counter,
        //     increase: () => counter.value++,
        //     decrease: () => counter.value--,
        // }
    }
}
</script>