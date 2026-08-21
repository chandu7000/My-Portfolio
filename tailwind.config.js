/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: "#060913",
        surface: "#0B1020",
        "surface-soft": "#10182B",
        line: "#1D2942",
        ink: "#F7FAFF",
        muted: "#94A3B8",
        accent: {
          cyan: "#22D3EE",
          blue: "#3B82F6",
          violet: "#8B5CF6",
        },
      },
      boxShadow: {
        soft: "0 18px 50px -24px rgba(2, 8, 23, 0.8)",
        glow: "0 0 36px -14px rgba(34, 211, 238, 0.55)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      maxWidth: {
        content: "72rem",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
    },
  },
  plugins: [],
};
