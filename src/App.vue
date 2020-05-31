<template>
  <div id="app">
    <div class="cursor" id="customCursor" ref="customCursor"></div>
    <intro-overlay v-if="!isIntroComplete" />
    <!-- <intro-overlay v-if="0" /> -->
    <the-navbar />
    <transition name="router">
      <router-view v-if="isIntroComplete" />
    </transition>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import { gsap } from 'gsap';
import TheNavbar from '@/components/TheNavbar.vue';
import introOverlay from '@/components/introOverlay.vue';

export default {
  components: {
    introOverlay,
    TheNavbar,
  },
  data() {
    return {
      isIntroComplete: false,
      // hack is used so the image-load on the home view doesnt interrupt the intro animation
      // refactor later to load introOverlay with GSAP
      isContentReady: false,
    };
  },
  methods: {
    setIntroComplete() {
      this.isIntroComplete = !this.isIntroComplete;
    },
    loadMainContent() {
      this.isContentReady = true;
    },
  },
  mounted() {
    this.$nextTick(() => {
      const customCursor = document.getElementById('customCursor');
      // const heroImg = document.getElementById('hero-img');
      // const foreword = document.getElementById('foreword');

      // change VH varable
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);

      // mouse cursor tracking
      //  eslint-disable-next-line
      window.addEventListener('mousemove', function fireCursorEvent(e) {
        customCursor.style.top = `${e.pageY}px`;
        customCursor.style.left = `${e.pageX}px`;
      });

      // GSAP
      const tl = gsap.timeline();
      tl.to('.overlay__bar', 1.2, {
        height: '100%',
        ease: 'power4.out',
        delay: 4,
        stagger: 0.3,
        onComplete: this.loadMainContent,
      })
        .to('.intro-overlay', 0.4, {
          // the negative scaleX value gives a whoosh effect to the sides
          // adding a rotation value will create a diagonal effect
          scaleX: -10,
          scaleY: 0,
          opacity: 0,
          overflow: 'hidden',
          border: '1px solid rgba(0,0,0,0)',
          // borderRadius: '+=200%',
          ease: 'ease.power4',
          onComplete: this.setIntroComplete,
        })
        .to(
          '.intro-overlay',
          0.2,
          {
            // border radius in a separate tween so the box is rounded...
            // before the rest of the effects take place
            borderRadius: '+=50%',
          },
          '-=0.4'
        );
    });
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
  min-height: calc(var(--vh, 1vh) * 100);
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
  // throw it outta the viewport
  top: -5%;
  z-index: 4000;
  width: 1.5rem;
  height: 1.5rem;
  transform: translate(-50%, -50%);
  border: solid 2px var(--border-color--primary);
  border-radius: 50%;
  pointer-events: none;
  transition: transform, border 0.1ms ease-in;

  @media screen and (max-width: 800px) {
    display: none;
  }
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

.router-enter {
  opacity: 0.5;
}

.router-enter-active {
  transform: scale(0.9);
  transition: all 0.4s ease-in-out;
}

@keyframes router-slide-up {
  from {
    transform: scaleY(0.8);
  }

  to {
    transform: translateY(0);
  }
}
</style>
