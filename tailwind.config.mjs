/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#111111",
          900: "#1d1d1f",
          800: "#2d2d31",
          700: "#424245",
          600: "#66666b"
        },
        paper: {
          50: "#fbfbfd",
          100: "#f5f5f7",
          200: "#ececf0"
        },
        accent: {
          500: "#2563eb",
          600: "#1d4ed8"
        }
      },
      boxShadow: {
        soft: "0 18px 60px rgba(17, 17, 17, 0.06)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      },
      maxWidth: {
        page: "1120px"
      }
    }
  },
  plugins: []
};
