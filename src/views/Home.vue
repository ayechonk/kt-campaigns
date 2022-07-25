<template>
	<div>
		<h2 class="text-start">Your Narrative Campaigns</h2>
		<div v-for="c in campaigns" :key="c.name">
			<CampaignCard :name="c.name" />
		</div>
		<router-link to="/new-campaign">
			<OrangeCard title="New Campaign" />
		</router-link>
	</div>
</template>

<script>
import store from 'store-js'
import CampaignCard from '@/components/CampaignCard.vue'
import OrangeCard from '@/components/layout/OrangeCard.vue'

// import store from "store-js";
export default {
	name: 'HomeVue',
	components: {
		CampaignCard,
		OrangeCard
	},
	"events": [],
	"data": function () {
		return {
			"campaigns": [],
		}
	},
	methods: {
		alert: function () {
			this.formOpen = !this.formOpen
		}
	},
	"beforeMount": function () {
		let campaigns = store.get("campaigns");
		if (!campaigns) {
			campaigns = {};
			store.set("campaigns", campaigns);
		}
		this.campaigns = campaigns;
	}
}
</script>
<style scoped>
</style>
