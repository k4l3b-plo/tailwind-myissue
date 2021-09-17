module.exports = {
  important: true,
  mode: "jit",
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './template/index.html'],
  darkMode: 'class',
  theme: {
    screens: {
      'x3sm': '10px',
      'x2sm': '240px',
      'x1sm': '360px',
      'x0sm': '460px',
      'xsm': '540px',
      'sm': '640px',
      'md': '768px',
      'mld': '806px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      Montserrat: ['Montserrat', 'sans-serif']
  },
    extend: {
      colors: {
        primarylight: '#FFFFFF',

        bglight: '#EEEEEE',
        // bglight: '#e5e5e5',

        primarydark: '#2E3030',
        // primarydark: '#15161A',

        bgdark: '#1D1F1F',

        lighttext: '#000',

        darktext: '#fff',

        btncolor: '#f64c56',

        linkcolor: '#23577E',
      },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
}
