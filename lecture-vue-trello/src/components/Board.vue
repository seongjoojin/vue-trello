<template>
  <div>
    Board
    <div v-if="loading">loading board</div>
    <div v-else>
      <div>bid : {{ bid }}</div>
      <pre>{{ board }}</pre>
      <router-link :to="`/b/${bid}/c/1`">Card 1</router-link>
      <router-link :to="`/b/${bid}/c/2`">Card 2</router-link>
    </div>
    <hr />
    <router-view></router-view>
  </div>
</template>
<script>
import { mapState, mapActions } from 'vuex';

export default {
	name: 'Board',
	data() {
		return {
			bid: 0,
			loading: false
		};
	},
	computed: {
		...mapState({
			board: 'board'
		})
	},
	created() {
		this.fetchData();
	},
	methods: {
		...mapActions(['FETCH_BOARD']),
		fetchData() {
			this.loading = true;
			this.FETCH_BOARD({ id: this.$route.params.bid }).then(
				() => (this.loading = false)
			);
		}
	}
};
</script>
<style scoped>
</style>
