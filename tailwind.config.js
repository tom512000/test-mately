/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.jsx", "./index.html"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "serif"],
                parkinsans: ["Parkinsans", "sans-serif"],
            },
            screen: {
                ssm: "320px",
                msm: "375px",
                lsm: "425px",
            }
        },
    },
    variants: {},
    plugins: [],
};
