<template>
	<div class="container mt-1">
		<div class="row">
			<div id="header" class="py-2 d-flex justify-content-between align-items-center">
				<h2 class="m-0">Narrative Dataslates</h2>
				<font-awesome-icon v-bind:class="{ formOpen: formOpen }" icon="fa-solid fa-angle-down" @click="alert" />
			</div>
		</div>
		<form class="row" v-bind:class="{ formOpen: formOpen }">
			<div class="col-sm-4">
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="name" placeholder="Kill Team Name">
					<label>Kill Team Name</label>
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
export default {
	name: 'DataSlates',
	props: {
		msg: String
	},
	data: function () {
		return {
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
			"strategicAssets": "",
			"formOpen": false
		}
	},
	methods: {
		alert: function () {
			this.formOpen = !this.formOpen
		}
	},
	"beforeMount": function () {
		let dataslate = store.get('dataslate');
		if (dataslate) {
			this.name = dataslate.name;
			this.playerName = dataslate.playerName;
			this.faction = dataslate.faction;
			this.selectableKeywords = dataslate.selectableKeywords;
			this.baseOfOperations = dataslate.baseOfOperations;
			this.history = dataslate.history;
			this.quirks = dataslate.quirks;
			this.requisitionPoints = dataslate.requisitionPoints;
			this.assetCapacity = dataslate.assetCapacity;
			this.stash = dataslate.stash;
			this.notes = dataslate.notes;
			this.specOpsLog1 = dataslate.specOpsLog1;
			this.specOpsLog2 = dataslate.specOpsLog2;
			this.specOpsLog3 = dataslate.specOpsLog3;
		}
	},
	"updated": function () {
		let dataslate = {
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
		store.set("dataslate", dataslate);
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
textarea {
	height: 169px !important;
}

h2 {
	text-align: left;
}

svg {
	cursor: pointer;
}

#header,
form {
	background-color: #555;
}

svg {
	transition: all 300ms;
}

svg.formOpen {
	transform: rotate(180deg);
}

form {
	max-height: 0;
	transition: max-height 300ms;
	overflow: hidden;
}

form.formOpen {
	max-height: 2000px;
}
</style>
