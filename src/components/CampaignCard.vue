<template>
	<div>
		<router-link :to="{ name: 'campaign', params: { campaignName: name } }">
			<OrangeCard :title="name" />
		</router-link>
	</div>
</template>

<script>
import OrangeCard from './layout/OrangeCard.vue'

export default {
	name: 'CampaignCard',
	components: {
		OrangeCard
	},
	props: {
		name: String
	},
}
</script>

<style scoped>
</style>
