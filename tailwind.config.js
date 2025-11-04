// tailwind.config.js (v4-friendly minimal)
export default {
  important: true, // keep if you want utilities to win
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  // no theme.extend here; tokens live in @theme
}