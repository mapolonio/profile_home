<script setup lang="ts">
import { onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useVisitsStore } from '../store/visits'

const store = useVisitsStore()
const { visits } = storeToRefs(store)
const { getAndUpdateVisits } = store;

onMounted(() => {
  getAndUpdateVisits()
})
</script>

<template>
  <div id="visitor-counter">
    <span id="visitor-msg">you are visitor number</span>
    <span id="odometer">{{ visits }}</span>
  </div>
</template>


<style scoped>
@import url('https://fonts.googleapis.com/css?family=Wallpoet');


#visitor-counter {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 15px;
}

#visitor-msg {
  font-family: iPixelU;
  color: #fff67c;
  font-size: 1.3em;
  text-transform: uppercase;
  margin-bottom: 5px;
}

#odometer {
  font-family: 'Wallpoet', monospace;
  font-size: 1.5em;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 6px;
  border-image-source: linear-gradient(to left, #9e9e9e, #b5b5b5);
  color: rgb(139, 245, 165);
  padding: 2px 5px;
  background-color: rgb(0, 0, 0);
  background-image: radial-gradient(rgba(139, 245, 165, .4), #000);
}
</style>
