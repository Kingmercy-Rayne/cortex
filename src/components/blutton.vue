<template>
  <div class="blutton">
    <i class="fas fa fa-facebook"></i>
    <div class="blurred">
      <span></span>
      <span></span>
    </div></div
></template>

<script>
export default {};
</script>

<style lang="stylus" scoped>
.blutton {
  position: relative;
  width: 50px;
  height: 50px;
  margin: 0 auto;

  i {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    transform: translate(-50%, -50%);
    font-size: 20px;
    z-index: 10;
    color: cyan;
  }

  .blurred {
    position: relative;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: solid thin purple;
    filter: url('#goo');
  }

  .blurred::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    border: solid thin brown;
    background-color: #333;
    transition: 1.6s;
  }

  .blurred::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 100%;
    border: solid thin brown;
    background-color: #333;
    transition: 0.6s;
  }

  .blurred > span:nth-of-type(1), .blurred > span:nth-of-type(2) {
    position: absolute;
    width: 50px;
    height: 50px;
    top: 0;
    left: 0;
    border-radius: 100%;
    border: solid thin green;
    background-color: #999;
    transition: 0.2s;
  }

  .blutton:hover .blurred::before {
    width: 40px;
    height: 40px;
    top: 50%;
    left: 50%;
  }

  .blutton:hover .blurred::after {
    width: 15px;
    height: 15px;
    top: 30px;
    left: 45px;
  }

  .blutton:hover .blurred > span:nth-of-type(1) {
    width: 30px;
    height: 30px;
    top: -10px;
    left: -20px;
  }

  .blutton:hover .blurred > span:nth-of-type(2) {
    width: 25px;
    height: 25px;
    top: 40px;
    left: -20px;
  }
}
</style>