/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          25: "#f6fbff",
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a"
        }
      },
      borderRadius: { xl2: "1.25rem" },
      boxShadow: {
        soft: "0 12px 40px rgba(15, 23, 42, 0.10)",
        soft2: "0 18px 60px rgba(15, 23, 42, 0.12)"
      }
    }
  },
  plugins: []
};
