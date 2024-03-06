<template>
  <div id="app">
    <CSIRTMap style="height: 400px;" /> 
    <CSIRTList />
    <CSIRTFilter />
    
    <div>
      <h2>Users</h2>
      <ul>
        <li v-for="user in users" :key="user.id">
          <div>{{ user.name }}</div>
          <div>{{ user.location }}</div>
          <div>{{ user.address }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { fetchUsers } from './services/userServices.js';
import CSIRTMap from './components/CSIRTMap.vue';
import CSIRTList from './components/CSIRTList.vue';
import CSIRTFilter from './components/CSIRTFilter.vue';


export default {
  name: 'App',
  components: {
    CSIRTMap,
    CSIRTList,
    CSIRTFilter
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsersData();
  },
  methods: {
    async fetchUsersData() {
      try {
        this.users = await fetchUsers();
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    }
  }
}
</script>

<style>
/* - */
</style>
