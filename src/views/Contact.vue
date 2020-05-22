<template>
  <section id="about" class="page">
    <div class="section__header">
      <span
        ><h1>Contact. {{ this.bio }}</h1>
        <h6>Your next digital campaign is one discussion away</h6></span
      >
    </div>
    <div class="contact-info">
      <h5 class="email-address">Email - info@mail.cortex.com</h5>
      <div class="local-address">
        <span>Cortex</span>
        <span>221B Baker Street</span>
        <span>Essex, United Kingdom</span>
      </div>
      <h5 class="telephone-no">+44 11 1234 1234</h5>
    </div>
    <div class="map">
      <l-map :zoom="13" :center="center" :options="mapOptions" style="height: 80%">
        <l-tile-layer
          :url="'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'"
          :attribution="attribution"
        />
        <l-marker :lat-lng="withPopup"> </l-marker>
        <l-marker :lat-lng="withTooltip"> </l-marker>
      </l-map>
    </div>
    <pagination-mark />
  </section>
</template>

<script>
// import Map from '';
import PaginationMark from '@/components/PaginationMark.vue';
import latLng from 'leaflet';
// eslint-disable-next-line
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: 'About',

  components: {
    PaginationMark,
    LMap,
    LTileLayer,
    LMarker,
    // LPopup,
    // LTooltip,
  },
  data() {
    return {
      bio: 'qwerty',
      zoom: 13,
      center: latLng(47.41322, -1.219482),
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      withPopup: latLng(47.41322, -1.219482),
      withTooltip: latLng(47.41422, -1.250482),
      currentZoom: 11.5,
      currentCenter: latLng(47.41322, -1.219482),
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    },
    innerClick() {
      alert('Click!');
    },
  },
};
</script>

<style lang="stylus" scoped>
.page {
  background: var(--bg-color--primary);
  padding: 8em 8em;
  position: relative;

  @media screen and (max-width: 800px) {
    padding: 8em 2em;
  }

  .section__header {
    position: relative;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 1.5em 2em;

    span {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      margin-right: auto;

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
  }

  .map {
    border: solid thin green;
    width: 45%;
    position: absolute;
    right: 0.5em;
    bottom: 0;
    z-index: 50000;
    height: calc(100% - 9vh);

    img {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
    }
  }

  .contact-info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 2em 2em;
    width: 100%;

    @media screen and (max-width: 800px) {
      padding: 0.2em;
    }

    .email-address {
      font-size: 1rem;
      font-family: var(--font-family--alt);
      font-weight: 500;
    }

    .local-address {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;
      font-size: 1rem;
      font-family: var(--font-family--alt);
      font-weight: 400;

      span {
        padding: 1em 0;
      }
    }

    .telephone-no {
      font-size: 1rem;
      font-family: var(--font-family--alt);
      font-weight: 500;
    }
  }
}
</style>
