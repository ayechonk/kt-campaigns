<template>
	<div class="bg-orange mb-3" style="padding:2px">
		<div class="text-start corner p-3">
			<img class="me-3" style="display:inline-block" v-if="img1" v-bind:src="require('@/assets/imgs/' + img1 + '.png')" />
			<!-- <img v-if="img2" v-bind:src="require('@/assets/imgs/'+img2+'.png')" /> -->
			{{ title }}
		</div>
	</div>
</template>

<script>
export default {
	name: 'OrangeCard',
	props: {
		title: String,
		img1: String,
		img2: String
	},
}
</script>

<style scoped>
* {
	color: #eee;
}

img {
	filter: invert(1);
}

.bg-orange {
	background-color: #c54c21;
}

.corner {
	padding: 14px;
	background: linear-gradient(225deg, transparent 13px, #191b1c 0);
}
</style>
