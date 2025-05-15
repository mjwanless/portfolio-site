/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            colors: {
                "custom-cream": "var(--custom-cream)",
                "custom-peach": "var(--custom-peach)",
                "custom-coral": "var(--custom-coral)",
                "custom-brick": "var(--custom-brick)",
                "custom-navy": "var(--custom-navy)",
                "custom-teal": "var(--custom-teal)",
                "custom-seafoam": "var(--custom-seafoam)",
                "custom-sage": "var(--custom-sage)",
                "custom-gold": "var(--custom-gold)",
            },
            fontFamily: {
                sans: [
                    "var(--font-geist-sans)",
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
            },
        },
    },
    plugins: [],
    rules: {
        "at-rule-no-unknown": [
            true,
            {
                ignoreAtRules: ["tailwind", "apply", "variants", "responsive", "screen", "theme", "custom-variant"],
            },
        ],
    },
};
