<script setup lang="ts">
import ImageContainer from './ImageContainer.vue';

withDefaults(defineProps<{
  url: string;
  icon: string;
  text: string;
}>(), {
  url: '#',
  icon: '',
  text: ''
})
</script>

<template>
  <div class="page-suggestion-item">
    <a class="page-suggestion-link" :href="url">
      <ImageContainer class="peo" :image="icon" />
      <span class="page-suggestion-text">{{ text }}</span>
    </a>
  </div>
</template>

<style scoped>
.page-suggestion-item {
  margin-bottom: 20px;
}

.page-suggestion-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
}

.page-suggestion-text {
  font-family: iPixelU;
  text-transform: uppercase;
  text-align: left;
  margin-left: 25px;
  font-size: 35px;
}

.page-suggestion-item>>>img {
  height: 60px;
}
</style>
