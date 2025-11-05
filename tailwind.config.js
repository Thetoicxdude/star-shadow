/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        "gradient-x": "gradient-x 15s ease infinite",
        "gradient-y": "gradient-y 15s ease infinite",
        "gradient-xy": "gradient-xy 15s ease infinite",
        "glow-blue": "glow-blue 2s ease-in-out infinite",
        "glow-purple": "glow-purple 2s ease-in-out infinite",
        "glow-cyan": "glow-cyan 2s ease-in-out infinite",
      },
      keyframes: {
        "gradient-y": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "center top",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "center center",
          },
        },
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "gradient-xy": {
          "0%, 100%": {
            "background-size": "400% 400%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
        "glow-blue": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 2em #646cffaa)",
          },
          "50%": {
            filter: "drop-shadow(0 0 0.5em #646cff22)",
          },
        },
        "glow-purple": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 2em #a855f7aa)",
          },
          "50%": {
            filter: "drop-shadow(0 0 0.5em #a855f722)",
          },
        },
        "glow-cyan": {
          "0%, 100%": {
            filter: "drop-shadow(0 0 2em #06b6d4aa)",
          },
          "50%": {
            filter: "drop-shadow(0 0 0.5em #06b6d422)",
          },
        },
      },
    },
  },
  plugins: [],
};
