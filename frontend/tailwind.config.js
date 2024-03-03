/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "cascadia-mono": ["Cascadia Mono PL", "monospace"],
      },
      colors: {
        background: "var(--bg-color)",
        main: "var(--main-color)",
        gradient1: "var(--main-gradient-1)",
        gradient2: "var(--main-gradient-2)",
        gradient3: "var(--main-gradient-3)",
        sub: "var(--sub-color)",
        subAlt: "var(--sub-alt-color)",
        neutral: "var(--neutral-color)",
        neutralAlt: "var(--neutral-alt-color)",
        text: "var(--text-color)",
        error: "var(--error-color)",
      },
    },
  },
  plugins: [],
}
