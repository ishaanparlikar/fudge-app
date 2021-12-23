module.exports = {
   mode: 'jit',
   content: [
      "./src/**/*.{js,jsx,ts,tsx}",
   ],
   theme: {
      extend: {
         boxShadow: {
            'full': '0px 0px 40px #0B0B0B24;'
         },
         fontSize: {
            'xxs': '12px',
         },
         color:{
            'darkGreen': '#033715',
         },
         screens: {
            'tab': { 'max': '1024px' },
            'laptop': { 'max': '1675px' },

         }
      },
   },
   plugins: [],
}
