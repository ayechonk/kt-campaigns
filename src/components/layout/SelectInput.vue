<template>
	<div class="form-floating">
		<select @input="$emit('update:modelValue', $event.target.value)" class="form-control"
			:class="{ 'is-invalid': !isValid }" :placeholder="label">
			<option v-for="opt in options" :key="opt">{{ opt }}</option>
		</select>
		<label v-if="isValid">{{ label }}</label>
		<label v-if="!isValid" class="text-orange">{{ errorLabel }}</label>
	</div>
</template>
<script>
export default {
	name: "SelectInput",
	props: {
		options: Array,
		label: String,
		errorLabel: String,
		isValid: Boolean
	}
}
</script>
<style scoped>
</style>