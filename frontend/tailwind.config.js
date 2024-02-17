/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cascadia-mono": ["Cascadia Mono PL", "monospace"],
      },
    },
  },
  plugins: [],
}
