<template>
	<div class="container mt-1 ">
		<h2>New Campaign</h2>
		<SaveButton @click="saveCampaign" />
		<form class="row">
			<div class="col-sm-4">
				<div class="form-floating mb-3">
					<input type="text" class="form-control" :class="{ 'is-invalid': errors['name'] }" v-model="name"
						placeholder="Kill Team Name">
					<label v-if="!errors['name']">Kill Team Name</label>
					<label v-if="errors['name']" class="text-orange">You must have a unique name!</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="playerName" placeholder="playerName" />
					<label>Player Name</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="faction" placeholder="faction" />
					<label>Faction</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="selectableKeywords" placeholder="selectableKeywords" />
					<label>Selectable Keywords</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="baseOfOperations" placeholder="baseOfOperations" />
					<label>Base of Operations</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="history" placeholder="history" />
					<label>History</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="quirks" placeholder="quirks" />
					<label>Quirks</label>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="form-floating mb-3">
					<input type="number" class="form-control " v-model="requisitionPoints" placeholder="Kill Team Name">
					<label>Requisition Points</label>
				</div>
				<div class="form-floating mb-3">
					<input type="number" class="form-control " v-model="assetCapacity" placeholder="Kill Team Name">
					<label>Asset Capacity</label>
				</div>
				<div class="form-floating mb-3">
					<textarea class="form-control " v-model="stash" placeholder="Stash"></textarea>
					<label>Stash</label>
				</div>
				<div class="form-floating mb-3">
					<textarea class="form-control " v-model="notes" placeholder="Notes"></textarea>
					<label>Notes</label>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="form-floating mb-3">
					<textarea class="form-control " v-model="specOpsLog1" placeholder="Kill Team Name"> </textarea>
					<label>Spec Ops Log</label>
				</div>
				<div class="form-floating mb-3">
					<textarea class="form-control " v-model="strategicAssets" placeholder="Kill Team Name"> </textarea>
					<label>Strategic Assets</label>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import store from "store-js";
import SaveButton from "./layout/SaveButton.vue";

export default {
	"name": "NewDataslate",
	"data": function () {
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
		};
	},
	methods: {
		saveCampaign: function () {
			this.errors["name"] = !this.name;
			if (this.name) {
				let campaigns = store.get("campaigns");
				if (campaigns[this.name])
					this.errors["name"] = true;
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
					};
					if (!campaigns)
						campaigns = {};
					campaigns[this.name] = newCampaign;
					store.set("campaigns", campaigns);
					this.$router.push("/campaign/"+this.name)
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
	,
	components: { SaveButton }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
