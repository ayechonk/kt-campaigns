<template>
	<div class="form-floating">
		<input :type="inputType" @input="$emit('update:modelValue', $event.target.value)" class="form-control"
			:class="{ 'is-invalid': !isValid }" :placeholder="label" />
		<label v-if="isValid">{{ label }}</label>
		<label v-if="!isValid" class="text-orange">{{ errorLabel }}</label>
	</div>
</template>
<script>

export default {
	name: "TextboxInput",
	props: {
		label: { type: String, deafult: "" },
		errorLabel: { type: String, deafult: "" },
		inputType: { type: String, default: "text" },
		isValid: { type: Boolean, default: true }
	}
}
</script>
<style scoped>
</style>