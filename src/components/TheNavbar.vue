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
    <div class="nav-toggle">
      <span class="hamburger"></span>
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
@media screen and (max-width: 800px) {
  overflow: hidden;
}

.nav {
  position: fixed;
  padding: 1.5em 8em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 8vh;
  z-index: 100;
  border: solid thin cyan;

  @media screen and (max-width: 800px) {
    padding: 0.2em;
  }

  .logo h1 {
    font-size: 1.4rem;
    margin-right: auto;
  }

  .nav-links {
    display: flex;
    margin-left: auto;
    margin-right: 2em;
    font-size: 0.8rem;

    @media screen and (max-width: 800px) {
      display: none;
    }

    li {
      padding: 0.6em 1em;
      border: solid thin orange;
      margin: 0 1em;
      transition: all 0.05s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  .nav-toggle {
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: auto;
    cursor pointer;

    .hamburger {
      position: relative;
      display: block;
      background: white;

      &::before {
        content: '';
        position: absolute;
        bottom: 6px;
        background: white;
      }
    }

    .hamburger, .hamburger::before {
      height: 0.2rem;
      width: 1.4rem;
    }
  }

  .search {
    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  a {
    color: var(--text-color-primary);
  }
}
</style>
