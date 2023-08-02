/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./components/**/*.{js,ts,jsx,tsx,mdx}',
		'./app/**/*.{js,ts,jsx,tsx,mdx}'
	],
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
			}
		},
		colors: {
			transparent: 'transparent',
			current: 'currentColor',
			black: '#111111',
			primary: '#1c1c1e',
			gray: '#d3d3d3',
			blue: '#417ed4',
			green: '#0b9a55',
			secondary: '#ff9902',
			red: '#bd0000',
			primaryPlus: '#212121'
		},
		fontFamily: {
			inter: ['Inter', 'sans-serif'],
			mono: ['JetBrains Mono', 'monospace']
		}
	},
	plugins: []
}
