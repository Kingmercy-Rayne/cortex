<template>
  <article class="portfolio__card">
    <div class="portfolio__img">
      <img :src="img" alt="" />
      <!-- {{img}} -->
    </div>
    <span class="divider"></span>
    <div class="portfolio__content">
      <h1 class="portfolio__title">
        <span>{{ title }}</span>
        <i class="fas fa fa-external-link"></i>
      </h1>
      <time class="portfolio__date">{{ date }}</time>
      <p class="portfolio__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde deserunt eligendi et dolorem.
        Recusandae quibusdam illo alias inventore rerum ipsa iusto amet, quaerat odit distinctio sed
        eaque, qui minima sunt!
      </p>
      <div class="portfolio__tag">
        <span class="portfolio__tag__ref">Categories</span>
        <span class="portfolio__tag__value">{{ category }}</span>
      </div>
      <div class="portfolio__tag">
        <span class="portfolio__tag__ref">Client</span>
        <span class="portfolio__tag__value">{{ client }}</span>
      </div>
      <div class="portfolio__tag">
        <span class="portfolio__tag__ref">Technologies</span>
        <span class="portfolio__tag__value">{{ technologies }}</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PortfolioCard',
  props: ['img', 'title', 'date', 'overview', 'category', 'client', 'technologies'],
};
</script>

<style lang="stylus" scoped>
.portfolio__card {
  width: 98%;
  min-height: 250px;
  align-self: center;
  display: flex;
  align-items: stretch;
  margin: 2em 0;
  padding: 2em;
  padding-right: 4em;
  padding-bottom: 4em;
  background: var(--bg-color--tri);
  border-radius: 2em;
  overflow: hidden;

  .portfolio__img {
    flex-basis: 25%;
    align-self: stretch;
    align-items: stretch;
    position: relative;
    overflow: hidden;

    img {
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      object-fit: cover;
      padding: 1em;
    }
  }

  .divider {
    width: 2px;
    margin: 1em;
    background: #ccc;
  }

  .portfolio__content {
    flex-basis: 70%;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    padding: 0 1em;

    // border: solid thin brown;
    .portfolio__title {
      font-size: 2rem;
      font-family: var(--font-family--primary);
      display: flex;
      align-items: center;

      span {
        margin-right: 3em;
      }

      i {
        transform: scale(0.7);
        color: var(--text-color--alt);
      }
    }

    .portfolio__date {
      opacity: 0.6;
      margin: 2em 0;
      font-size: 0.7rem;
    }

    .portfolio__text {
      font-size: 0.9rem;
      margin-bottom: 2em;
    }

    .portfolio__tag {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 0.7rem;
      margin-bottom: 1em;

      .portfolio__tag__ref {
        width: 10%;
        font-weight: 500;
        font-family: var(--font-family--primary);
        opacity: 0.8;
        margin-right: 2em;
        letter-spacing: 1px;
      }

      .portfolio__tag__value {
        font-weight: 400;
      }
    }
  }
}
</style>
