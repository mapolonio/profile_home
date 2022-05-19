<template>
  <div class="page-suggestion-item">
    <a class="page-suggestion-link" :href="url">
      <ImageContainer class="peo" :image="icon" />
      <span class="page-suggestion-text">{{ text }}</span>
    </a>
  </div>
</template>

<script>
import ImageContainer from '@/components/ImageContainer';

export default {
  name: 'PageSuggestion',
  components: { ImageContainer },
  props: {
    url: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    },
    text: {
      type: String,
      default: ''
    }
  }
};
</script>

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

.page-suggestion-item >>> img {
  height: 60px;
}
</style>
