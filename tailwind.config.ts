import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    //"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    //"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes:{
        "fade-in":{
          from :{opacity:"0"},
          to:{opacity:"1"}
        }
      },
      animation:{"fade-in":"fade-in 0.5s linear forwards",},//adding keyframes for our fade-in animation  to set from where it occurs
      fontFamily:{
        //Poppins: ["Poppins", "sans-serif"],
        //merienda: ["Merienda",...defaultTheme.fontFamily.sans],
        rustic: ['var(--font-rustic)'],
        bariol: ['var(--font-bariol)']

      },
      transitionProperty: {
        'background': 'background-color'
      },
      backgroundImage: {
        'my-bg-image': "url('/mainbg.jpg')",
        'blog': "url('/blog.jpg')",
        'blog2': "url('/blog2.jpg')",
        
        
        //'landing':"url('https://izzycooking.com/wp-content/uploads/2021/03/Jerk-Chicken-thumbnail.jpg')",
        
        //'contact': "url('https://lh3.googleusercontent.com/p/AF1QipNWJE2jdvAsiWRxkzrxucBxd2Cq2vmbNP-ySwCE=s0')",
        //'skills':"url('https://lh3.googleusercontent.com/p/AF1QipNN0pRsm_FeVxQBdUTPMazXVd9ondvLL2QGfHaZ=s0')",
        //'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        //'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      }
      
    },
  },
  plugins: [
    require("tailwindcss-animate")
  ],
}
export default config
