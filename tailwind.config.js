/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/parts/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "dark"],
      borderColor: ["hover", "dark"],
    },
  },
  plugins: [],
};

// module.exports = {
//   purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   darkMode: 'class', // or 'media' or 'class'
//   theme: {
//     extend: {},
//   },
//   variants: {
//     extend: {
//       backgroundColor: ['hover', 'dark'],
//       borderColor: ['hover', 'dark'],
//     },
//   },
//   plugins: [],
// };
