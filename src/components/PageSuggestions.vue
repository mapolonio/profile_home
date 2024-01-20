<script setup lang="ts">
import PageSuggestion from './PageSuggestion.vue'

const pages = [
  {
    icon: 'linkedin.svg',
    url: 'https://www.linkedin.com/in/mapoloniolorenzo',
    text: 'Linkedin profile'
  },
  {
    icon: 'github.svg',
    url: 'https://github.com/mapolonio',
    text: 'Github profile'
  },
  {
    icon: 'palabr.svg',
    url: 'https://palabr.mapolonio.dev',
    text: 'Palabr: Wordl en español!'
  }
]
</script>

<template>
  <div class="page-suggestions">
    <h2>In the meantime you can visit these other pages that may be of your interest:</h2>
    <div class="page-suggestions-list">
      <PageSuggestion
        v-for="(page, index) in pages"
        :key="`suggested-page-${index}`"
        :url="page.url"
        :icon="page.icon"
        :text="page.text"
      />
    </div>
  </div>
</template>

<style scoped>
.page-suggestions {
  display: flex;
  flex-flow: column;
  align-items: center;
}

.page-suggestions > h2 {
  margin-bottom: 60px;
  text-align: justify;
  display: inline-block;
}

.page-suggestions-list {
  display: inline-block;
}
</style>
