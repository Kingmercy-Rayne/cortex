<template>
  <div id="app">
    <div class="cursor" id="customCursor"></div>
    <router-view />
  </div>
</template>
<script>
export default {
  // data() {
  //   return {
  //     cursor: this.$refs.cursor,
  //   };
  // },
  mounted() {
    const customCursor = document.getElementById('customCursor');

    function fireCursorEvent(e) {
      customCursor.style.top = `${e.pageY}px`;
      customCursor.style.left = `${e.pageX}px`;
    }

    window.addEventListener('mousemove', fireCursorEvent);
  },
};
</script>
<style lang="stylus">
#app {
  position: relative;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  min-height: 100vh;

  .page {
    width: 100%;
    display: flex;
    flex-direction: column;
  }
}

.cursor {
  position: absolute;
  z-index: 400;
  width: 1.5rem;
  height: 1.5rem;
  transform: translate(-50%, -50%);
  border: solid 2px var(--border-color--primary);
  border-radius: 50%;
  pointer-events: none;
  transition: all 0.05s ease-in-out;
}
</style>
