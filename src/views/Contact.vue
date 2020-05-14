<template>
  <section id="about" class="page">
    <div class="section__header">
      <span
        ><h1>Contact.</h1>
        <h6>Your next digital campaign is one discussion away</h6></span
      >
    </div>
    <div class="contact-info">
      <h5 class="email-address">Email - info@mail.cortex.com</h5>
      <div class="local-address">
        <span>Cortex</span>
        <span>221B Baker Street</span>
        <span>Essex, United Kingdom</span>
      </div>
      <h5 class="telephone-no">+44 11 1234 1234</h5>
    </div>
    <div class="contact__hero-img">
      <img src="../assets/img/andrew-power-EcPKajFZDfM-unsplash.png" alt="" />
    </div>
    <pagination-mark />
  </section>
</template>

<script>
import PaginationMark from '../components/PaginationMark.vue';

export default {
  name: 'About',
  components: {
    PaginationMark,
  },
};
</script>

<style lang="stylus" scoped>
.page {
  background: var(--bg-color--primary);
  padding: 8em 8em;
  position: relative;

  @media screen and (max-width: 800px) {
    padding: 8em 2em;
  }

  .section__header {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1.5em 2em;

    span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: auto;

      h1 {
        position: relative;
        font-size: 1.8rem;
        font-family: var(--font-family--primary);
        font-weight: 800;

        @media screen and (max-width: 800px) {
          font-size: 1.2rem;
        }
      }

      h6 {
        padding: 0.2em 0;
        font-size: 1rem;
        color: var(--text-color--alt);
        text-transform: uppercase;

        @media screen and (max-width: 800px) {
          font-size: 0.7rem;
        }
      }
    }

    &:before {
      content: '';
      position: absolute;
      // left: 10em;
      top: 0;
      border: solid thin var(--border-color--primary);
      width: 2.2em;

      @media screen and (max-width: 800px) {
        left: 1.2em;
      }
    }
  }

  .contact__hero-img {
    // border: solid thin green;
    width: 45%;
    position: absolute;
    right: 0.5em;
    bottom: 0;
    height: calc(100% - 9vh);

    @media screen and (max-width: 800px) {
      width: 50%;
    }

    @media screen and (max-width: 600px) {
      display: none;
    }

    @media screen and (min-width: 1900px) {
      width: 60%;
    }

    img {
      height: 100%;
      width: 100%;
      object-fit: cover;
      filter: brightness(90%);
    }
  }

  .contact-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 2em 2em;
    width: 100%;

    @media screen and (max-width: 800px) {
      padding: 0.2em;
    }

    .email-address {
      font-size: 1rem;
      font-family: var(--font-family--alt);
      font-weight: 500;
    }

    .local-address {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      font-size: 1rem;
      font-family: var(--font-family--alt);
      font-weight: 400;

      span {
        padding: 1em 0;
      }
    }

    .telephone-no {
      font-size: 1rem;
      font-family: var(--font-family--alt);
      font-weight: 500;
    }
  }
}
</style>
