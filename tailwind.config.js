/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        nunito: "'Nunito', sans-serif",
        metal : "'Metal Mania', system-ui",
        fira  : "'Fira Code', monospace"
      }
    },
  },
  plugins: [],
}

