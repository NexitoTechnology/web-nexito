/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  primary: {
			DEFAULT: '#1a4f8b',
			light: '#2667b4',
			dark: '#143d6e',
			100: '#e6eef7',
			200: '#ccddf0',
			300: '#99bbe1',
			400: '#6699d1',
			500: '#1a4f8b',
			600: '#153f6f',
			700: '#102f52',
			800: '#0a1f36',
			900: '#050f1a'
		  }
		},
		fontFamily: {
		  sans: ['Inter', 'system-ui', 'sans-serif'],
		  heading: ['Montserrat', 'sans-serif']
		},
		fontSize: {
		  'xs': ['0.75rem', { lineHeight: '1rem' }],
		  'sm': ['0.875rem', { lineHeight: '1.25rem' }],
		  'base': ['1rem', { lineHeight: '1.5rem' }],
		  'lg': ['1.125rem', { lineHeight: '1.75rem' }],
		  'xl': ['1.25rem', { lineHeight: '1.75rem' }],
		  '2xl': ['1.5rem', { lineHeight: '2rem' }],
		  '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
		  '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
		  '5xl': ['3rem', { lineHeight: '1' }],
		}
	  }
	},
	plugins: [
	  require('@tailwindcss/typography'),
	],
  }