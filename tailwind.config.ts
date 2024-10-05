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
        'purple-pattern': "url('/BG_Purple.png')",
        'light-blue-pattern': "url('/BG_LightBlue.png')",
      },
      fontSize: {
        // 1.625rem = 26px
        "2.5xl": "1.625rem",
        // 1.375rem = 22px
        '1.5xl': '1.375rem',
      },
      spacing: {
        '4.5': '1.125rem', // 1.125rem = 18px
        60: "14.5rem", // 14,5rem = 232px
        75: "18.75rem", // 18.75rem = 300px
        105: "26.25rem", // 26.25rem = 420px
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
