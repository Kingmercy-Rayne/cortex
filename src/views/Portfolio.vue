<template>
  <section id="portfolio" class="page v-portfolio">
    <div class="section__header">
      <span
        ><h1>Portfolio.</h1>
        <h6>We bring the needed spark</h6></span
      >
      <button class="button">View All</button>
    </div>
    <!-- Swiper -->
    <div class="swiper-container" ref="swiperContainer">
      <div class="swiper-wrapper">
        <div class="swiper-slide">
          <img src="../assets/img/alex-iby-5cTvUcsrzLU-unsplash.jpg" alt="" />
          <p>
            <span class="project__name">Anthesia.org</span>
            <span class="project__location">Stockholm, Sweden</span>
          </p>
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/noah-buscher-jm0npM4Gyic-unsplash.jpg" alt="" />
          <p>
            <span class="project__name">Mirabilous</span>
            <span class="project__location">London, UK</span>
          </p>
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/noah-buscher-1-kPytLsVkY-unsplash.jpg" alt="" />
          <p>
            <span class="project__name">Antuan</span>
            <span class="project__location">Sydney, Australia</span>
          </p>
        </div>
        <div class="swiper-slide">
          <img src="../assets/img/james-francis-AFLiCZFVog4-unsplash.jpg" alt="" />
          <p>
            <span class="project__name">Drinks on-ya</span>
            <span class="project__location">Paris, France</span>
          </p>
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
import PaginationMark from '../components/PaginationMark.vue';

export default {
  name: 'Portfolio',
  components: {
    PaginationMark,
  },
  mounted() {
    this.$nextTick(() => {
      const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3,
        spaceBetween: 25,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          // when window width is >= 320px
          320: {
            slidesPerView: 2,
            spaceBetween: 15,
          },
          // when window width is >= 640px
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
          // when window width is >= 1900px
          1900: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        },
      });
      swiper.init();
    });
  },
};
</script>

<style lang="stylus" scoped>
.v-portfolio {
  background: var(--bg-color--primary);
  padding: 8em 0;
  overflow-x: hidden;

  .section__header {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 1.5em 10em;

    @media screen and (max-width: 800px) {
      padding: 1.5em 1.5em;
    }

    span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

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

    button {
      margin-left: auto;
    }
  }

  .swiper-container {
    // flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-top: 1em;
    padding: 0;
    position: relative;

    // border: solid thin green;
    .swiper-wrapper {
      // border: solid thin indigo;
      height: 50vh;
      width: 100%;

      .swiper-slide {
        position: relative;
        height: 100%;
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

        // display:none;
        img {
          width: 100%;
          height: 100%;
          filter: brightness(50%);
          object-fit: cover;
        }

        p {
          // border: solid thin green;
          position: absolute;
          display: flex;
          right: 0;
          bottom: 1px;
          flex-direction: column;
          padding: 0.8em 1em;
          z-index: 50;

          &:before {
            // here to provide drak filter for text
            content: '';
            position: absolute;
            left: 0;
            top: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            filter: brightness(10%);
            z-index: -45;
          }

          .project__name {
            font-size: 1.5rem;
            font-weight: 700;
            font-family: var(--font-family--primary);
            text-transform: uppercase;

            @media screen and (max-width: 800px) {
              font-size: 1rem;
            }
          }

          .project__location {
            font-size: 0.7rem;
            font-weight: 400;
            font-family: var(--font-family--alt);
            letter-spacing: 1px;

            @media screen and (max-width: 800px) {
              font-size: 0.6rem;
            }
          }
        }
      }

      .swiper-slide:hover {
        transform: scale(0.95);
      }

      .swiper-slide:hover img {
        filter: grayscale(0);
      }

      .swiper-slide:hover p {
        visibility: hidden;
      }
    }
  }
}
</style>
