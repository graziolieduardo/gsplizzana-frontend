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
                'primary-dark': '#FF6D2D',
                'text-subtle': '#353535',
                'border-subtle': '#EAEAEA',
                'bg-primary': '#F3F3F3',
                'bg-secondary': '#F8F8F8'
            },
            backgroundImage: {
                'campo': "url('/static/campo.JPG')",
            },
            maxWidth: {
                'container': '1200px',
                'container-xl': '1400px'
              }
        },
    },
    plugins: [],
}

