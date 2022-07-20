<template>
	<div class="bg-orange mb-3" style="padding:2px">
		<div class="corner p-3">
			{{ title }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'OrangeCard',
	props: {
		title: String
	},
}
</script>

<style scoped>
* {
	color: #eee;
}

.bg-orange {
	background-color: #c54c21;
}

.corner {
	padding: 14px;
	background: linear-gradient(225deg, transparent 13px, #191b1c 0);
}
</style>
