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
	  },
	},
	plugins: [],
  };