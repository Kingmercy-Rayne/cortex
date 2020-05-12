
q<template>
  <section class="page v-home">
    <div class="brand__wrapper">
      <div class="brand">
        <div class="hero-img" id="hero-img" ref="heroImg"></div>
        <div class="foreword__container">
          <h1 id="foreword">
            <span>Dare to defy </span><span>expectations<em>.</em></span>
          </h1>
          <h5>We create cutting-edge content for your business thanks to an elite team of pros</h5>
          <button class="cta-button">I'm Interested</button>
        </div>
        <div class="promotion-video__container">
          <button class="play-button"><i class="fas fa fa-play"></i></button>
          <div class="promotion-video__text">
            <h5>ABOUT US</h5>
            <hr />
            <h6>Promotion Video</h6>
          </div>
        </div>
      </div>
      <div class="sidepane">
        <div class="sidepane__social-links">
          <i class="fas fa fa-instagram"></i>
          <i class="fas fa fa-behance"></i>
          <i class="fas fa fa-dribbble"></i>
          <i class="fas fa fa-twitter"></i>
        </div>
        <span></span>
        <p>Creative</p>
        <p>Agency</p>
      </div>
    </div>
  </section>
</template>

<script>
import hoverEffect from 'hover-effect';

export default {
  name: 'Home',
  data() {
    return {
      windowHeight: 0,
      windowWidth: 0,
      // use absolute path to PUBLIC folder due to webpack issues.
      hoverImg1: '/sam-burriss-8wbxjJBrl3k-unsplash.png',
      hoverImg2: '/noah-buscher-TEEVw8hzlQ8-unsplash.png',
      displacementImg: '/filter1.png',
    };
  },
  computed: {
    isNotMobileScreen() {
      return this.windowWidth <= 768;
    },
    getHoverImageRatio() {
      // for some reason, the equality signs have to be inverted
      let ratio = 0;
      if (this.windowWidth <= 768) {
        ratio = 1.4;
      } else {
        ratio = 1;
      }
      return ratio;
    },
  },
  mounted() {
    // use a query selector rather than a $ref due to lag issues
    const heroImg = document.getElementById('hero-img');
    const foreword = document.getElementById('foreword');
    // dynamically set window dimensions on resize
    this.$nextTick(() => {
      // track screen resize
      window.addEventListener('resize', this.screenResizeEvent);
      // disable eslint for hoverEffect init
      //  eslint-disable-next-line
      var hoverDistort = new hoverEffect({
        parent: heroImg,
        intensity: 0.3,
        speedIn: 0.1,
        speedOut: 0.2,
        image1: this.hoverImg1,
        image2: this.hoverImg2,
        displacementImage: this.displacementImg,
        imagesRatio: this.getHoverImageRatio,
        hover: this.isNotMobileScreen,
      });

      // MouseOver Effects
      foreword.addEventListener('mouseover', this.fireForewordTextEvent);
      foreword.addEventListener('mouseleave', this.removeForewordTextEvent);
      heroImg.addEventListener('mouseover', this.fireHeroImgEvent);
      heroImg.addEventListener('mouseleave', this.removeHeroImgEvent);
    });

    // edit dimensions of canvas
    // Whoops!! didnt work -->> TODO
    // const heroImgWidth = heroImg.clientWidth;
    // const heroImgHeight = heroImg.clientHeight;
    // const canvas = heroImg.firstElementChild;
    // canvas.width = heroImgWidth * 2;
    // canvas.height = heroImgHeight * 2;
  },
  methods: {
    screenResizeEvent() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
      console.log('current ratio is', this.getHoverImageRatio);
      console.log('width is', this.windowWidth);
      console.log('height is', this.windowHeight);
    },
    fireForewordTextEvent() {
      const customCursor = document.getElementById('customCursor');
      customCursor.classList.add('cursor--grow');
    },
    removeForewordTextEvent() {
      const customCursor = document.getElementById('customCursor');
      customCursor.classList.remove('cursor--grow');
    },
    fireHeroImgEvent() {
      const customCursor = document.getElementById('customCursor');
      customCursor.classList.add('cursor--hide');
    },
    removeHeroImgEvent() {
      const customCursor = document.getElementById('customCursor');
      customCursor.classList.remove('cursor--hide');
    },
  },
  beforeDestroy() {
    const foreword = document.getElementById('foreword');
    const heroImg = document.getElementById('hero-img');

    window.removeEventListener('resize', this.screenResizeEvent);
    foreword.removeEventListener('mouseover', this.fireForewordTextEvent);
    foreword.removeEventListener('mouseleave', this.removeForewordTextEvent);
    heroImg.removeEventListener('mouseover', this.fireHeroImgEvent);
    heroImg.removeEventListener('mouseleave', this.removeHeroImgEvent);
  },
};
</script>

<style lang="stylus" scoped>
.v-home {
  padding-top: 1.5em;
  background: var(--bg-color--alt);
}

.brand__wrapper {
  display: flex;
  width: 100%;
  position: relative;
  flex-grow: 1;
  z-index: 1;

  .brand {
    --z-index-value: 10;
    position: relative;
    flex-grow: 1;
    display: flex;
    z-index: 1;
    padding: 0 8em;

    // border: solid thin cyan;
    .hero-img {
      // border: solid thin brown;
      --margin-top: 2.5em;
      position: absolute;
      right: 5em;
      top: var(--margin-top);
      z-index: -5;
      width: 45%;
      height: calc(98% - var(--margin-top));
      overflow: hidden !important;
      object-fit: cover !important;
      // border: solid thin purple;

      @media screen and (max-width: 1000px) {
        width: 85%;
        right: 1em;
        filter: brightness(60%);
      }

      @media screen and (max-width: 800px) {
        width: 98%;
        right: 1px;
      }
    }

    .foreword__container {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      width: 40%;
      top: 5.5em;
      left: 8em;
      z-index: var(--z-index-value);
      color: var(--text-color--primary);

      @media screen and (max-width: 1100px) {
        top: 7em;
        width: 80%;
      }

      @media screen and (max-width: 800px) {
        width: 90%;
        left: 1.5em;
      }
      @media screen and (max-width: 450px) {
        top: 7em;
        width: 90%;
        left: 1.5em;
      }

      // border: solid thin green;
      h1 {
        position: relative;
        font-size: 4rem;
        line-break: 1;
        font-family: var(--font-family--primary);
        font-weight: 800;
        // border: solid thin cyan;
        line-height: 1.3;
        letter-spacing: 2px;

        @media screen and (max-width: 1000px) {
          font-size: 4.5rem;
        }

        @media screen and (max-width: 800px) {
          font-size: 3.2rem;
          letter-spacing:0.6rem;
          word-break:1rem;
        }
        @media screen and (max-width: 450px) {
          letter-spacing:1px;
          font-size: 2.6rem;
        }

        span {
          // border: solid thin pink;
        }

        em {
          color: var(--text-color--alt);
          font-style: normal;
          padding: 0 0.05em;
        }
      }

      h5 {
        font-family: var(--font-family--alt);
        font-weight: 500;
        font-size: 1rem;
        align-self: flex-start;
        margin: 1.2em 0;
      }

      .cta-button {
        margin: 1.2em 0;
        font-family: var(--font-family-alt);
        font-weight: 400;
        align-self: flex-start;
      }
    }

    .promotion-video__container {
      position: absolute;
      bottom: 2em;
      display: flex;
      justify-content: space-around;
      min-width: 20%;
      align-items: center;
      padding: 1.5em 1em;
      font-family: var(--font-family-alt);

      // border: solid thin green;
      .play-button {
        position: relative;
        border: none;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0.8em;
        background: var(--border-color--primary);

        &:before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          bottom: -2px;
          right: -2px;
          transform: translate(-50%, -50%);
          height: calc(100% + 2px);
          width: calc(100% + 2px);
          border: solid thin white;
          border-radius: 50%;
          animation: promotionPlayAnimation1 0.6s infinite alternate ease-in;
          filter: blur(0.5px) opacity(0.5);
        }

        &:after {
          content: '';
          position: absolute;
          top: -3px;
          left: -3px;
          bottom: -3px;
          right: -3px;
          transform: translate(-50%, -50%);
          transform: scale(1.25);
          height: calc(100% + 3px);
          width: calc(100% + 3px);
          border: solid thin white;
          border-radius: 50%;
          animation: promotionPlayAnimation2 0.6s infinite alternate ease-out;
          filter: blur(1.2px) opacity(0.4);
        }
      }

      .promotion-video__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0.2em 0.5em;

        & *:not(hr) {
          padding: 0.3em;
        }

        hr {
          width: 130%;
          height: 1px;
          opacity: 0.5;
        }

        h6 {
          color: var(--text-color--alt);
        }
      }
    }

    @keyframes promotionPlayAnimation1 {
      from {
        transform: scale(1);
        opacity: 0.5;
      }

      to {
        transform: scale(1.15);
        opacity: 0.9;
      }
    }

    @keyframes promotionPlayAnimation2 {
      from {
        transform: scale(1.25);
        opacity: 0.2;
      }

      to {
        transform: scale(1.4);
        opacity: 1;
      }
    }
  }

  .sidepane {
    // border: solid thin yellow;
    --sidepane-opacity: 0.5;
    width: 5%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 2em 0.2em;

    @media screen and (max-width: 800px) {
      display: none;
    }

    // opacity: 0.5;
    .sidepane__social-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0.2em;

      i {
        padding: 1em 0.4em;
        color: var(--text-color--primary);
        font-size: 1rem;
        opacity: var(--sidepane-opacity);
        transition: all 0.2s ease-in-out;

        &:hover {
          opacity: 1;
          transform: scale(1.1);
        }
      }
    }

    span {
      flex-grow: 1;
      margin: 1em 0;
      border: solid thin crimson;
    }

    p {
      font-family: var(--font-family--alt);
      font-size: 0.7em;
      padding: 1em 0;
      writing-mode: vertical-rl;
      letter-spacing: 0.5rem;
      opacity: var(--sidepane-opacity);
    }
  }
}
</style>
