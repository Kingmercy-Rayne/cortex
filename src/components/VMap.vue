<template>
  <div class="map">
    <l-map :zoom="7" :center="center" :options="mapOptions" style="height: 100%">
      <l-tile-layer
        :url="'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png'"
        :attribution="attribution"
      />
      <!-- <l-marker :lat-lng="withPopup"> </l-marker> -->
      <!-- <l-marker :lat-lng="withTooltip"> </l-marker> -->
    </l-map>
  </div>
</template>

<script>
import * as latLng from 'leaflet';
// eslint-disable-next-line
import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';

export default {
  name: '',
  components: {
    LMap,
    LTileLayer,
    // LMarker,
    // LPopup,
    // LTooltip,
  },
  data() {
    return {
      center: [47.41322, -1.219482],
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      showParagraph: false,
      mapOptions: {
        zoomSnap: 0.5,
      },
      showMap: true,
      currentCenter: [47.41322, -1.219482],
    };
  },

  mounted() {
    this.withPopup = latLng(47.41322, -1.219482);
    this.withTooltip = latLng(47.41422, -1.250482);
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
  },
};
</script>

<style lang="stylus" scoped>
.map {
  position: absolute;
  width: 35%;
  right: 2em;
  bottom: 10%;
  z-index: 50000;
  height: calc(70% - 9vh);

  @media screen and (max-width: 800px) {
    display: none;
  }

  img {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }
}
</style>
