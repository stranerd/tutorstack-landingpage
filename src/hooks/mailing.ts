import { reactive, watch } from 'vue'
import { isEmail } from '@stranerd/validate'

const DATABASE_URL = 'https://stranerd-13084.firebaseio.com/waitlist.json'

export const saveEmail = async (data: Record<string, any>) => {
	const res = await fetch(`${DATABASE_URL}`, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(data)
	})
	if (res.ok) return await res.json()
	else throw (await res.json()).error
}

const fetchEmails = async () => {
	const res = await fetch(`${DATABASE_URL}`, {
		method: 'GET',
		headers: { 'Content-Type': 'application/json' }
	})
	if (res.ok) return await res.json() as Record<string, { email: string, phone: string, school: string, name: string }>
	else throw (await res.json()).error
}

export const useMailing = () => {
	const state = reactive({
		error: '',
		message: '',
		loading: false
	})
	const factory = reactive({
		name: '',
		email: '',
		phone: '',
		school: ''
	})

	watch(() => factory.email, () => {
		if (factory.email) state.error = ''
	})

	const submitEmail = async () => {
		if (state.loading) return
		state.error = ''
		state.message = ''
		const res = isEmail(factory.email)
		if (!res.valid) return state.error = 'Please provide a valid email!'
		try {
			state.loading = true
			await saveEmail({ ...factory })
			factory.name = ''
			factory.phone = ''
			factory.email = ''
			factory.school = ''
			state.message = 'Submitted successfully!'
		} catch (error: any) {
			state.error = error?.message ?? error
		} finally {
			state.loading = false
		}
	}

	return { submitEmail, state, factory }
}

export const useEmailsList = () => {
	const getEmails = async () => {
		try {
			const emails = await fetchEmails()
			const uniques = Object.values(Object.values(emails).reduce((acc, cur) => {
				acc[cur.email] = cur
				return acc
			}, {} as Record<string, { email: string, phone: string, school: string, name: string }>))
			alert(uniques.length + ' unique emails')
		} catch (e: any) {
			alert(e.message ?? e)
		}
	}
	return { getEmails }
}

export const formFocus = () => {
	const emailInput = document.getElementById('name') as HTMLInputElement
	emailInput?.focus()
}