import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      white: '#FFFFFF',
      main: {
        red: '#FF3D3D',
        blue: '#00ADFF',
        purple: '#604DD8',
        yellow: '#FFDB43',
        'dark-blue': '#1F1E33',
        'light-blue': '#F0F6FF',
      },
      secondary: {
        'dark-grey': '#535170',
        'light-grey': '#EEEEEE',
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
