<template>
  <nav class="nav">
    <div class="logo"><h1>Cortex.</h1></div>
    <ul class="nav-links">
      <li v-for="(item, index) in links" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>
    <div class="search">
      <i class="fas fa fa-search"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      links: [
        {
          name: 'Home',
          path: '/',
        },
        {
          name: 'Services',
          path: 'services',
        },
        {
          name: 'Portfolio',
          path: 'portfolio',
        },
        {
          name: 'About',
          path: 'about',
        },
      ],
    };
  },
};
</script>
<style lang="stylus" scoped>
.nav {
  position: fixed;
  padding: 1.5em 8em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-height: 8vh;
  z-index: 100;

  // border: solid thin cyan;
  .logo h1 {
    font-size: 1.4rem;
  }

  .nav-links {
    display: flex;
    margin-left: auto;
    margin-right: 2em;
    font-size: 0.8rem;

    li {
      padding: 0.6em 1em;
      // border: solid thin orange;
      margin: 0 1em;
      transition: all 0.05s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  a {
    color: var(--text-color-primary);
  }
}
</style>
