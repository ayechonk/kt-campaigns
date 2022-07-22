<template>
	<div class="container mt-1 ">
		<h2>New Campaign</h2>
		<SaveButton @click="saveCampaign" />
		<form class="row">
			<div class="col-sm-4">
				<div class="form-floating mb-3">
					<TextboxInput v-model="name" label="Kill Team Name" errorLabel="You must have a unique name!"
						:isValid="!errors['name']" />
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="playerName" placeholder="playerName" />
					<label>Player Name</label>
				</div>
				<div class="form-floating mb-3">
					<SelectInput v-model="faction" :options="killTeams" label="Faction" errorLabel="You must select a faction!"
						:isValid="!errors['faction']" />
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
import SelectInput from "./layout/SelectInput.vue";
import killTeams from "@/assets/ktdata/killteams.json"
import TextboxInput from "./layout/TextboxInput.vue";

export default {
	"name": "NewDataslate",
	"data": function () {
		return {
			"killTeams": [],
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
		validateCampaign: function () {
			this.errors.name = !this.name || this.name === ""
			this.errors.faction = !this.faction || this.faction === ""
			return Object.keys(this.errors).find(b => b);
		},
		saveCampaign: function () {
			if (this.validateCampaign()) {
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
						if (!campaigns) campaigns = {};
						campaigns[this.name] = newCampaign;
						store.set("campaigns", campaigns);
						this.$router.push("/campaign/" + this.name)
					}
				}
			}
		}
	},
	beforeMount: function () {
		this.killTeams = killTeams
		this.faction = killTeams[0]
	},
	updated: function () {
		this.validateCampaign();
	},
	components: { SaveButton, SelectInput, TextboxInput }
}
</script>

<style scoped>
</style>
