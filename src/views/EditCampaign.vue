<template>
	<div>
		<h2 class="text-start">{{ campaignName }}</h2>
		<router-link :to="{ 'name': 'campaignOps', params: { 'campaignName': campaignName } }">
			<OrangeCard title="Operatives" />
		</router-link>
		<router-link :to="{ 'name': 'requisitions' }"  >
			<OrangeCard title="Requisitions" />
		</router-link>
		<OrangeCard style="cursor:pointer;" title="Engage Combat!" @click="alert" />
		<OrangeCard style="cursor:pointer;" title="Edit Campaign" @click="alert" />
		<OrangeCard style="cursor:pointer;" title="Delete This Campaign" @click="openDeleteCampaignModal" />
		<Modal @close="confirmDeleteCampaign" :modalDisplay="deleteCampaignModalDisplay"
			message="Are you sure you want to delete this campaign?">Delete</Modal>
	</div>
</template>

<script>
import store from "store-js";
import OrangeCard from "@/components/layout/OrangeCard.vue";
import Modal from "@/components/layout/Modal.vue";

export default {
	name: 'EditCampaign',
	components: { OrangeCard, Modal },
	data: function () {
		return {
			deleteCampaignModalDisplay: "none",
			currentCampaign: {}
		}
	},
	props: {
		campaignName: String
	},
	methods: {
		deleteCampaign: function () {
			let campaigns = store.get('campaigns');
			if (!campaigns) this.$router.push('/error')
			delete campaigns[this.campaignName];
			store.set('campaigns', campaigns);
			let operatives = store.get('ops');
			if (!operatives) this.$router.push('/error')
			delete operatives[this.campaignName]

		},
		openDeleteCampaignModal: function () {
			this.deleteCampaignModalDisplay = "block";
		},
		confirmDeleteCampaign: function (del) {
			if (del === true) {
				this.deleteCampaign();
				this.$router.push("/")
			}
			else {
				this.deleteCampaignModalDisplay = "none";
			}
		},
		alert: function () {
			alert('foo')
		}
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
