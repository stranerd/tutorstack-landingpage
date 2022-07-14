import { reactive, toRefs, watch } from 'vue'
import { isEmail } from '@stranerd/validate'

const DATABASE_URL = 'https://stranerd-13084.firebaseio.com/waitlist.json'

const saveEmail = async (email: string, school: string) => {
	const res = await fetch(`${DATABASE_URL}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ email, school })
	})
	if (res.ok) return res.json()
	else throw (await res.json()).error
}

const getEmails = async () => {
	const res = await fetch(`${DATABASE_URL}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
	if (res.ok) return res.json()
	else throw (await res.json()).error
}

export const useMailing = () => {
	const state = reactive({
		error: '',
		message: '',
		loading: false,
		email: '',
		school: ''
	})

	watch(() => state.email, () => {
		if (state.email) state.error = ''
	})

	const submitEmail = async () => {
		if (state.loading) return
		state.error = ''
		state.message = ''
		const res = isEmail(state.email)
		if (!res.valid) return state.error = 'Please provide a valid email!'
		try {
			state.loading = true
			await saveEmail(state.email, state.school)
			state.email = ''
			state.school = ''
			state.message = 'Submitted successfully!'
		} catch (error: any) {
			state.error = error?.message ?? error
		} finally {
			state.loading = false
		}
	}

	return { submitEmail, ...toRefs(state) }
}
