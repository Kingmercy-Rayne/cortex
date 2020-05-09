<template>
  <div class="page home">
    <v-home />
    <v-services />
    <v-portfolio />
    <v-about />
  </div>
</template>

<script>
import Rellax from 'rellax';
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
  mounted() {
    //  eslint-disable-next-line
    var rellax = new Rellax('.rellax', {
      speed: 1,
      center: false,
      wrapper: null,
      round: true,
      vertical: true,
      horizontal: false,
    });
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
