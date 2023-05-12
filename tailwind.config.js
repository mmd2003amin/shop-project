/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      "vazirMedium" : "vazirMedium",
      "vazirBold" : "vazirBold",
      "vazirExtraBold" : "vazirExtraBold",
      "vazirRegular" : "vazirRegular",
    },
    extend: {
  
      rotate : {
        fortyFive : "-45deg"
      },

      translate : {
        tow : "-0.5rem",
        thirtyTwo : "-32rem",
        thirtyOne : "31.6rem",

      },

      colors: {
        white : "#fff",
        li : "#FF1744",
        liDeskMenu:"#4a5f73",
        HMenuDesk : "#00bfd6",
      },

      boxShadow: {
        navbar : "0px 0px 20px 0px rgba(0, 0, 0, 0.15)",
        menuDesk: "0 2px 9px 0 rgba(112, 112, 112, .32)",
        new:"0px 0px 0px 0 rgb(0 , 0 , 0),0px 2px 9px 0 rgba(112, 112, 112, .32)",
      },

      screens: {
        li:"450px"
      },

      spacing : {
        '22' : "6rem",
        '70%':"70%"
      },

      animation: {
        borderMenu : 'borderMenu .3s linear 1',
        shop : "shop 1.2s linear 1" ,
      },

      keyframes: {
        borderMenu : {
          "0%" :{width : "0px"},
          "100%" :{width : "90px"}
        },

        shop : {
          "22%" : {transform : "rotateZ(35deg)"},
          "44%" : {transform : "rotateZ(-35deg)"},
          "66%" : {transform : "rotateZ(35deg)"},
          "88%" : {transform : "rotateZ(-35deg)"},
          "100%" : {transform : "rotateZ(0deg)"},
        },
      }


    },
  },
  plugins: [],
}