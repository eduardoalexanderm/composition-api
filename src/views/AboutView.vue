<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <button @click="changeTitle">Cambiar titulo</button>
  </div>
</template>


<script>
import { onActivated, onBeforeMount, onBeforeUnmount, onDeactivated, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUpdated, onUnmounted, ref } from 'vue';
import { onBeforeRouteUpdate } from 'vue-router';
export default {
  setup() {

    const title = ref('About')
    console.log('Set up llamado');

    onBeforeMount(() => {
      console.log('onBeforeMount');
    })
    onMounted(() => {
      console.log('onMounted');
    })
    onUnmounted(() => {
      console.log('onUnmounted');
    })
    onBeforeRouteUpdate(() => {
      console.log('onBeforeRouteUpdate');
    })
    onUpdated(() => {
      console.log('onUpdated');
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount');
    })
    onErrorCaptured(() => {
      console.log('onErrorCaptured');
    })
    onRenderTracked(() => {
      console.log('onRenderTracked');
    })
    onRenderTriggered(() => {
      console.log('onRenderTriggered');
    })
    onActivated(() => {
      console.log('onActivated');
    })
    onDeactivated(() => {
      console.log('onDeactivated');
    })

    return{
      title,
      changeTitle:()=> title.value = 'New about'
    }
  }
}
</script>