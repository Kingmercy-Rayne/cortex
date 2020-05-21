<template>
  <section id="services" class="page v-services">
    <div class="section__header">
      <h1>Services.</h1>
      <h6>WE WORK WITH YOU, NOT FOR YOU</h6>
    </div>
    <ul class="services__container">
      <li v-for="item in servicesOffered" :key="item" class="service">
        <span>{{ item }}</span
        ><i class="fas fa fa-long-arrow-right"></i>
      </li>
    </ul>
    <pagination-mark />
  </section>
</template>

<script>
import PaginationMark from '@/components/PaginationMark.vue';

export default {
  name: 'Services',
  components: {
    PaginationMark,
  },
  data() {
    return {
      servicesOffered: [
        'Digital Strategy',
        'Brand Identity',
        'Content Design',
        'Content Strategy',
        'Design and Concept',
        'Social Media',
        'UX Design',
        'Media Planning',
        'SEO Integration',
      ],
    };
  },
};
</script>

<style lang="stylus" scoped>
.v-services {
  background: var(--bg-color--primary);
  padding: 8em 10em;

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
