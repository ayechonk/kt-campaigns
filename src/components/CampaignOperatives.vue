<template>
	<div class="container mt-1 ">
		<h2 class="text-start">{{ campaignName }} - Operatives</h2>
		<div v-for="op in operatives" :key="op.operative">
			<OrangeCard :title="op.operative" />
		</div>
		<router-link :to="{ name: 'newOp', params: { campaignName } }">
			<OrangeCard style="cursor:pointer" title="Add New Operative" />
		</router-link>
	</div>
</template>
<script>
import store from 'store-js';
import OrangeCard from './layout/OrangeCard.vue';
export default {
	name: "CampaignOperatives",
	props: {
		campaignName: String
	},
	data: function () {
		return {
			operatives: []
		}
	},
	beforeMount: function () {
		let ops = store.get("ops");
		if (!ops) {
			ops = {};
		}
		let curOps = ops[this.campaignName];
		if (!curOps) {
			curOps = {};
			ops[this.campaignName] = curOps;
			store.set("ops", ops);
		}
		this.operatives = curOps;
	},
	components: { OrangeCard }
}
</script>