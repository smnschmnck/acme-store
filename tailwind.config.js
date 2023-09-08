/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter']
			},
			screens: {
				'2xl': '1340px'
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
