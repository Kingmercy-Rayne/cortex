
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
      return (this.windowWidth <= 768);
    },
    getHoverImageRatio() {
      let ratio = 0;
      if (this.windowWidth > 768) {
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
    // dynamically set window dimensions on resize
    this.$nextTick(() => {
      window.addEventListener('resize', () => {
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        console.log(this.getHoverImageRatio);
      });
      // disable eslint for hoverEffect init
      //  eslint-disable-next-line
      var hoverDistort = new hoverEffect({
        parent: heroImg,
        intensity: 0.3,
        speedIn: 0.2,
        speedOut: 0.2,
        image1: this.hoverImg1,
        image2: this.hoverImg2,
        displacementImage: this.displacementImg,
        imagesRatio: this.getHoverImageRatio,
        hover: this.isNotMobileScreen,
      });
    });

    // edit dimensions of canvas
    // Whoops!! didnt work -->> TODO
    // const heroImgWidth = heroImg.clientWidth;
    // const heroImgHeight = heroImg.clientHeight;
    // const canvas = heroImg.firstElementChild;
    // canvas.width = heroImgWidth * 2;
    // canvas.height = heroImgHeight * 2;
  },
};
</script>

<style lang="stylus" scoped>
.v-home {
  padding-top: 1.5em;
  background: var(--bg-color--alt);
  min-height: 100vh !important;
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
          animation: promotionPlayAnimation1 0.5s infinite alternate;
          filter: blur(0.3px) opacity(0.4);
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
          animation: promotionPlayAnimation2 0.5s infinite alternate ease-in;
          filter: blur(1px) opacity(0.2);
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
        opacity: 0.9;
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
    padding: 2em 0;

    // opacity: 0.5;
    .sidepane__social-links {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding: 0.2em;

      i {
        padding: 1em 0.2em;
        color: var(--text-color--primary);
        font-size: 1.2rem;
        opacity: var(--sidepane-opacity);
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
