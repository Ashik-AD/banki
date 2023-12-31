import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-gray': 'linear-gradient(113deg, rgba(255, 255, 255, 0.37) 10.29%, rgba(255, 255, 255, 0.00) 100.35%)'
      },
      colors: {
        skin: '#2BB32A'
      }
    },
  },
  plugins: [],
}
export default config
