<template>
	<div class="d-flex justify-content-between align-items-center">
		<span>{{ this.ktrequisition.name }}</span>
		<div v-if="this.purchasedRequisition.isNew" class="bg-danger p-3" style="cursor:pointer"
			@click="deleteNewRequisition">
			<font-awesome-icon icon="fa-solid fa-minus" />
		</div>
	</div>
</template>
<script>
export default {
	name: "PurchasedRequisitionCard",
	props: {
		purchasedRequisition: Object,
		ktrequisition: Object
	},
	methods: {
		deleteNewRequisition: function () {
			if (this.purchasedRequisition.isNew) {
				this.$emit('delReq', this.purchasedRequisition)
			}
		}
	}

}
</script>
<style scoped>
</style>