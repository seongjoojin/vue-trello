<template>
  <div class="add-card">
    <form>
      <input class="form-control" type="text" ref="inputText" />
      <button class="btn btn-success" type="submit">Add Card</button>
      <a class="cancel-add-btn" href @click.prevent="$emit('close')">&times;</a>
    </form>
  </div>
</template>

<script>
export default {
	data() {
		return {
			inputTitle: ''
		};
	},
	mounted() {
		this.$refs.inputText.focus()
	}
};
</script>

<style>
.add-card {
	padding: 10px;
	display: block;
	position: relative;
}
.add-card .cancel-add-btn {
	display: inline-block;
	margin-left: 10px;
	vertical-align: middle;
	text-decoration: none;
	color: #888;
	font-size: 24px;
}
.add-card .cancel-add-btn:hover,
.add-card .cancel-add-btn:focus {
	color: #666;
}
</style>
