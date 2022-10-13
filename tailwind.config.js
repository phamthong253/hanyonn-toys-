/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./**/*.html','./**/*.{js,jsx,ts,tsx,vue}'],
  theme: {
    screens:{
      'xs':'374px', //@media (min-width:375px)
    },
    extend: {
      inset:{
        '200px':'200px',
        '500px':'500px',
      },
      width:{
        '130':'130px',
        '600':'600px',
        '400':'400px',
      },
      height:{
        '130':'130px',
        '500':'500px',
        '400':'400px',
        '600':'600px',
        '800':'800px',
      },
    },
  },
  plugins: [],
}
