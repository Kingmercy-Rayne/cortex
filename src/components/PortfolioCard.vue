<template>
  <article class="portfolio__card">
    <div class="portfolio__img">
      <img src="../assets/img/alex-iby-5cTvUcsrzLU-unsplash.jpg" alt="" />
    </div>
    <span class="divider"></span>
    <div class="portfolio__content">
      <h1 class="portfolio__title">Retro Futuristic Car</h1>
      <time class="portfolio__date">16 June, 2018</time>
      <p class="portfolio__text">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde deserunt eligendi et dolorem.
        Recusandae quibusdam illo alias inventore rerum ipsa iusto amet, quaerat odit distinctio sed
        eaque, qui minima sunt!
      </p>
      <div class="portfolio__tag">
        <span class="portfolio__tag__ref">Categories</span>
        <span class="portfolio__tag__value">Illustration</span>
      </div>
      <div class="portfolio__tag">
        <span class="portfolio__tag__ref">Client</span>
        <span class="portfolio__tag__value">Anthesia.org</span>
      </div>
      <div class="portfolio__tag">
        <span class="portfolio__tag__ref">Service</span>
        <span class="portfolio__tag__value">Branding, Website, Posters</span>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'PortfolioCard',
};
</script>

<style lang="stylus" scoped>
.portfolio__card {
  width: 100%;
  min-height: 250px;
  display: flex;
  align-items: stretch;
  padding: 2em;
  padding-bottom: 4em;
  background: var(--bg-color--tri);
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
