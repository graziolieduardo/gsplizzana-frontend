/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        fontFamily: {
            rubik: ['"Rubik"', "Roboto"]
        },
        extend: {
            colors: {
                'primary': '#f39533',
                'primary-dark': '#fe6d2c',
                'secondary': '#353535',
            },
            backgroundImage: {
                'campo': "url('/static/campo.JPG')",
            }
        },
    },
    plugins: [],
}

