module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#F5F5F5", // for bg in link btns
        lightHover: "#e5e7eb", // for bg in link btns when hovering
        yellow: "#ffa000",
        orange: "#eb6124",
        purple: "#9747ff",
        green: "#4caf50",
        blue: "#0074ea",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
