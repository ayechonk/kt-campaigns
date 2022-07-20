<template>
	<router-link to="/">
		<div class="bg-orange mb-3" style="padding:2px">
			<div class="text-start corner p-0">
				<div class="d-flex align-items-center">
					<div class="me-3">
						<img style="display:inline-block; width: 3.5rem; filter: invert(1);"
							v-bind:src="require('@/assets/imgs/rank/' + getRank(op.experience).toLowerCase() + '.png')" />
						<img v-if="op.specialism" style="display:inline-block; filter: invert(1)"
							v-bind:src="require('@/assets/imgs/specialism/' + op.specialism.toLowerCase() + '.png')" />
					</div>
					<div>
						<div>{{ op.operative }}</div>
						<div> {{ op.operativeType }}</div>
					</div>
					<div style="flex-grow:1;" class="text-end">
						<img v-bind:src="require('@/assets/imgs/operatives/' + op.operativeType.toLowerCase() + '.png')" alt="" style="width:4.5rem;">
					</div>
				</div>
			</div>
		</div>
	</router-link>
</template>
<script>
export default {
	name: "OperativeCard",
	props: {
		op: Object
	},
	methods: {
		getOperativeName: function (op) {
			return this.getRank(op.experience) + " " + op.specialism + " " + op.operative + " - " + op.operativeType
		},
		getRank: function (exp) {
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
		}
	}
}
</script>
<style>
* {
	color: #eee;
}


.bg-orange {
	background-color: #c54c21;
}

.corner {
	padding: 14px;
	background: linear-gradient(225deg, transparent 13px, #191b1c 0);
}

</style>