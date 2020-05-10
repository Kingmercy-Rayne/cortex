<template>
  <nav class="nav">
    <div class="logo"><h1>Cortex.</h1></div>
    <ul class="nav-links">
      <li v-for="item in links" :key="item">
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
        {
          name: 'Contact',
          link: '#contact',
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
  z-index: 100;

  .logo h1 {
    font-size: 1.4rem;
  }

  .nav-links {
    display: flex;
    margin-left: auto;
    margin-right: 2em;
    font-size: 0.8rem;

    li {
      padding: 0.8em;
      margin: 0 1em;
    }
  }

  a {
    color: var(--text-color-primary);
  }
}
</style>
