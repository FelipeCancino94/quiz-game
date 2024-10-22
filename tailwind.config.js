/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { 
    extend: {},
    fontFamily: {
      title: ["Londrina Sketch", "sans-serif"],
      content: ["Afacad Flux", "sans-serif"],
       
      },
   
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"], // Solo incluya el tema claro
    darkTheme: false, // Desactiva explícitamente el tema oscuro
  },
  
    
}


