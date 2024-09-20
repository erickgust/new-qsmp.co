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
        'blue-pattern': "url('/BG_Blue.png')",
      },
      fontSize: {
        // 1.625rem = 26px
        "2.5xl": "1.625rem",
        // 1.375rem = 22px
        '1.5xl': '1.375rem',
      },
      spacing: {
        // 14,5rem = 232px
        60: "14.5rem",
      },
      fontFamily: {
        pixel: ["var(--font-pixeloid-sans)", "sans-serif"],
        inter: ["var(--font-inter)", "sans-serif"],
      },
      maxWidth: {
        'screen-lg': '1080px',
      },
    },
  },
  plugins: [],
}
export default config
