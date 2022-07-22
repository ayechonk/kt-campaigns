<template>
	<div class="form-floating">
		<input type="text" @input="$emit('update:modelValue', $event.target.value)" class="form-control"
			:class="{ 'is-invalid': !isValid }" :placeholder="label" />
		<label v-if="isValid">{{ label }}</label>
		<label v-if="!isValid" class="text-orange">{{ errorLabel }}</label>
	</div>
</template>
<script>

export default {
	name: "TextboxInput",
	props: {
		label: String,
		errorLabel: String,
		isValid: { type: Boolean, default: true }
	}
}
</script>
<style scoped>
</style>