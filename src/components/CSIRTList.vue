<template>
  <div>
    <h2>CSIRTs</h2>
    <ul>
      <li v-for="csirt in csirts" :key="csirt.id">
        <h3>{{ csirt.name }}</h3>
        <p>{{ csirt.location }}</p>
        <p>{{ csirt.contacts }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
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
    }
  }
};
</script>

<style>
/* - */
</style>
