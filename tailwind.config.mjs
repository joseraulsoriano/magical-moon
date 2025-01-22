/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
	  extend: {
		colors: {
		  customBlue: '#1E3A8A', // Azul único
		  customPink: '#F472B6', // Rosa único
		  customGray: '#1E293B', // Gris oscuro
		  customYellow: '#FACC15', // Amarillo vibrante
		},
		boxShadow: {
		  'custom-light': '0 4px 6px rgba(0, 0, 0, 0.1)',
		  'custom-dark': '0 10px 20px rgba(0, 0, 0, 0.25)',
		},
		fontFamily: {
		  custom: ['"Roboto"', 'sans-serif'],
		},
		spacing: {
		  '128': '32rem',
		},
	  },
	},
	plugins: [],
  };