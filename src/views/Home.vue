<template>
  <div class="page home">
    <v-home />
    <v-services />
    <v-portfolio />
    <v-about />
  </div>
</template>

<script>
import VHome from '../components/VHome.vue';
import VServices from '../components/VServices.vue';
import VPortfolio from '../components/VPortfolio.vue';
import VAbout from '../components/VAbout.vue';

export default {
  components: {
    VHome,
    VServices,
    VPortfolio,
    VAbout,
  },
};
</script>
<style lang="stylus" scoped>
.section {
  min-height: 92vh;
  width: 100%;
  display: flex;
  flex-direction: column;
}

canvas {
  height: 10%;
}
</style>
