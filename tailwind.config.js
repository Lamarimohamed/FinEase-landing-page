module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2e8b8b",
          light: "#78d0cc",
          lighter: "#d5f2ef",
          dark: "#1e4243",
        },
        secondary: {
          DEFAULT: "#0c2527",
          light: "#637477",
          lighter: "#e7ebeb",
        },
        background: {
          DEFAULT: "#ffffff",
          light: "#f8f9fa",
          teal: "#f2fbfa",
        },
        border: {
          DEFAULT: "#e7ebeb",
          light: "#f2010126",
        },
        text: {
          primary: "#0c2527",
          secondary: "#637477",
          white: "#ffffff",
          accent: "#f20101",
        }
      },
      fontFamily: {
        'general-sans': ['General Sans', 'sans-serif'],
        'satoshi': ['Satoshi', 'sans-serif'],
      },
      boxShadow: {
        'card': '0px 12px 24px rgba(36, 37, 37, 0.05)',
        'button': '0px 4px 6px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};