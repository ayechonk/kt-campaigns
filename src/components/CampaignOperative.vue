<template>
	<SaveButton @click="saveOperative" />
	<div class="container mt-1">
		<h4 v-if="operative !== ''">
			{{ getRank(experience) }} {{ specialism }} {{ operative }}
		</h4>
		<div class="form-floating mb-3">
			<input type="text" class="form-control " :class="{ 'is-invalid': errors['operative'] }" v-model="operative"
				placeholder="Kill Team Name">
			<label v-if="!errors['operative']">Operative</label>
			<label v-if="errors['operative']" class="text-orange">You must have a unique name!</label>
		</div>
		<div class="form-floating mb-3">
			<input type="text" class="form-control" :class="{ 'is-invalid': errors['operativeType'] }" v-model="operativeType"
				placeholder="Kill Team Name">
			<label v-if="!errors['operativeType']">Operative Type</label>
			<label v-if="errors['operativeType']" class="text-orange">You must have a type!</label>
		</div>
		<div class="form-floating mb-3">
			<input type="text" class="form-control " v-model="battleHonours" placeholder="Kill Team Name">
			<label>Battle Honours</label>
		</div>
		<div class="form-floating mb-3">
			<input type="text" class="form-control " v-model="battleScars" placeholder="Kill Team Name">
			<label>Battle Scars</label>
		</div>
		<div class="form-floating mb-3">
			<textarea type="text" class="form-control " v-model="notes" placeholder="Kill Team Name"></textarea>
			<label>Notes</label>
		</div>
		<div class="form-floating mb-3">
			<input type="number" class="form-control " v-model="restedTally" placeholder="Kill Team Name">
			<label>Rested Tally</label>
		</div>
		<div class="form-floating mb-3">
			<select class="form-control" v-model="specialism">
				<option value="">Select Specialism</option>
				<option>Combat</option>
				<option>Staunch</option>
				<option>Marksmen</option>
				<option>Scout</option>
			</select>
			<label>Specialism</label>
		</div>
		<div class="form-floating mb-3">
			<input type="number" class="form-control " v-model="experience" placeholder="Kill Team Name">
			<label>Experience</label>
		</div>
	</div>
</template>
<script>
import SaveButton from "./layout/SaveButton.vue";
import store from 'store-js';

export default {
	name: "CampaignOperative",
	props: { campaignName: String },
	data: function () {
		return {
			errors: {},
			"operative": "",
			"operativeType": "",
			"battleHonours": "",
			"battleScars": "",
			"notes": "",
			"restedTally": 0,
			"specialism": "",
			"experience": 0
		};
	},
	methods: {
		"getRank": function (exp) {
			if (exp <= 5)
				return "Adpet";
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
				let ops = store.get('ops')
				if (!ops) this.$router.push("/error");
				let curOps = ops[this.campaignName];
				if (!curOps) this.$router.push("/error")
				curOps[this.operative] = {
					operative: this.operative,
					operativeType: this.operativeType,
					battleHonours: this.battleHonours,
					battleScars: this.battleScars,
					notes: this.notes,
					restedTally: this.restedTally,
					specialism: this.specialism,
					experience: this.experience
				}
				ops[this.campaignName] = curOps
				store.set("ops", ops)
			}
		},
		validateOperative: function () {
			let valid = true;
			if (!this.operative) {
				valid = false;
				this.errors['operative'] = true;
			}
			if (!this.operativeType) {
				valid = false;
				this.errors['operativeType'] = true;
			}
			return valid;
		}
	},
	components: { SaveButton }
}
</script>
<style scoped>
</style>