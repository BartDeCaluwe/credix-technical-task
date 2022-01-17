module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  safelist: [
    {
      pattern: /^w-/,
    },
    {
      pattern: /^h-/,
    },
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
