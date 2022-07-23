<template>
	<div class="container mt-1">
		<SaveButton @click="saveOperative" />
		<h4 v-if="operative.name !== ''">
			{{ getRank  }} {{ getSpeicalismName }} {{ operative.name }}
		</h4>
		<div class="mb-3">
			<TextboxInput v-model="operative.name" label="Operative Name" errorLabel="You must have a unique name!"
				:isValid="!errors['name']"/>
		</div>
		<div class="mb-3">
			<SelectInput v-model="operative.type" :options="getOperativesForKillTeam" label="Operative Type"
				errorLabel="You must select a faction!" :isValid="!errors['type']" />
		</div>
		<div class="form-floating mb-3">
			<input type="text" class="form-control " v-model="operative.battleHonours" placeholder="Kill Team Name">
			<label>Battle Honours</label>
		</div>
		<div class="form-floating mb-3">
			<input type="text" class="form-control " v-model="operative.battleScars" placeholder="Kill Team Name">
			<label>Battle Scars</label>
		</div>
		<div class="form-floating mb-3">
			<textarea type="text" class="form-control " v-model="operative.notes" placeholder="Kill Team Name"></textarea>
			<label>Notes</label>
		</div>
		<div class="mb-3">
			<TextboxInput inputType="number" v-model="operative.restedTally" label="Rested Tally" errorLabel="You must have a unique name!"
				:isValid="!errors['restedTally']"/>
		</div>
		<div class="mb-3">
			<SelectInput v-model="operative.specialism" :options="getSpecialismsOptions" label="Specialism"
				errorLabel="You must pick a specialism!" :isValid="!errors['specialism']" />
		</div>
		<div class="form-floating mb-3">
			<input type="number" class="form-control " v-model="operative.experience" placeholder="Kill Team Name">
			<label>Experience</label>
		</div>
	</div>
</template>
<script>
import SaveButton from "./layout/SaveButton.vue";
import TextboxInput from "./layout/TextboxInput.vue";
import SelectInput from "./layout/SelectInput.vue";

import ktoperatives from "@/assets/ktdata/operatives.json"

export default {
	name: "OperativeForm",
	props: {
		currentOperative: Object,
		factionId: String,
		specialisms: Object
	},
	data: function () {
		return {
			errors: {},
			operative: {
				"name": "",
				"type": "",
				"battleHonours": "",
				"battleScars": "",
				"notes": "",
				"restedTally": 0,
				"specialism": "0",
				"experience": 0
			}
		};
	},
	methods: {
		
		saveOperative: function () {
			if (this.validateOperative()) {
				this.$emit("save", this.operative);
			}
		},
		validateOperative: function () {
			let valid = true;
			if (!this.operative.name) {
				valid = false;
				this.errors["operative"] = true;
			}
			if (!this.operative.type) {
				valid = false;
				this.errors["type"] = true;
			}
			return valid;
		},
	},
	computed: {
		getOperativesForKillTeam: function () {
			return Object.entries(ktoperatives)
				.filter(arr => this.factionId === arr[1].factionId)
				.map(arr => { return [arr[0], arr[1].name] })
				.sort((a, b) => (a[1] > b[1] ? 1 : -2))
		},
		getSpecialismsOptions: function () {
			return Object.entries(this.specialisms)
				.map(arr => { return [arr[0], arr[1].name] })
		},
		getSpeicalismName: function(){
			return Object.entries(this.specialisms)
				.find(arr => arr[0] === this.operative.specialism )[1].name
		},
		getRank: function () {
			let exp = this.operative.experience
			if (exp <= 5)
				return "Adept";
			else if (exp <= 15)
				return "Veteran";
			else if (exp <= 30)
				return "Ace";
			else if (exp <= 50)
				return "Grizzled";
			else
				return "Revered";
		},
	},
	components: { SaveButton, TextboxInput, SelectInput },

	beforeMount: function () {
		if (this.currentOperative) {
			this.operative.name = this.currentOperative.name,
				this.operative.type = this.currentOperative.type,
				this.operative.battleHonours = this.currentOperative.battleHonours,
				this.operative.battleScars = this.currentOperative.battleScars,
				this.operative.notes = this.currentOperative.notes,
				this.operative.restedTally = this.currentOperative.restedTally,
				this.operative.specialism = this.currentOperative.specialism,
				this.operative.experience = this.currentOperative.experience
		}
	},
}
</script>
<style scoped>
</style>