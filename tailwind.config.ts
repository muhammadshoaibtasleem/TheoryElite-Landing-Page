import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: "#0A0A14",
          card: "#12121E",
          darker: "#08080F",
          section: "#0C0C18",
          strip: "#0E0E1A",
        },
        purple: {
          primary: "#7C3AED",
          dark: "#6D28D9",
          light: "#8B5CF6",
        },
        blue: {
          primary: "#3B82F6",
          dark: "#2563EB",
        },
        gold: {
          primary: "#F59E0B",
          dark: "#D97706",
        },
        green: {
          success: "#10B981",
        },
        red: {
          error: "#EF4444",
        },
        text: {
          primary: "#FFFFFF",
          secondary: "#94A3B8",
          tertiary: "#64748B",
        },
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "SF Mono", "monospace"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, #7C3AED, #3B82F6)",
        "gradient-gold": "linear-gradient(135deg, #F59E0B, #D97706)",
      },
      animation: {
        float: "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-15px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
