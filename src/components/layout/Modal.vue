<template>
	<div>
		<div class="modal-backdrop" @click="$emit('close', false)" :style="{ display: modalDisplay }"></div>
		<div class="modal fade in" :class="{ show: modalDisplay === 'block' }" :style="{ display: modalDisplay }"
			tabindex="-1" role="dialog">
			<div class="modal-dialog" role="document">
				<div class="modal-content">
					<div class="modal-body">
						{{ message }}
					</div>
					<div class="modal-footer">
						<button type="button" @click="$emit('close', true)" class="btn bg-orange"><slot>Confirm</slot></button>
						<button type="button" @click="$emit('close', false)" class="btn btn-secondary">Cancel</button>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>
<script>

export default {
	name: "ModalVue",
	props: {
		message: String,
		modalDisplay: String
	}
}
</script>
<style scoped>
.modal-dialog .modal-content {
	background-color: #555 !important;
}

.modal-content,
.modal-footer {
	border-color: orangered !important;
}

.btn.bg-orange {
	color: #eee !important
}

.modal-backdrop {
	display: none;
	opacity: .5;
}
</style>