<template>
	<div class="container mt-1">
		<SaveButton @click="saveOperative" />
		<h4 v-if="operative.name !== ''">
			{{ getRank(operative.experience) }} {{ operative.specialism }} {{ operative.name }}
		</h4>
		<div class="form-floating mb-3">
			<input type="text" class="form-control " :class="{ 'is-invalid': errors['operative'] }"
				v-model="operative.name" placeholder="Kill Team Name">
			<label v-if="!errors['operative']">Operative</label>
			<label v-if="errors['operative']" class="text-orange">You must have a unique name!</label>
		</div>
		<div class="form-floating mb-3">
			<input type="text" class="form-control" :class="{ 'is-invalid': errors['operativeType'] }"
				v-model="operative.operativeType" placeholder="Kill Team Name">
			<label v-if="!errors['operativeType']">Operative Type</label>
			<label v-if="errors['operativeType']" class="text-orange">You must have a type!</label>
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
		<div class="form-floating mb-3">
			<input type="number" class="form-control " v-model="operative.restedTally" placeholder="Kill Team Name">
			<label>Rested Tally</label>
		</div>
		<div class="form-floating mb-3">
			<select class="form-control" v-model="operative.specialism">
				<option value="">Select Specialism</option>
				<option>Combat</option>
				<option>Staunch</option>
				<option>Marksmen</option>
				<option>Scout</option>
			</select>
			<label>Specialism</label>
		</div>
		<div class="form-floating mb-3">
			<input type="number" class="form-control " v-model="operative.experience" placeholder="Kill Team Name">
			<label>Experience</label>
		</div>
	</div>
</template>
<script>
import SaveButton from "./layout/SaveButton.vue";

export default {
	name: "OperativeForm",
	props: {
		currentOperative: Object
	},
	data: function () {
		return {
			errors: {},
			operative: {
				"name": "",
				"operativeType": "",
				"battleHonours": "",
				"battleScars": "",
				"notes": "",
				"restedTally": 0,
				"specialism": "",
				"experience": 0
			}
		};
	},
	methods: {
		"getRank": function (exp) {
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
			if (!this.operative.operativeType) {
				valid = false;
				this.errors["operativeType"] = true;
			}
			return valid;
		},
	},
	components: { SaveButton },

	beforeMount: function () {
		if (this.currentOperative) {
			this.operative.name = this.currentOperative.name,
				this.operative.operativeType = this.currentOperative.operativeType,
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