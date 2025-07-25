/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        accent: "var(--accent)",
        accentHover: "var(--accent-hover)",
        navy: "var(--navy)",
        muted: "var(--muted)",
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  darkMode: false, // explicitly disable
  plugins: [],
}
