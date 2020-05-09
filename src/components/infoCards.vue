<template>
  <ul>
    <li class="rellax brand__card" data-rellax-speed="1">
      <i class="fas fa fa-2x fa-bar-chart"></i>
      <h4 class="brand__card__title">Future Vision</h4>
      <p class="brand__card__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium error esse ipsam
        velit quibusdam.
      </p>
    </li>
    <li class="rellax brand__card" data-rellax-speed="0">
      <i class="fas fa fa-2x fa-rocket"></i>
      <h4 class="brand__card__title">Product Design</h4>
      <p class="brand__card__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium error esse ipsam
        velit quibusdam.
      </p>
    </li>
    <li class="rellax brand__card" data-rellax-speed="-1">
      <i class="fas fa fa-2x fa-pie-chart"></i>
      <h3 class="brand__card__title">Innovative Solutions</h3>
      <p class="brand__card__body">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla accusantium error esse ipsam
        velit quibusdam.
      </p>
    </li>
  </ul></</template>

<script>
export default {};
</script>
<style lang="stylus" scoped>
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
}</style>