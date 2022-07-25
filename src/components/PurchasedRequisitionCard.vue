<template>
	<h1>hello world</h1>
</template>
<script>
export default {
	name: "PurchasedRequisitionCard",
	prop: {
		purchasedRequisition: Object,
		ktrequisition: Object
	},
	getRequisitionDetails() {
		return this.ktrequisition[this.purchasedRequisition.id]
	}

}
</script>
<style scoped>
</style>