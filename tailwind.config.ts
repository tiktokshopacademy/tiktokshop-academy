import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#fef0f7',
          100: '#fee1ef',
          200: '#fec3e0',
          300: '#fd95c6',
          400: '#fb579e',
          500: '#f52d7c',
          600: '#e5105e',
          700: '#c20a4b',
          800: '#a00c41',
          900: '#850e39',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
