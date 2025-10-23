/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        midnight: '#0f172a',
        aurora: '#38bdf8',
        magenta: '#ec4899',
        jade: '#34d399'
      },
      fontFamily: {
        grotesk: ['Space Grotesk', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      boxShadow: {
        neon: '0 0 25px rgba(56, 189, 248, 0.45)',
        glass: '0 15px 45px rgba(15, 23, 42, 0.65)'
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(56, 189, 248, 0.35) 0, rgba(2, 6, 23, 0.1) 55%, rgba(2,6,23,0) 100%)',
        stars: 'url(https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?auto=format&fit=crop&w=1200&q=80)'
      }
    }
  },
  plugins: []
};
