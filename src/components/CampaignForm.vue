<template>
	<div class="container mt-1 ">
		<h2>New Campaign</h2>
		<SaveButton @click="saveCampaign" />
		<form class="row">
			<div class="col-sm-4">
				<div class="mb-3">
					<TextboxInput v-model="name" label="Kill Team Name" errorLabel="You must have a unique name!"
						:isValid="!errors['name']" />
				</div>
				<div class="mb-3">
					<SelectInput v-model="faction" :options="getKillTeamOptionsArray" label="Faction"
						errorLabel="You must select a faction!" :isValid="!errors['faction']" />
				</div>
				<div class="mb-3">
					<TextboxInput v-model="baseOfOperations" label="Base of Operations" />
				</div>
				<div class="mb-3">
					<TextboxInput v-model="history" label="History" />
				</div>
				<div class="mb-3">
					<TextboxInput v-model="quirks" label="Quirks" />
				</div>
			</div>
			<div class="col-sm-4">
				<div class="mb-3">
					<TextboxInput inputType="number" v-model="requisitionPoints" label="Requisition Points" />
				</div>
				<div class="mb-3">
					<TextboxInput inputType="number" v-model="assetCapacity" label="Asset Capacity" />
				</div>
				<div class="form-floating mb-3">
					<textarea class="form-control " v-model="strategicAssets" placeholder="Kill Team Name"> </textarea>
					<label>Strategic Assets</label>
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
				<div class="mb-3">
					<SelectInput v-model="specOps1" :options="getSpecOpsArrayOptions" label="Spec Ops 1"
						errorLabel="You must pick at least one spec op!" :isValid="!errors['specOps1']" />
				</div>
				<div class="mb-3">
					<SelectInput v-model="specOps2" :options="getSpecOpsArrayOptions" label="Spec Ops 2"
						errorLabel="You must pick at least one spec op!" :isValid="!errors['specOps2']" />
				</div>
				<div class="mb-3">
					<SelectInput v-model="specOps3" :options="getSpecOpsArrayOptions" label="Spec Ops 3"
						errorLabel="You must pick at least one spec op!" :isValid="!errors['specOps3']" />
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import SaveButton from "./layout/SaveButton.vue";
import SelectInput from "./layout/SelectInput.vue";
import TextboxInput from "./layout/TextboxInput.vue";

import store from "store-js"
import specOps from "@/assets/ktdata/specops.json"
import killTeams from "@/assets/ktdata/killteams.json"


export default {
	"name": "NewCampaign",
	"data": function () {
		return {
			"errors": {},
			"name": "",
			"faction": "0",
			"baseOfOperations": "",
			"history": "",
			"quirks": "",
			"requisitionPoints": 4,
			"assetCapacity": 2,
			"stash": "",
			"notes": "",
			"specOps1": "",
			"specOps2": "",
			"specOps3": "",
			"strategicAssets": ""
		};
	},
	methods: {
		validateCampaign: function () {
			this.errors.name = !this.name || this.name === ""
			this.errors.faction = !this.faction || this.faction === ""
			this.errors.specOps1 = !this.specOps1 || this.specOps1 === ""
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
							"faction": this.faction,
							"baseOfOperations": this.baseOfOperations,
							"history": this.history,
							"quirks": this.quirks,
							"requisitionPoints": this.requisitionPoints,
							"assetCapacity": this.assetCapacity,
							"stash": this.stash,
							"notes": this.notes,
							"specOps1": this.specOps1,
							"specOps2": this.specOps2,
							"specOps3": this.specOps3
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
	mounted: function () {
		this.requisitionPoints = 4;
		this.assetCapacity = 2;
	},
	updated: function () {
		this.validateCampaign();
	},
	computed: {
		getKillTeamOptionsArray: function () {
			return Object.entries(killTeams)
				.map(arr => { return [arr[0], arr[1].name] })
				.sort((a, b) => (a[1] > b[1] ? 1 : -2))
		},
		getSpecOpsArrayOptions: function () {
			return Object.entries(specOps)
				.map(arr => { return [arr[0], arr[1].name] })
				.sort((a, b) => (a[1] > b[1] ? 1 : -2));
		}
	},
	components: { SaveButton, SelectInput, TextboxInput }
}
</script>

<style scoped>
</style>
