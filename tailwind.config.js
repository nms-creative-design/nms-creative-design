/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        customDark: '#131313',
        customGray: '#141414',
        customBorder: '#3e3e3e',
        customStyle: '#feb335',
        customColor: '#feb335',
        bodyColor: '#09090B',
        bodyText: '#7b7b7b',
        customBlack: '#000000',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      animation: {
        'electric-pulse': 'electric-pulse 1.2s ease-in-out infinite',
        'electric-pulse-slow': 'electric-pulse 4s ease-in-out infinite',
        'electric-fast': 'electric-zigzag 1.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'electric-fast-delay': 'electric-zigzag 1.5s cubic-bezier(0.4, 0, 0.6, 1) 0.75s infinite',
        'flash': 'flash 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'flash-delay': 'flash 3s cubic-bezier(0.4, 0, 0.6, 1) 1s infinite',
        'flash-delay-2': 'flash 3s cubic-bezier(0.4, 0, 0.6, 1) 2s infinite',
        'pulse-slow': 'pulse 8s ease-in-out infinite',
        'pulse-very-slow': 'pulse 12s ease-in-out infinite',
        'electric-particle': 'electric-particle 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'electric-particle-delay': 'electric-particle 4s cubic-bezier(0.4, 0, 0.6, 1) 1.3s infinite',
        'electric-particle-delay-2': 'electric-particle 4s cubic-bezier(0.4, 0, 0.6, 1) 2.6s infinite',
      },
      keyframes: {
        'electric-pulse': {
          '0%, 100%': { opacity: 0.6, transform: 'scaleY(0.98)' },
          '50%': { opacity: 0.9, transform: 'scaleY(1.02)' }
        },
        'electric-zigzag': {
          '0%': { transform: 'translateY(-100%) scaleY(1.05)' },
          '50%': { transform: 'translateY(0%) scaleY(0.95)' },
          '100%': { transform: 'translateY(100%) scaleY(1.05)' }
        },
        'flash': {
          '0%, 100%': { opacity: 0, transform: 'scale(0.98)' },
          '5%, 15%': { opacity: 0.8, transform: 'scale(1.03)' },
          '20%, 80%': { opacity: 0, transform: 'scale(0.99)' },
          '85%, 95%': { opacity: 0.7, transform: 'scale(1.02)' }
        },
        'electric-particle': {
          '0%': { transform: 'translate(0, 0) scale(1)', opacity: 0.4, filter: 'blur(8px)' },
          '20%': { transform: 'translate(10px, -15px) scale(1.2)', opacity: 0.9, filter: 'blur(6px)' },
          '40%': { transform: 'translate(-5px, -25px) scale(0.9)', opacity: 0.6, filter: 'blur(10px)' },
          '60%': { transform: 'translate(15px, -35px) scale(1.1)', opacity: 0.8, filter: 'blur(7px)' },
          '80%': { transform: 'translate(-10px, -45px) scale(0.8)', opacity: 0.5, filter: 'blur(9px)' },
          '100%': { transform: 'translate(0, -55px) scale(0.7)', opacity: 0, filter: 'blur(12px)' }
        }
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.mask-zigzag-improved': {
          maskImage: 'linear-gradient(45deg, black 15%, transparent 15%), linear-gradient(-45deg, black 15%, transparent 15%), linear-gradient(45deg, transparent 85%, black 85%), linear-gradient(-45deg, transparent 85%, black 85%)',
          maskSize: '40px 40px',
          maskPosition: '0 0, 0 20px, 20px -20px, -20px 0px'
        },
        '.mask-zigzag-alt-improved': {
          maskImage: 'linear-gradient(45deg, black 15%, transparent 15%), linear-gradient(-45deg, black 15%, transparent 15%), linear-gradient(45deg, transparent 85%, black 85%), linear-gradient(-45deg, transparent 85%, black 85%)',
          maskSize: '40px 40px',
          maskPosition: '20px 0, 20px 20px, 40px -20px, 0px 0px'
        }
      };
      addUtilities(newUtilities);
    }
  ]
});