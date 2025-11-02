export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Exo', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display: ['4.5rem', { lineHeight: '1.1', fontWeight: '700' }],   // 72px
        h1: ['3.5rem', { lineHeight: '1.15', fontWeight: '700' }],       // 56px
        h2: ['3rem', { lineHeight: '1.2', fontWeight: '600' }],          // 48px
        text1: ['1.5rem', { lineHeight: '1.6', fontWeight: '400' }],     // 24px
        text2: ['1rem', { lineHeight: '1.7', fontWeight: '400' }],       // 16px
      },
      colors: {
        primary: '#000C21',
        secondary: '#1E293B',
        accent: '#3B82F6',
        light: '#F1F5F9',
      },
    },
  },
  plugins: [],
};