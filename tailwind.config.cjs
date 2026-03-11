module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: {
          50: "#f8fafc",
          100: "#f1f5f9",
          200: "#e2e8f0",
          300: "#cbd5e1",
          400: "#94a3b8",
          500: "#64748b",
          600: "#475569",
          700: "#334155",
          800: "#1e293b",
          900: "#0b1220"
        },
        brand: {
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
        },
        accent: {
          50: "#f0fdfa",
          100: "#ccfbf1",
          200: "#99f6e4",
          300: "#5eead4",
          400: "#2dd4bf",
          500: "#14b8a6",
          600: "#0d9488",
          700: "#0f766e",
          800: "#115e59",
          900: "#134e4a"
        },
        highlight: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f"
        }
      },
      fontFamily: {
        sans: ["Manrope", "ui-sans-serif", "system-ui"],
        display: ["Sora", "ui-sans-serif", "system-ui"]
      },
      boxShadow: {
        soft: "0 20px 60px -40px rgba(15, 23, 42, 0.35)",
        glow: "0 30px 80px -50px rgba(37, 99, 235, 0.55)",
        "inner-soft": "inset 0 1px 0 0 rgba(255, 255, 255, 0.7)"
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at 20% 20%, rgba(59, 130, 246, 0.18), transparent 55%), radial-gradient(circle at 80% 10%, rgba(20, 184, 166, 0.18), transparent 50%)",
        mesh:
          "radial-gradient(circle at top, rgba(59, 130, 246, 0.12), transparent 45%), radial-gradient(circle at 80% 0%, rgba(20, 184, 166, 0.12), transparent 40%), radial-gradient(circle at 30% 80%, rgba(245, 158, 11, 0.12), transparent 45%)"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" }
        }
      },
      animation: {
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 5s ease-in-out infinite",
        "pulse-soft": "pulse-soft 6s ease-in-out infinite"
      }
    }
  },
  plugins: []
};
