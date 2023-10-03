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
			},
			boxShadow: {
				up: '0 -4px 8px -1px rgb(0 0 0 / 0.02), 0 -2px 6px -2px rgb(0 0 0 / 0.02)'
			}
		}
	},
	plugins: [require('@tailwindcss/container-queries')]
};
