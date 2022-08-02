<template>
	<div class="container">
		<h2>Requisitions</h2>
		<OrangeCard>
			<p>You have a total of {{ this.campaign.requisitionPoints }} requisition points.</p>
			<SelectInput v-model="selectedRequisition" :options="getRequisitionOptions()" errorLabel="test"
				label="Choose a requisition to purchase" v-bind:isValid="true" />
			<p class="mt-3">{{ ktrequisitions[this.selectedRequisition].desc }}</p>
			<OrangeButton class="mt-3" :class="'full-width'" text="Purchase" @click="purchaseRequisition"
				:disable="this.campaign.requisitionPoints <= 0" />
		</OrangeCard>
		<div v-if="campaign.purchasedRequisition && campaign.purchasedRequisition.length > 0">
			<h2>Purchased Requisitions</h2>
			<OrangeCard>
				<PurchasedRequisitionCard v-for="req in campaign.purchasedRequisition" :key="req.id" :purchasedRequisition="req"
					:ktrequisition="ktrequisitions[req.id]" @delReq="deleteRequisition" />
			</OrangeCard>
		</div>
	</div>
</template>
<script>
import store from "store-js";

import SelectInput from "../components/layout/SelectInput.vue";
import OrangeButton from "../components/layout/OrangeButton.vue";
import OrangeCard from "../components/layout/OrangeCard.vue";
import PurchasedRequisitionCard from "../components/PurchasedRequisitionCard.vue"

import ktrequisitions from "@/assets/ktdata/requisitions.json";

export default {
	name: "RequisitionView",
	props: {
		campaignName: String
	},
	data: function () {
		return {
			campaign: {},
			selectedRequisition: "0",
			ktrequisitions
		};
	},
	methods: {
		getRequisitionOptions: function () {
			return Object.entries(ktrequisitions).map(arr => [arr[0], arr[1].name])
		},
		purchaseRequisition: function () {
			console.log(this)
			if (this.validRequisitionPurchase()) {
				this.campaign.requisitionPoints--
				if (!this.campaign.purchasedRequisition) this.campaign.purchasedRequisition = []
				this.campaign.purchasedRequisition.push({ id: this.selectedRequisition, isNew: true })
				this.storeCampaign()
			}

		},
		storeCampaign: () => { },
		validRequisitionPurchase: () => {
			return true;
		},
		deleteRequisition: function (delReq) {
			this.campaign.purchasedRequisition = this.campaign.purchasedRequisition.filter(r => r !== delReq)
		}
	},
	beforeMount: function () {
		let campaigns = store.get("campaigns");
		if (!campaigns)
			this.$router.push("/error");
		let curCampaign = campaigns[this.campaignName];
		if (!curCampaign)
			this.$router.push("/404");
		this.campaign = curCampaign;
	},
	components: { SelectInput, OrangeButton, OrangeCard, PurchasedRequisitionCard }
}
</script>
<style scoped>
* {
	text-align: left;
}
</style>