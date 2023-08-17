/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            fontFamily: {
				"benz-grotesk": "Benz Grotesk",
				"sg-reg": "Space Grotesk Regular",
				"sg-med": "Space Grotesk Medium",
			},
            screens: {
                "max-2xl": { max: "1535px" },
                "max-xl": { max: "1279px" },
                "max-lg": { max: "1023px" },
                "max-md": { max: "767px" },
                "max-sm": { max: "639px" },
                "max-xs": { max: "480px" },
            },
        },
    },
    plugins: [],
};
