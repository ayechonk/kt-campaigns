<template>
	<div class="form-floating">
		<select @input="$emit('update:modelValue', $event.target.value)" class="form-select"
			:class="{ 'is-invalid': !isValid }" :placeholder="label" :value="modelValue">
			<option v-for="opt in options" :key="opt[0]" :value="opt[0]" >{{ opt[1] }}</option>
		</select>
		<label v-if="typeof(isValid) === 'undefined' || isValid" >{{ label }}</label>
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
		isValid: Boolean,
		modelValue: { type: String }
	}
}
</script>
<style scoped>
</style>