<template>
  <section class="section v-services">
    <div class="section__header">
      <h1>About.</h1>
      <!-- <h6>A testament to the value we bring</h6> -->
      <h6>A workflow focused on efficiency</h6>
    </div>
    <ul class="pictorial">
      <li class="pictorial__item">
        <img src="../assets\img\austin-distel-mpN7xjKQ_Ns-unsplash.jpg" alt="" />
        <div class="filter"></div>
        <div class="pictorial__writeup">
          <h4>Teamwork</h4>
          <h6>Commited and creative</h6>
        </div>
      </li>
      <li class="pictorial__item">
        <img src="../assets\img\austin-distel-wD1LRb9OeEo-unsplash.jpg" alt="" />
        <div class="filter"></div>
        <div class="pictorial__writeup">
          <h4>Philosophy</h4>
          <h6>Trust pays off</h6>
        </div>
      </li>
      <li class="pictorial__item">
        <img src="../assets\img\austin-distel-wawEfYdpkag-unsplash.jpg" alt="" />
        <div class="filter"></div>
        <div class="pictorial__writeup">
          <h4>Office</h4>
          <h6>Sydney, Australia</h6>
        </div>
      </li>
    </ul>
    <pagination-mark />
  </section>
</template>

<script>
import PaginationMark from './PaginationMark.vue';

export default {
  name: 'VServices',
  components: {
    PaginationMark,
  },
};
</script>

<style lang="stylus" scoped>
.v-services {
  background: var(--bg-color--primary);
  padding: 3em 10em;

  .section__header {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 1.5em 0;

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

    &:before {
      content: '';
      position: absolute;
      left: 0;
      top: 0;
      border: solid thin var(--border-color--primary);
      width: 2.2em;
    }
  }

  .pictorial {
    flex-grow: 1;
    display: grid;
    gap: 0.8em;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 220px;

    .pictorial__item {
      position: relative;
      display: flex;
      flex-direction: column;
      z-index: 5;

      &:nth-child(1) {
        grid-row: span 2 / auto;
        grid-column: span 2 / auto;
      }

      img {
        position: absolute;
        z-index: -5;
        height: 100%;
        object-fit: cover;
      }

      .filter {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.6);
      }

      .pictorial__writeup {
        position: absolute;
        bottom: 2em;
        display: flex;
        flex-direction: column;
        padding: 1em;
        font-size: 0.8rem;
      }
    }
  }
}
</style>
