<template>
	<div class="bg p-4 md:py-40 py-20 w-full">
		<div class="container flex flex-col mx-auto items-center justify-center">
			<div class="text-dark max-w-3xl text-center">
				<h1 class="md:text-[64px] text-4xl font-bold md:leading-[75px]">
					<span class="text-secondary">Affordable</span> learning <br />
					with expert tutors.
				</h1>

				<p class="md:text-2xl text-base text-gray mt-4">
					Share a tutor, split tutoring costs and save up to 40% with your
					friends and other students
				</p>
			</div>

			<form class="flex flex-col w-full max-w-3xl px-8 mt-12" @submit.prevent="submitEmail">
				<label class="label" for="name" @click="formFocus">Join the waitlist now!</label>
				<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
					<span class="field">
						<input
							id="name"
							v-model="factory.name"
							class="input"
							placeholder="Enter your full name"
							required
							type="text"
						/>
					</span>
					<span class="field">
						<input
							id="phone"
							v-model="factory.phone"
							class="input"
							pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
							placeholder="Enter your phone number"
							required
							type="tel"
						/>
					</span>
					<span class="field">
						<input
							id="email"
							v-model="factory.email"
							class="input"
							placeholder="Enter your email"
							required
							type="email"
						/>
					</span>
					<span class="field">
						<select v-model="factory.school"
								class="input"
								required>
							<option disabled selected value="">
								Are you in high school or college?
							</option>
							<option value="High School">High School</option>
							<option value="College">College</option>
						</select>
					</span>
				</div>
				<button class="btn self-center mt-6 h-12" style="width: min(318px, 100%)" type="submit">
					Request access
				</button>
				<div v-if="state.error" class="text-center w-full mt-6 text-red-500">{{ state.error }}</div>
				<div v-if="state.message" class="text-center w-full mt-6 text-green-500">{{ state.message }}</div>
			</form>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { formFocus, useMailing } from '../hooks/mailing'

const { state, factory, submitEmail } = useMailing()
</script>

<style scoped>
/* .bg {
	background: rgba(0, 0, 0, 0.75) url('../assets/images/bg.png');
	background-blend-mode: darken;
	background-size: cover;
	background-repeat: no-repeat;
} */

select {
    appearance: none;
    /* background: url('../assets/images/logo.svg') white; */
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: 97% 50%;
    z-index: 100;
}
</style>
