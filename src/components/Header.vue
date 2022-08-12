<template>
	<div class="bg-white p-4 w-full">
		<div class="container flex mx-auto items-center justify-between">
			<img alt="logo" src="../assets/images/logo.svg" @click="getEmails" />

			<div class="flex items-center justify-between gap-4">
				<button class="btn" @click="formFocus">Join us</button>
			</div>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { formFocus, useEmailsList } from '../hooks/mailing'

const { getEmails } = useEmailsList()
</script>

<style scoped></style>
