<script setup lang="ts">
import { onMounted, ref, watch, onBeforeUnmount } from 'vue'
import { storeToRefs } from 'pinia'
import { useVisitsStore } from '../store/visits'

const store = useVisitsStore()
const visitsNumber = ref<string | number>('0000')
const { visits, status } = storeToRefs(store)
const { updateVisitsCount } = store
const randomNumber = (): string => {
  return (Math.random() * 9999).toFixed(0).toString().padStart(4, '0')
}
const timer = setInterval(() => {
  if (status.value === 'loading') {
    visitsNumber.value = randomNumber()
  }
}, 100)

watch(status, (newStatus) => {
  if (['ready', 'error'].includes(newStatus)) {
    clearInterval(timer)
  }

  if (newStatus === 'ready') {
    visitsNumber.value = visits.value
  }

  if (newStatus === 'error') {
    visitsNumber.value = 'ERROR'
  }
})

onMounted(() => {
  updateVisitsCount()
})

onBeforeUnmount(() => {
  clearInterval(timer)
})
</script>

<template>
  <div id="visitor-counter">
    <span id="visitor-msg">you are visitor number</span>
    <span id="odometer">{{ visitsNumber }}</span>
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
  background-image: radial-gradient(rgba(139, 245, 165, 0.4), #000);
}
</style>
