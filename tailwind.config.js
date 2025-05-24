module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F5F5F5", // for bg in link btns
        lightHover: "#e5e7eb", // for bg in link btns when hovering
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
