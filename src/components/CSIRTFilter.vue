<template>
  <div>
    <input type="text" v-model="searchTerm" @input="filterCSIRTS" placeholder="Search CSIRTs">
    <ul>
      <li v-for="csirt in filteredCSIRTS" :key="csirt.id">
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
      csirts: [],
      searchTerm: ''
    };
  },
  computed: {
    filteredCSIRTS() {
      return this.csirts.filter(csirt =>
        csirt.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    }
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
    filterCSIRTS() {
      // No need to fetch again, just filter the existing data
    }
  }
};
</script>

<style>
/* - */
</style>
