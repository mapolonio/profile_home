<template>
  <div id="footer">
    <VisitorCounter />
  </div>
</template>

<script>
import VisitorCounter from '@/components/VisitorCounter';

export default {
  name: 'Footer',
  components: { VisitorCounter }
};
</script>

<style scoped>
#footer {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
  min-height: 30vh;
}
</style>
