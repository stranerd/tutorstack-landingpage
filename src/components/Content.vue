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

			<form class="flex flex-col w-full max-w-3xl px-8 mt-12">
				<span for="email" class="label">Join the waitlist now!</span>
				<div class="md:flex gap-4">
					<span class="field">
						<input
							type="email"
							class="input"
							required
							placeholder="Enter your mail"
						/>
					</span>
					<span class="field">
						<select
							class="input"
							required
							placeholder="Are you in highschool/college?"
						>
							<option value="" disabled selected>
								Are you in highschool/college?
							</option>
							<option value="High School">High School</option>
							<option value="College">College</option>
						</select>
					</span>
				</div>
				<button class="btn self-center mt-6 min-w-[318px] h-12">
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

select {
	appearance: none;
	/* background: url('../assets/images/logo.svg') white; */
	background-repeat: no-repeat;
	background-attachment: relative;
	background-position: 97% 50%;
	z-index: 100;
}
</style>
