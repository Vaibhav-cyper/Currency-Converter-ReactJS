/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'BackgroundImage': "url('src\BackgroundImage.jpg')",
        
      }
    },
  },
  plugins: [],
}