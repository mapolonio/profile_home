<template>
  <div id="copyright">
    <span>
      {{ msg }}
    </span>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    msg: String
  }
};
</script>

<style scoped>
#copyright {
  color: white;
  margin-bottom: 10px;
  min-height: 33vh;
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
}

#copyright > span {
  margin-bottom: 10px;
  text-align: center;
}
</style>
