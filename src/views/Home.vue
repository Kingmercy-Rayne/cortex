<template>
  <div class="page home">
    <v-home />
  </div>
</template>

<script>
import VHome from '../components/VHome.vue';

export default {
  components: {
    VHome,
  },
};
</script>
<style lang="stylus" scoped>
.section {
  position: relative;
  min-height: 100vh;
  width: 100%;
}
</style>
