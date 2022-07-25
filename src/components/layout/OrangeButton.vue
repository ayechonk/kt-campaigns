<template>
	<button :disabled="this.disable" class="btn" :class="this.class">{{ text }}</button>
</template>
<script>export default {
	name: "OrangeButton",
	props: {
		text: String,
		class: String,
		disable: { type: Boolean, default: false }
	}
}
</script>
<style scoped>
button {
	background-color: #c54c21;
	color: #eee;
}

button.full-width {
	display: block;
	width: 100%;
	text-align: center;
	padding: 1rem;
}

button:hover {
	color: #eee;
}
button:disabled{
	color: #ddd;
	background-color: #555;
}
</style>