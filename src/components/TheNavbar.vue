<template>
  <nav class="nav">
    <div class="logo">
      <router-link :to="'/'"> <h1>Cortex.</h1></router-link>
    </div>
    <ul class="nav-links" v-if="!isNotMobileScreen">
      <li v-for="(item, index) in links" :key="index">
        <router-link :to="item.path">{{ item.name }}</router-link>
      </li>
    </ul>

    <div class="search" v-if="!isNotMobileScreen">
      <i class="fas fa fa-search"></i>
    </div>
    <div v-if="!isNotMobileScreen" class="nav-toggle" @click="this.toggleSideNav">
      <span class="hamburger"></span>
    </div>
    <!-- sidepane -->
    <div :class="'sidepane__nav'" v-if="isSidepaneNavOpen">
      <div class="sidepane__nav--toggle" @click="this.toggleSideNav">
        <span class="hamburger"></span>
        <span class="hamburger__text">Close</span>
      </div>
      <ul class="nav-links">
        <li v-for="(item, index) in links" :key="index">
          <router-link :to="item.path" @click.native="toggleSideNav">{{
            item.name
          }}</router-link>
        </li>
      </ul>
      <div class="sidepane__nav__social">
        <div class="social-links">
          <i class="fas fa fa-instagram"></i>
          <i class="fas fa fa-behance"></i>
          <i class="fas fa fa-dribbble"></i>
          <i class="fas fa fa-twitter"></i>
        </div>
        <span></span>
        <p>Creative Agency</p>
      </div>
    </div>
    <!-- End of sidepane -->
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
  data() {
    return {
      isSidepaneNavOpen: false,
      links: [
        {
          name: 'About',
          path: 'services',
        },
        {
          name: 'Portfolio',
          path: 'portfolio',
        },
        {
          name: 'Contact',
          path: 'about',
        },
      ],
    };
  },
  computed: {
    isNotMobileScreen() {
      return this.windowWidth <= 768;
    },
  },
  methods: {
    toggleSideNav() {
      this.isSidepaneNavOpen = !this.isSidepaneNavOpen;
    },
  },
};
</script>
<style lang="stylus" scoped>
// shared nav toggle

// rest  of nav
.nav {
  position: fixed;
  padding: 1.5em 8em;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  min-height: 8vh;
  z-index: 100;

  // border: solid thin cyan;
  @media screen and (max-width: 800px) {
    padding: 0.2em;
  }

  .logo h1 {
    font-size: 1.4rem;
    margin-right: auto;
    padding: 0 1em;
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
    cursor: pointer;

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
      height: 0.1rem;
      width: 1.4rem;
    }

    @media screen and (min-width: 800px) {
      display: none;
    }
  }

  .search {
    @media screen and (max-width: 800px) {
      display: none;
    }
  }

  .sidepane__nav {
    // TODO: separate into component later
    position: absolute;
    top: 1px;
    left: 0;
    bottom: 1px;
    min-height: calc(100vh - 2px);
    width: 99%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0.5em;
    background: rgba(237, 237, 237, 0.99);
    filter: brightness(85%);
    transition: all 2s ease-in-out;
    // border: solid thin purple;
    color: black;

    .sidepane__nav--toggle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1em;
      cursor: pointer;

      .hamburger__text {
        font-size: 0.8rem;
        font-weight: 500;
      }

      .hamburger {
        margin: 0 1.5em;
        position: relative;
        display: block;
        transform: translateY(0) rotate(135deg);

        &::before {
          content: '';
          position: absolute;
          bottom: 6px;
          transform: translateY(6px) rotate(-95deg);
        }
      }

      .hamburger, .hamburger::before {
        height: 0.12rem;
        width: 1.5rem;
        background: crimson;
      }
    }

    .nav-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: solid thin cyan;
      flex-grow: 1;
      margin: 3em 1em;
      width: 100%;
      font-family: var(--font-family--primary);
      font-weight: 700;
      font-size: 1.2rem;

      li {
        padding: 1.4em 1em;
        margin: 0 1em;
        transition: all 0.05s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }
  }

  // social
  .sidepane__nav__social {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 1em 0;

    .social-links {
      padding: 0.2em;

      i {
        padding: 1em 0.4em;
        font-size: 1.2rem;
        opacity: 1;
        transition: all 0.2s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }
    }

    span {
      flex-grow: 1;
      border: solid thin crimson;
      height: 2px;
      margin: 0.5em;
    }

    p {
      font-size: 0.7rem;
      font-weight: 600;
      letter-spacing: 2px;
    }
  }

  a {
    color: var(--text-color-primary);
  }
}
</style>
