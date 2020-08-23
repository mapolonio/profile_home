<template>
  <img :src="require(`../assets/images/${image}`)" :alt="image" />
</template>

<script>
export default {
  name: 'ImageContainer',
  props: {
    image: String
  }
};
</script>
