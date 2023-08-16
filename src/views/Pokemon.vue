<template>
  <h1 v-if="!pokemon && !errorMessage">Buscando...</h1>
  <h1 v-else-if="errorMessage">{{ errorMessage }}</h1>
  <template v-else>
    <h3>{{ pokemon.name }}</h3>
    <img :src="pokemon.sprites.front_default" :alt="pokemon.name" />
    <br />
    <button @click="$router.push({ name: 'search-pokemon' })">Regresar</button>
  </template>
</template>

<script>
import { watch } from "vue";
import { onBeforeRouteLeave, useRoute } from "vue-router";
import usePokemon from "@/composables/usePokemon";
export default {
  setup() {
    const route = useRoute();
    const { errorMessage, isLoading, pokemon, searchPokemon } = usePokemon(route.params.id);
    console.log(pokemon);

    watch(
        () => route.params.id,
        () => {searchPokemon(route.params.id)}
        )

        onBeforeRouteLeave(()=>{
            const answer = window.confirm('¿Está seguro que desea salir?')
            // console.log(answer);
            if(!answer) return false //false, bloquea la salida
        })
    return {
      errorMessage,
      isLoading,
      pokemon,
      searchPokemon,
    };
  },
};
</script>

<style></style>
