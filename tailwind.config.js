/** @type {import('tailwindcss').Config} */
module.exports = {
  // 👇 این خط حیاتیه! بدون این دکمه تغییر تم کار نمیکنه
  darkMode: 'class', 

  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'], 
      },
      animation: {
        'popShake': 'popShake 3.5s ease-in-out infinite',
        'popupOpen': 'popupOpen 1s cubic-bezier(0.22, 1, 0.36, 1)',
        'fadeSlideUp': 'fadeSlideUp 0.28s ease-out',
        'bubbleEntrance': 'bubbleEntrance 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards',
      },
      keyframes: {
        popShake: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '10%': { transform: 'translateY(-6px) scale(1.12)' },
          '20%': { transform: 'translateY(4px) scale(0.95)' },
          '30%': { transform: 'translateY(-4px) scale(1.1)' },
          '50%': { transform: 'translateY(-6px) scale(1.14)' },
        },
        popupOpen: {
          '0%': { opacity: '0', transform: 'translateY(30px) scale(0.92)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        fadeSlideUp: {
          'from': { opacity: '0', transform: 'translateY(8px) scale(0.97)' },
          'to': { opacity: '1', transform: 'translateY(0) scale(1)' },
        },
        bubbleEntrance: {
          '0%': { opacity: '0', transform: 'translateY(20px) scale(0.5)', transformOrigin: 'bottom right' },
          '50%': { opacity: '1', transform: 'translateY(-10px) scale(1.1)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)', transformOrigin: 'bottom right' },
        }
      }
    },
  },
  plugins: [],
}