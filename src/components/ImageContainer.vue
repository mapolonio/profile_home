<script setup lang="ts">
defineProps<{
  image: string
}>()

const images: Record<string, string> = {
  constructionGif: 'men_at_work_spin.gif',
  'linkedin.svg': 'linkedin.svg',
  'github.svg': 'github.svg',
  'palabr.svg': 'palabr.svg'
}
</script>

<template>
  <img :src="`/images/${images[image]}`" :alt="image" />
</template>
