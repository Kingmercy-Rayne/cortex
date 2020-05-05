<template>
  <div class="page home">
    <v-home />
    <v-services />
  </div>
</template>

<script>
import VHome from '../components/VHome.vue';
import VServices from '../components/VServices.vue';

export default {
  components: {
    VHome,
    VServices,
  },
};
</script>
<style lang="stylus" scoped>
.section {
  position: relative;
  min-height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>
