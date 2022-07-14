/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#FCC602',
				secondary: '#663399',
				dark: '#05090D',
				gray: '#494C58',
			},
		},
	},
	plugins: [],
};
