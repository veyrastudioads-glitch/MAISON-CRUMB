/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFBF7',
          100: '#FAF7F2',
          200: '#F4EFEA',
          300: '#EBE3DA',
          400: '#DFD5C8',
        },
        cocoa: {
          900: '#201410',
          800: '#2E1D17',
          700: '#432E25',
          600: '#5A3F33',
        },
        taupe: {
          600: '#6B5B53',
          500: '#8A776E',
          400: '#A9978E',
          300: '#C8BAB2',
        },
        terracotta: {
          DEFAULT: '#BD6B54',
          dark: '#A45842',
          light: '#D48670',
          soft: '#F8EFEA',
        },
        rose: {
          accent: '#D49B85',
          subtle: '#F6ECE8',
        },
        whatsapp: {
          DEFAULT: '#1E6342',
          hover: '#175135',
          light: '#EAF5EF',
          border: '#34A853',
        }
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(32, 20, 16, 0.05)',
        'elevated': '0 12px 32px -4px rgba(32, 20, 16, 0.08)',
        'modal': '0 24px 64px -12px rgba(32, 20, 16, 0.22)',
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s infinite ease-in-out',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(0.96)' },
        }
      }
    },
  },
  plugins: [],
}
