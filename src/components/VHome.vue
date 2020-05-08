
<template>
  <section class="section v-home">
    <the-navbar />
    <div class="brand">
      <div class="hero-img" id="hero-img">
        <!-- <img src="../assets/img/noah-buscher-TEEVw8hzlQ8-unsplash.png" alt="hero image" /> -->
      </div>
      <div class="foreward">
        <h1>Dare to defy expectations</h1>
        <button class="button">I'm Interested</button>
      </div>
      <ul>
        <li class="brand__card">
          <i class="fas fa fa-2x fa-bar-chart"></i>
          <h4 class="brand__card__title">Future Vision</h4>
          <p class="brand__card__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium error esse
            ipsam velit quibusdam.
          </p>
        </li>
        <li class="brand__card">
          <i class="fas fa fa-2x fa-rocket"></i>
          <h4 class="brand__card__title">Product Design</h4>
          <p class="brand__card__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium error esse
            ipsam velit quibusdam.
          </p>
        </li>
        <li class="brand__card">
          <i class="fas fa fa-2x fa-pie-chart"></i>
          <h3 class="brand__card__title">Innovative Solutions</h3>
          <p class="brand__card__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium error esse
            ipsam velit quibusdam.
          </p>
        </li>
      </ul>
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
      hoverImg1: '/noah-buscher-TEEVw8hzlQ8-unsplash.png',
      hoverImg2: '/sam-burriss-8wbxjJBrl3k-unsplash.png',
      displacementImg: '/filter1.jpg',
    };
  },
  mounted() {
    //  eslint-disable-next-line
    var hoverDistort = new hoverEffect({
      parent: document.getElementById('hero-img'),
      intensity: 0.3,
      image1: this.hoverImg1,
      image2: this.hoverImg2,
      displacementImage: this.displacementImg,
      imagesRatio: 1.8,
    });
  },
};
</script>
<style lang="stylus" scoped>
.v-home {
  padding: 0 10em;
  padding-top: 1.5em;
  background: var(--bg-color--alt);
}

.brand {
  --z-index-value: 10;
  position: relative;
  flex-grow: 1;
  display: flex;
  z-index: 1;

  .hero-img {
    position: absolute;
    right: 0;
    top: 0.05em;
    z-index: -5;
    width: 40%;
    height: 90%;
    border: solid thin green;
  }

  .hero-img > * {
    height: 100%;
    object-fit: cover;
  }

  .foreward {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 40%;
    top: 3.5em;
    z-index: var(--z-index-value);

    h1 {
      position: relative;
      padding: 0.5em 0;
      font-size: 2.8rem;
      line-break: 1;
      word-wrap: break-word;
      font-weight: bold;

      &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 15%;
        border: solid thin var(--border-color--primary);
      }
    }

    button {
      align-self: flex-start;
    }
  }

  ul {
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
    justify-content: space-between;
    width: 100%;
    z-index: var(--z-index-value);

    .brand__card {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      width: 28%;
      padding: 2.5em 2em;
      background: var(--bg-color--tri);

      i {
        padding-bottom: 1.5em;
        color: var(--text-color--alt);
      }

      .brand__card__title {
        position: relative;
        margin-bottom: 0.5em;
        font-weight: bold;
        padding: 0.5em 0;

        &:after {
          content: '';
          position: absolute;
          left: 0;
          bottom: 0;
          border: solid thin var(--border-color--primary);
          width: 2.2em;
        }
      }

      .brand__card__body {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
