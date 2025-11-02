export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Exo', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        display:
            [
              'clamp(2.5rem, 6vw + 0.5rem, 7.5rem)',
              {lineHeight: '1.1', fontWeight: '700'}
            ],
        h1:
            [
              'clamp(2rem, 5vw + 0.5rem, 6.5rem)',
              {lineHeight: '1.15', fontWeight: '700'}
            ],
        h2:
            [
              'clamp(1.75rem, 4vw + 0.5rem, 5.5rem)',
              {lineHeight: '1.2', fontWeight: '600'}
            ],
        text1:
            [
              'clamp(1.125rem, 1.2vw + 0.5rem, 1.75rem)',
              {lineHeight: '1.6', fontWeight: '400'}
            ],
        text2:
            [
              'clamp(0.875rem, 0.8vw + 0.25rem, 1.25rem)',
              {lineHeight: '1.7', fontWeight: '400'}
            ],
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