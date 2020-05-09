<template>
  <nav class="nav">
    <div class="logo"><h1>Cortex.</h1></div>
    <ul class="nav-links">
      <li v-for="item in links" :key="item">
        <a
          :href="item.link"
          v-smooth-scroll="{ duration: 1000, offset: 0, updateHistory: false }"
          >{{ item.name }}</a
        >
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
          link: '#home',
        },
        {
          name: 'Services',
          link: '#services',
        },
        {
          name: 'Portfolio',
          link: '#portfolio',
        },
        {
          name: 'About',
          link: '#about',
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
  padding: 0 10em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  // applying a margin-top here leaves a visible gap...
  // solved by applying padding to the parent section-container
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
