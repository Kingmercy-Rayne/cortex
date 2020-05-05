<template>
  <section class="section v-services">
    <div class="section__header">
      <h1>Services.</h1>
      <h6>WE WORK WITH YOU, NOT FOR YOU</h6>
    </div>
    <ul class="services__container">
      <li class="service">
        <span>Digital strategy</span><i class="fas fa fa-long-arrow-right"></i>
      </li>
      <li class="service"><span>UX Design</span><i class="fas fa fa-long-arrow-right"></i></li>
      <li class="service"><span>Content Design</span><i class="fas fa fa-long-arrow-right"></i></li>
      <li class="service">
        <span>Content Strategy</span><i class="fas fa fa-long-arrow-right"></i>
      </li>
      <li class="service">
        <span>Design & Concept</span><i class="fas fa fa-long-arrow-right"></i>
      </li>
      <li class="service"><span>Social Media</span><i class="fas fa fa-long-arrow-right"></i></li>
      <li class="service"><span>Media Planning</span><i class="fas fa fa-long-arrow-right"></i></li>
      <li class="service"><span>Brand Identity</span><i class="fas fa fa-long-arrow-right"></i></li>
      <li class="service">
        <span>SEO Optimization</span><i class="fas fa fa-long-arrow-right"></i>
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

  .services__container {
    width: 100%;
    flex-grow: 1;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;

    .service {
      display: flex;
      justify-content: space-between;
      min-width: 300px;
      padding: 1em 1em;
      background: var(--bg-color--tri);

      span {
        padding: 0.2em 0;
      }
    }
  }
}
</style>
