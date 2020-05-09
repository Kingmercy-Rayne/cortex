
q<template>
  <section class="rellax section v-home" data-rellax-speed="0">
    <the-navbar />
    <div class="brand__wrapper">
      <div class="brand">
        <div class="hero-img" id="hero-img"></div>
        <div class="foreward__container">
          <h1 id="foreward">Dare to defy expectations</h1>
          <button class="cta-button">I'm Interested</button>
        </div>
        <div class="promotion-video">
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
import TheNavbar from './TheNavbar.vue';

export default {
  name: 'VHome',
  components: {
    TheNavbar,
  },
  data() {
    return {
      // use absolute path to PUBLIC folder due to webpack issues.
      hoverImg1: '/sam-burriss-8wbxjJBrl3k-unsplash.png',
      hoverImg2: '/noah-buscher-TEEVw8hzlQ8-unsplash.png',
      displacementImg: '/filter1.png',
    };
  },
  mounted() {
    const heroImg = document.getElementById('hero-img');
    //  eslint-disable-next-line
    var hoverDistort = new hoverEffect({
      parent: heroImg,
      intensity: 0.3,
      speedIn: 0.7,
      speedOut: 0.8,
      image1: this.hoverImg1,
      image2: this.hoverImg2,
      displacementImage: this.displacementImg,
      imagesRatio: 1.4,
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
      --margin-top: 1.5em;
      position: absolute;
      right: 5em;
      top: var(--margin-top);
      z-index: -5;
      width: 45%;
      height: calc(95% - var(--margin-top));
      overflow: hidden !important;
      object-fit: cover !important;
      // border: solid thin purple;
    }

    .foreward__container {
      position: absolute;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      width: 40%;
      top: 5.5em;
      left: 8em;
      z-index: var(--z-index-value);

      h1 {
        position: relative;
        margin: 0.5em 0;
        font-size: 4rem;
        line-break: 1;
        word-wrap: break-word;
        font-weight: bold;
        box-decoration-break: clone;

        &:before {
          content: '';
          position: absolute;
          top: -10%;
          left: 0;
          width: 15%;
          border: solid thin var(--border-color--primary);
        }
      }

      .cta-button {
        align-self: flex-start;
      }
    }

    .promotion-video {
      position: absolute;
      bottom: 2em;
      display: flex;
      justify-content: space-around;
      min-width: 20%;
      align-items: center;
      padding: 1.5em 1em;

      // border: solid thin green;
      .play-button {
        position: relative;
        border: none;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 1em;
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
          filter: blur(0.3px) opacity(0.5);
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
          filter: blur(1px) opacity(0.3);
        }
      }

      .promotion-video__text {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        padding: 0.2em 2em;

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
    justify-content: space-around;
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
        font-size: 1.4rem;
        opacity: var(--sidepane-opacity);
      }
    }

    span {
      flex-grow: 1;
      margin: 1em 0;
      border: solid thin crimson;
    }

    p {
      font-size: 0.7em;
      padding: 1em 0;
      writing-mode: vertical-rl;
      letter-spacing: 0.4rem;
      opacity: var(--sidepane-opacity);
    }
  }
}
</style>
