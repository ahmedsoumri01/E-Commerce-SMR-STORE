const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"    , "./node_modules/flowbite/**/*.js",    flowbite.content(),],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin')
]
}

