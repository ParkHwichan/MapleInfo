import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundColor: {
        'container' : 'var(--container)',
        'background' : 'var(--background)',
        'background-accent' : 'var(--background-accent)',
      },
      backgroundImage: {
        'gradient-red' : "linear-gradient(147deg, #fe8a39 0%, #fd3838 74%)",
        'gradient-blue' : "linear-gradient(147deg, #787ff6 0%, #4adede 74%)",
        'gradient-green' : "linear-gradient(147deg, #329d9c 0%, #56c596 74%)",
        'gradient-pink' : "linear-gradient(147deg, #ff9cda 0%, #ea4492 74%)",
        'gradient-purple' : "linear-gradient(147deg, #428cd4 0%, #ff9cda 74%)",
      },
      height: {
        'navbar-height': 'var(--navbar-height)',
        'h-screen-with-navbar': 'calc(100vh - var(--navbar-height))',
        'h-footer': 'var(--footer-height)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
export default config
