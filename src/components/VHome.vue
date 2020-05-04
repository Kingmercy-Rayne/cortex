<template>
  <section class="section v-home">
    <the-navbar />
    <div class="brand">
      <div class="hero-img">
        <img src="../assets/img/noah-buscher-TEEVw8hzlQ8-unsplash.jpg" alt="hero image" />
      </div>
      <div class="foreward">
        <h1>We're a Creative agency</h1>
        <button class="button">Getting Started</button>
      </div>
      <ul>
        <li class="brand__card">
          <i class="fas fa fa-2x fa-reddit"></i>
          <h4 class="brand__card__title">Future Vision</h4>
          <p class="brand__card__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium error esse
            ipsam velit quibusdam.
          </p>
        </li>
        <li class="brand__card">
          <i class="fas fa fa-2x fa-reddit"></i>
          <h4 class="brand__card__title">Future Vision</h4>
          <p class="brand__card__body">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium error esse
            ipsam velit quibusdam.
          </p>
        </li>
        <li class="brand__card">
          <i class="fas fa fa-2x fa-reddit"></i>
          <h3 class="brand__card__title">Future Vision</h3>
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
import TheNavbar from './TheNavbar.vue';

export default {
  name: 'VHome',
  components: {
    TheNavbar,
  },
};
</script>
<style lang="stylus" scoped>
.v-home {
  display: flex;
  flex-direction: column;
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
    top: 0.5em;
    z-index: -5;
    width: 40%;
    height: 90%;

    img {
      height: 100%;
      object-fit: cover;
    }
  }

  .foreward {
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40%;
    top: 3.5em;
    z-index: var(--z-index-value);

    h1 {
      font-size: 2.8rem;
      line-break: 1;
      word-wrap: break-word;
      font-weight: bold;
    }

    button {
      margin-top: 1em;
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
      background: var(--bg-color--primary);

      i {
        padding-bottom: 2em;
        color: var(--text-color--alt);
      }

      .brand__card__title {
        border: solid thin cyan;
        margin-bottom: 0.5em;
        font-weight: bold;
        padding: 0.4em 0;
      }
    }
  }
}
</style>
