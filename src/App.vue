<template>
  <div id="app">
    <div class="cursor" id="customCursor" ref="customCursor"></div>
    <the-navbar />
    <router-view />
  </div>
</template>
<script>
import TheNavbar from './components/TheNavbar.vue';

export default {
  components: {
    TheNavbar,
  },

  mounted() {
    this.$nextTick(() => {
      const customCursor = document.getElementById('customCursor');

      //  eslint-disable-next-line
      window.addEventListener('mousemove', function fireCursorEvent(e) {
        customCursor.style.top = `${e.pageY}px`;
        customCursor.style.left = `${e.pageX}px`;
      });
    });
  },
  beforeDestroy() {
    //  eslint-disable-next-line
    window.removeEventListener('mousemove', fireCursorEvent);
  },
};
</script>

<style lang="stylus">
#app {
  position: relative;
  font-family: 'Montserrat', 'Catamaran', Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;
  overflow-x: hidden;

  @media screen and (min-width: 800px) {
    // cursor: none;
  }

  .page {
    width: 100%;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
}

.cursor {
  position: absolute;
  z-index: 4000;
  width: 1.5rem;
  height: 1.5rem;
  transform: translate(-50%, -50%);
  border: solid 2px var(--border-color--primary);
  border-radius: 50%;
  pointer-events: none;
  transition: all 0.02s ease-in;
}

.cursor--grow {
  transform: scale(3);
  background: transparent;
  border: none;
  z-index: 20;
  backdrop-filter: blur(2px);
}

.cursor--hide {
  // visibility: hidden;
  transform: scale(4);
  background: transparent;
  border: none;
  z-index: 20;
  backdrop-filter: grayscale();
}
</style>
