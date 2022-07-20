<template>
	<div class="container mt-1 ">
		<h2>{{ campaignName }}</h2>
	</div>
</template>

<script>
import store from "store-js";

export default {
	name: 'NewDataslate',
	props: {
		campaignName: String
	},
	data: function () {
		return {
			"errors": {},
			"name": "",
			"playerName": "",
			"faction": "",
			"selectableKeywords": "",
			"baseOfOperations": "",
			"history": "",
			"quirks": "",
			"requisitionPoints": 0,
			"assetCapacity": 0,
			"stash": "",
			"notes": "",
			"specOpsLog1": "",
			"specOpsLog2": "",
			"specOpsLog3": "",
			"strategicAssets": ""
		}
	},
	methods: {
		saveCampaign: function () {
			this.errors['name'] = !this.name;
			if (this.name) {
				let campaigns = store.get("campaigns");
				if (campaigns[this.name]) this.errors['name'] = true;
				else {
					let newCampaign = {
						"name": this.name,
						"playerName": this.playerName,
						"faction": this.faction,
						"selectableKeywords": this.selectableKeywords,
						"baseOfOperations": this.baseOfOperations,
						"history": this.history,
						"quirks": this.quirks,
						"requisitionPoints": this.requisitionPoints,
						"assetCapacity": this.assetCapacity,
						"stash": this.stash,
						"notes": this.notes,
						"specOpsLog1": this.specOpsLog1,
						"specOpsLog2": this.specOpsLog2,
						"specOpsLog3": this.specOpsLog3
					}
					if (!campaigns) campaigns = {};
					campaigns[this.name] = newCampaign;
					store.set("campaigns", campaigns);
				}
			}
		}
	}
	// "beforeMount": function () {
	// 	let dataslate = store.get('dataslate');
	// 	if (dataslate) {
	// 		this.name = dataslate.name;
	// 		this.playerName = dataslate.playerName;
	// 		this.faction = dataslate.faction;
	// 		this.selectableKeywords = dataslate.selectableKeywords;
	// 		this.baseOfOperations = dataslate.baseOfOperations;
	// 		this.history = dataslate.history;
	// 		this.quirks = dataslate.quirks;
	// 		this.requisitionPoints = dataslate.requisitionPoints;
	// 		this.assetCapacity = dataslate.assetCapacity;
	// 		this.stash = dataslate.stash;
	// 		this.notes = dataslate.notes;
	// 		this.specOpsLog1 = dataslate.specOpsLog1;
	// 		this.specOpsLog2 = dataslate.specOpsLog2;
	// 		this.specOpsLog3 = dataslate.specOpsLog3;
	// 	}
	// },
	// "updated": function () {
	// 	let dataslate = {
	// 		"name": this.name,
	// 		"playerName": this.playerName,
	// 		"faction": this.faction,
	// 		"selectableKeywords": this.selectableKeywords,
	// 		"baseOfOperations": this.baseOfOperations,
	// 		"history": this.history,
	// 		"quirks": this.quirks,
	// 		"requisitionPoints": this.requisitionPoints,
	// 		"assetCapacity": this.assetCapacity,
	// 		"stash": this.stash,
	// 		"notes": this.notes,
	// 		"specOpsLog1": this.specOpsLog1,
	// 		"specOpsLog2": this.specOpsLog2,
	// 		"specOpsLog3": this.specOpsLog3
	// 	};
	// 	store.set("dataslate", dataslate);
	// }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.orange {
	color: #c54c21 !important;
}

.btn-orange {
	position: fixed;
	font-size: 2.5rem;
	background-color: #c54c21;
	padding: 20px;
	border-radius: 40px;
	bottom: 20px;
	right: 20px;
	z-index: 100;
	cursor: pointer;
	height: 40px;
	width: 40px;
}
</style>
