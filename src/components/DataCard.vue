<template>
	<div class="container mt-1">
		<div class="row">
			<div id="header" class="py-2 d-flex justify-content-between align-items-center">
				<h2 class="m-0">DataCards</h2>
				<font-awesome-icon @click="addCard" icon="fa-solid fa-plus" />
				<font-awesome-icon v-bind:class="{ formOpen: formOpen }" icon="fa-solid fa-angle-down" @click="toggleForm" />
			</div>
		</div>
		<form class="row" v-bind:class="{ formOpen: formOpen }">
			<div v-for="(card, index) in cards" :key="index">
				<h5 v-if="card.operative !== ''">
					{{ getRank(card.experience) }} {{ card.specialism }} {{ card.operative }}
				</h5>

				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="card.operative" placeholder="Kill Team Name">
					<label>Operative</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="card.operativeType" placeholder="Kill Team Name">
					<label>Operative Type</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="card.battleHonours" placeholder="Kill Team Name">
					<label>Battle Honours</label>
				</div>
				<div class="form-floating mb-3">
					<input type="text" class="form-control " v-model="card.BattleScars" placeholder="Kill Team Name">
					<label>Battle Scars</label>
				</div>
				<div class="form-floating mb-3">
					<textarea type="text" class="form-control " v-model="card.Notes" placeholder="Kill Team Name"></textarea>
					<label>Notes</label>
				</div>
				<div class="form-floating mb-3">
					<input type="number" class="form-control " v-model="card.restedTally" placeholder="Kill Team Name">
					<label>Rested Tally</label>
				</div>
				<div class="form-floating mb-3">
					<select class="form-control" v-model="card.specialism">
						<option>Combat</option>
						<option>Staunch</option>
						<option>Marksmen</option>
						<option>Scout</option>
					</select>
					<label>Specialism</label>
				</div>
				<div class="form-floating mb-3">
					<input type="number" class="form-control " v-model="card.experience" placeholder="Kill Team Name">
					<label>Experience</label>
				</div>
			</div>
		</form>
	</div>
</template>

<script>
import store from "store-js";

export default {
	"name": 'DataCard',
	"data": function () {
		return {
			"formOpen": false,
			"cards": []
		}
	},
	"methods": {
		"toggleForm": function () {
			this.formOpen = !this.formOpen
		},
		"addCard": function () {
			this.cards.push({
				"operative": "",
				"operativeType": "",
				"battleHonours": "",
				"battleScars": "",
				"notes": "",
				"restedTally": 0,
				"specialism": "",
				"experience": 0
			});
		},
		"getRank": function (exp) {
			if (exp <= 5) return "Adept";
			else if (exp <= 15) return "Veteran";
			else if (exp <= 30) return "Ace";
			else if (exp <= 50) return "Grizzled";
			else return "Revered";
		},
	},
	"beforeMount": function () {
		let datacards = store.get('datacards');
		if (datacards && Array.isArray(datacards)) {
			let _vue = this;
			datacards.forEach(function (c) {
				_vue.cards.push(c);
			});
		}
	},
	"updated": function () {
		let datacards = [];
		this.cards.forEach(function (c) {
			datacards.push(c)
		});
		store.set("datacards", datacards);
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

#header {
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
	background-color: #555;
}

form.formOpen {
	max-height: 2000px;
}

form>div {
	padding-top: 1rem;
}

form>div:nth-child(even) {
	background-color: #444;
}
</style>
