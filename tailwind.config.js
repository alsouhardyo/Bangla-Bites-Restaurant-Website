/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                recoleta: ["Recoleta", ...defaultTheme.fontFamily.sans],
                montserrat: ["Montserrat", ...defaultTheme.fontFamily.sans]
            },
            colors: {
                accent: "#fa8a3d",
                secondary: "#F5F5F5",
            }
        }
    },
    plugins: []
};
