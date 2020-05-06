<template>
  <nav class="nav">
    <div class="logo"><h1>Cortex.</h1></div>
    <ul class="nav-links">
      <li>Home</li>
      <li>Services</li>
      <li>Works</li>
      <li>About</li>
      <li>Contact</li>
    </ul>
    <div class="search">
      <i class="fas fa fa-search"></i>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'TheNavbar',
};
</script>
<style lang="stylus" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  // applying a margin-top here leaves a visible gap...
  // solved by applying padding to the parent section-container
  .logo h1 {
    font-size: 1.4rem;
  }

  .nav-links {
    display: flex;
    margin-left: auto;
    margin-right: 2em;
    font-size: 0.8rem;

    li {
      padding: 0.8em;
      margin: 0 1em;
    }
  }
}
</style>
