const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.tsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ["Nunito", ...defaultTheme.fontFamily.sans],
            },
            colors: {
                red: {
                    1000: "#F51701",
                },
                blue: {
                    1000: "#2E4159",
                },
                gray: {
                    1000: "#889c9b",
                },
            },
        },
    },

    plugins: [require("@tailwindcss/forms")],
};
