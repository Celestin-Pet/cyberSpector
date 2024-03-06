<template>
  <div>
    
       <l-map :zoom="zoom" :center="center" style="height: 500px;"> 
      <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      <l-marker v-for="csirt in csirts" :key="csirt.id" :lat-lng="csirtLocation(csirt)">
        <l-popup>
          <h3>{{ csirt.name }}</h3>
          <p>{{ csirt.location }}</p>
          <p>{{ csirt.contacts }}</p>
          <a :href="'https://www.africacert.org/african-csirts/' + csirt.id">More info</a>
        </l-popup>
      </l-marker>
    </l-map>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from 'vue3-leaflet';
import axios from 'axios';

export default {
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
  },
  data() {
    return {
      zoom: 6,
      center: [0, 0],
      url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'OpenStreetMap',
      csirts: []
    };
  },
  created() {
    this.fetchCSIRTS();
  },
  methods: {
    async fetchCSIRTS() {
      try {
        const response = await axios.get('http://localhost:8000/csirts/');
        this.csirts = response.data;
      } catch (error) {
        console.error('Error fetching CSIRTS:', error);
      }
    },
    csirtLocation(csirt) {
      return [csirt.latitude, csirt.longitude];
    }
  }
};
</script>

<style>
/* Add your CSS styles here */
</style>
