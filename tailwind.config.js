/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark_mode_elements: 'hsl(209, 23%, 22%)',
        dark_mode_background: 'hsl(207, 26%, 17%)',
        light_mode_text: 'hsl(200, 15%, 8%)',
        light_mode_input: 'hsl(0, 0%, 52%)',
        light_mode_background: 'hsl(0, 0%, 98%)',
        dark_mode_text_and_light_mode_elements: 'hsl(0, 0%, 100%)'
      },
    },
  },
  plugins: [],
}
