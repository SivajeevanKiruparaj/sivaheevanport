/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#06b6d4', // Cyan 500
                    dark: '#0891b2',    // Cyan 600
                },
                secondary: {
                    DEFAULT: '#8b5cf6', // Violet 500
                    dark: '#7c3aed',    // Violet 600
                },
                dark: {
                    bg: '#0f172a',      // Slate 900
                    card: '#1e293b',    // Slate 800
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                display: ['Outfit', 'sans-serif'],
            }
        },
    },
    plugins: [],
}
