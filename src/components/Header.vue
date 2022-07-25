<template>
	<div class="bg-white p-4 w-full">
		<div class="container flex mx-auto items-center justify-between">
			<img src="../assets/images/logo.svg" alt="logo" />

			<div class="flex items-center justify-between gap-4">
				<button class="btn" @click="formFocus">Join us</button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import {ref} from '@vue/reactivity'

const formFocus = ()=>{
const emailInput = document.getElementById('email') as HTMLInputElement
emailInput.focus()
}
</script>

<style scoped></style>
