<template>
  <div>
    Home
    <div>
      Board List:
      <div v-if="loading">Loading...</div>
      <div v-else>Api result: {{apiRes}}</div>
      <ul>
        <li>
          <router-link to="/b/1">Board1</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
	name: 'Home',
	data() {
		return {
			loading: false,
			apiRes: '',
			error: ''
		};
	},
	created() {
		this.fetchData();
	},
	methods: {
		fetchData() {
			this.loading = true;
			axios
				.get('http://localhost:3000/health')
				.then(res => {
					this.apiRes = res.data;
					this.loading = false;
				})
				.catch(res => {
					this.error = res.response.data;
				})
				.finally(() => {});
		}
	}
};
</script>

<style scoped>
</style>
