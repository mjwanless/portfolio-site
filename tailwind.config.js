/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "custom-darkgrey-1": "var(--custom-darkgrey-1)",
                "custom-darkgrey-2": "var(--custom-darkgrey-2)",
                "custom-cyan": "var(--custom-cyan)",
                "custom-white": "var(--custom-white)",
                "custom-pink": "var(--custom-pink)",
                "custom-blue": "var(--custom-blue)",
                "custom-orange": "var(--custom-orange)",
                "custom-purple": "var(--custom-purple)",
                "custom-darkpurple": "var(--custom-darkpurple)",
                "custom-grey": "var(--custom-grey)",
            },
        },
    },
    plugins: [],
};
