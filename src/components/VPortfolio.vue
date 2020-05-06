<template>
  <section class="section v-portfolio">
    <div class="section__header">
      <span
        ><h1>Portfolio.</h1>
        <h6>We bring the needed spark</h6></span
      >
      <button class="button">View All</button>
    </div>
    <!-- Swiper -->
    <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets\img\alex-iby-5cTvUcsrzLU-unsplash.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/noah-buscher-jm0npM4Gyic-unsplash.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/noah-buscher-1-kPytLsVkY-unsplash.jpg" alt="" />
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/james-francis-AFLiCZFVog4-unsplash.jpg" alt="" />
        </div>
      </div>
      <!-- Add Nav Arrows -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
    <!-- END Swiper -->
    <pagination-mark />
  </section>
</template>

<script>
import Swiper from 'swiper';
import '../assets/swiper/css/swiper.min.css';
import PaginationMark from './PaginationMark.vue';

export default {
  name: 'VServices',
  components: {
    PaginationMark,
  },
  mounted() {
    const swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 25,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
    swiper();
  },
};
</script>

<style lang="stylus" scoped>
.v-portfolio {
  background: var(--bg-color--primary);
  padding: 3em 0;

  .section__header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1.5em 10em;

    span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      h1 {
        position: relative;
        font-size: 1.8rem;
        font-weight: bold;
      }

      h6 {
        padding: 0.2em 0;
        color: var(--text-color--alt);
        text-transform: uppercase;
      }
    }

    &:before {
      content: '';
      position: absolute;
      left: 10em;
      top: 0;
      border: solid thin var(--border-color--primary);
      width: 2.2em;
    }
  }

  .swiper-container {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1em;
    padding: 0;
    position: relative;

    // border: solid thin green;
    .swiper-wrapper {
      // border: solid thin indigo;
      flex-grow: 1;

      .swiper-slide {
        height: 60vh;
        // border: solid thin red;
        text-align: center;
        font-size: 18px;
        background: #222;
        /* Center slide text vertically */
        display: -webkit-box;
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
        -webkit-box-align: center;
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
        transition: all 0.3s ease-in-out;

        @media screen and (min-width: 800px) {
          filter: grayscale(60%);
        }
      }

      .swiper-slide:hover {
        transform: scale(0.95);
        filter: grayscale(0);
      }

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
