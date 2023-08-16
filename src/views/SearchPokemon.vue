<template>
    <h1>Buscar pokemón:{{ pokemonId }} </h1>
    <form @submit.prevent="onSubmit">
        <input type="number" placeholder="Número del pókemon" v-model="pokemonId" ref="searchTxt">
    </form>
</template>

<script>
import { ref, onActivated } from 'vue'
import { useRouter } from 'vue-router'
export default {
    setup() {
        //definiendo router
        const router = useRouter()
        const pokemonId = ref(1)
        const searchTxt = ref() 
        onActivated(() => {
            searchTxt.value.select()
        })

        return { 
            pokemonId,
            searchTxt,

            onSubmit: () => {
                if (pokemonId.value > 0) {
                    router.push({ name: 'pokemon-id', params: { id: pokemonId.value } })
                } else if (pokemonId.value < 0) {
                    alert('El id debe ser positivo')
                    pokemonId.value = null
                }
            }
        }
    }
}
</script>

<style></style>