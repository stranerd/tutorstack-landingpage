<template>
	<div class="bg p-4 py-40 w-full">
		<div class="container flex flex-col mx-auto items-center justify-center">
			<div class="text-dark max-w-3xl text-center">
				<h1 class="text-[64px] font-bold leading-[75px]">
					<span class="text-secondary">Affordable</span> learning <br />
					with expert tutors.
				</h1>

				<p class="text-2xl text-gray mt-4">
					Share a tutor, split tutoring costs and save up to 50% with your
					friends and other students
				</p>
			</div>

			<form class="flex flex-col w-full max-w-3xl px-8 mt-12">
				<span for="email" class="label">Join the waitlist now!</span>
				<div class="flex gap-4">
					<span class="field">
						<input
							type="email"
							class="input"
							required
							placeholder="Enter your mail"
						/>
					</span>
					<span class="field">
						<input
							type="email"
							class="input"
							required
							placeholder="Are you in highschool/college?"
						/>
					</span>
				</div>
				<button class="btn self-center mt-6 min-w-[300px] text-sm">
					Request access
				</button>
			</form>
		</div>
	</div>
</template>

<script setup lang="ts"></script>

<style scoped>
/* .bg {
	background: rgba(0, 0, 0, 0.75) url('../assets/images/bg.png');
	background-blend-mode: darken;
	background-size: cover;
	background-repeat: no-repeat;
} */
</style>
