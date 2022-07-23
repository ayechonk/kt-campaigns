<template>
	<router-link :to="{ name: 'operativeSingle', params: { campaignName, operativeName: op.name } }">
		<div class="bg-orange mb-3" style="padding:2px">
			<div class="text-start corner p-0">
				<div class="d-flex align-items-center">
					<div class="mx-3">
						<img style="display:inline-block; width: 3.5rem; filter: invert(1);"
							v-bind:src="require('@/assets/images/rank/' + getRank(op.experience).toLowerCase() + '.png')" />
						<img v-if="op.specialism" style="display:inline-block; filter: invert(1)"
							v-bind:src="getSpecialismImgUrl()" />
					</div>
					<div>
						<div>{{ op.name }}</div>
						<div>{{ getOperativeType() }}</div>
					</div>
					<div style="flex-grow:1;" class="text-end">
						<img v-bind:src="getOperativeImgUrl(op)" alt="" style="width:4.5rem;">
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
		campaignName: String,
		op: Object,
		ktoperatives: Object
	},
	methods: {
		getOperativeName: function (op) {
			return this.getRank(op.experience) + " " + op.specialism + " " + op.operative + " - " + op.operativeType
		},
		getSpecialismImgUrl: function () {
			try {
				return require('@/assets/images/specialism/' + this.op.specialism + '.png')
			}
			catch {
				return ""
			}
		},
		getOperativeImgUrl: function (op) {
			try {
				return require('@/assets/images/operatives/' + op.type + '.png')
			}
			catch {
				return "";
			}
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
		},
		getOperativeType: function () {
			return Object.entries(this.ktoperatives).find(arr => arr[0] === this.op.type)[1].name
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