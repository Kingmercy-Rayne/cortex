<template>
  <div class="intro-overlay">
    <svg
      v-if="pageReady"
      class="intro-overlay__logo"
      width="589"
      height="103"
      viewBox="0 0 589 103"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- eslint-disable -->
      <path
        d="M53.6451 102.864C43.6611 102.864 34.6371 100.656 26.5731 96.24C18.6051 91.824 12.3171 85.728 7.70912 77.952C3.19712 70.08 0.941132 61.296 0.941132 51.6C0.941132 41.904 3.19712 33.168 7.70912 25.392C12.3171 17.52 18.6531 11.376 26.7171 6.96C34.7811 2.544 43.8051 0.335999 53.7891 0.335999C61.2771 0.335999 68.1891 1.584 74.5251 4.08C80.8611 6.576 86.2371 10.224 90.6531 15.024L83.8851 21.792C76.0131 13.824 66.0771 9.84 54.0771 9.84C46.1091 9.84 38.8611 11.664 32.3331 15.312C25.8051 18.96 20.6691 23.952 16.9251 30.288C13.2771 36.624 11.4531 43.728 11.4531 51.6C11.4531 59.472 13.2771 66.576 16.9251 72.912C20.6691 79.248 25.8051 84.24 32.3331 87.888C38.8611 91.536 46.1091 93.36 54.0771 93.36C66.1731 93.36 76.1091 89.328 83.8851 81.264L90.6531 88.032C86.2371 92.832 80.8131 96.528 74.3811 99.12C68.0451 101.616 61.1331 102.864 53.6451 102.864Z"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M155.324 102.864C145.34 102.864 136.268 100.656 128.108 96.24C120.044 91.728 113.708 85.584 109.1 77.808C104.588 70.032 102.332 61.296 102.332 51.6C102.332 41.904 104.588 33.168 109.1 25.392C113.708 17.616 120.044 11.52 128.108 7.104C136.268 2.592 145.34 0.335999 155.324 0.335999C165.308 0.335999 174.284 2.544 182.252 6.96C190.316 11.376 196.652 17.52 201.26 25.392C205.868 33.168 208.172 41.904 208.172 51.6C208.172 61.296 205.868 70.08 201.26 77.952C196.652 85.728 190.316 91.824 182.252 96.24C174.284 100.656 165.308 102.864 155.324 102.864ZM155.324 93.36C163.292 93.36 170.492 91.584 176.924 88.032C183.356 84.384 188.396 79.392 192.044 73.056C195.692 66.624 197.516 59.472 197.516 51.6C197.516 43.728 195.692 36.624 192.044 30.288C188.396 23.856 183.356 18.864 176.924 15.312C170.492 11.664 163.292 9.84 155.324 9.84C147.356 9.84 140.108 11.664 133.58 15.312C127.148 18.864 122.06 23.856 118.316 30.288C114.668 36.624 112.844 43.728 112.844 51.6C112.844 59.472 114.668 66.624 118.316 73.056C122.06 79.392 127.148 84.384 133.58 88.032C140.108 91.584 147.356 93.36 155.324 93.36Z"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M300.889 102L277.849 69.6C275.257 69.888 272.569 70.032 269.785 70.032H242.713V102H232.057V1.2H269.785C282.649 1.2 292.729 4.27199 300.025 10.416C307.321 16.56 310.969 25.008 310.969 35.76C310.969 43.632 308.953 50.304 304.921 55.776C300.985 61.152 295.321 65.04 287.929 67.44L312.553 102H300.889ZM269.497 60.96C279.481 60.96 287.113 58.752 292.393 54.336C297.673 49.92 300.313 43.728 300.313 35.76C300.313 27.6 297.673 21.36 292.393 17.04C287.113 12.624 279.481 10.416 269.497 10.416H242.713V60.96H269.497Z"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M354.297 10.416H318.873V1.2H400.377V10.416H364.953V102H354.297V10.416Z"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M488.68 92.784V102H417.4V1.2H486.52V10.416H428.056V46.272H480.184V55.344H428.056V92.784H488.68Z"
        stroke="white"
        stroke-width="2"
      />
      <path
        d="M575.679 102L543.135 57.648L510.735 102H498.495L536.799 50.16L500.943 1.2H513.183L543.567 42.384L573.807 1.2H585.327L549.615 49.872L588.063 102H575.679Z"
        stroke="white"
        stroke-width="2"
      />
    </svg>
  </div>
</template>

<script>
export default {
  name: 'introOverlay',
  data() {
    return {
      pageReady: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.pageReady = true;
      //   function getSVGPathLength() {
      //     const logo = document.querySelectorAll('.intro-overlay__logo path');
      //     console.log(logo);
      //     //  eslint-disable-next-line
      //     for (let i = 0; i < logo.length; i++) {
      //       // get length of SVGPathElement
      //       console.log(`Letter ${i} is ${logo[i].getTotalLength()}`);
      //     }
      //   }
    });
  },
};
</script>

<style lang="stylus" scoped>
.intro-overlay {
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-color--alt);

  .intro-overlay__logo path:nth-child(1) {
    // get length of SVGPathElement with JS and use as value for stroke-dasharray
    stroke-dasharray: 465px;
    stroke-dashoffset: 465px;
    animation: overlay-logo-animation 4s ease forwards 3.3s;
  }

  .intro-overlay__logo path:nth-child(2) {
    // get length of SVGPathElement with JS and use as value for stroke-dasharray
    stroke-dasharray: 595px;
    stroke-dashoffset: 595px;
    animation: overlay-logo-animation 3s ease forwards 3.5s;
  }

  .intro-overlay__logo path:nth-child(3) {
    // get length of SVGPathElement with JS and use as value for stroke-dasharray
    stroke-dasharray: 607px;
    stroke-dashoffset: 607px;
    animation: overlay-logo-animation 3s ease forwards 3.6s;
  }

  .intro-overlay__logo path:nth-child(4) {
    // get length of SVGPathElement with JS and use as value for stroke-dasharray
    stroke-dasharray: 364px;
    stroke-dashoffset: 364px;
    animation: overlay-logo-animation 3s ease forwards 3.9s;
  }

  .intro-overlay__logo path:nth-child(5) {
    // get length of SVGPathElement with JS and use as value for stroke-dasharray
    stroke-dasharray: 565px;
    stroke-dashoffset: 565px;
    animation: overlay-logo-animation 2s ease forwards 4.1s;
  }

  .intro-overlay__logo path:nth-child(6) {
    // get length of SVGPathElement with JS and use as value for stroke-dasharray
    stroke-dasharray: 510px;
    stroke-dashoffset: 510px;
    animation: overlay-logo-animation 2s ease forwards 4.4s;
  }

  @keyframes overlay-logo-animation {
    to {
      stroke-dashoffset: 0px;
    }
  }
}
</style>
