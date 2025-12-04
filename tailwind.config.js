/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#2D5F5D',
                    light: '#3A7572',
                    dark: '#1F4442',
                },
                accent: {
                    DEFAULT: '#8B9D83',
                    light: '#A4B59C',
                }
            },
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                heading: ['Bricolage Grotesque', 'Inter', 'system-ui', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
