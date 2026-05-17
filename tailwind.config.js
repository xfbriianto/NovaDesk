/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "secondary": "#d0bcff",
        "on-error": "#690005",
        "primary-fixed-dim": "#d2bbff",
        "on-secondary-fixed-variant": "#5516be",
        "background": "#0e1323",
        "on-secondary": "#3c0091",
        "primary-fixed": "#eaddff",
        "on-error-container": "#ffdad6",
        "primary-container": "#7c3aed",
        "on-primary": "#3f008e",
        "surface-tint": "#d2bbff",
        "on-surface-variant": "#ccc3d8",
        "outline-variant": "#4a4455",
        "surface-container-high": "#25293a",
        "inverse-on-surface": "#2b3041",
        "surface-container-highest": "#2f3446",
        "surface-container-lowest": "#080d1d",
        "surface-variant": "#2f3446",
        "secondary-fixed-dim": "#d0bcff",
        "on-tertiary-fixed-variant": "#6900b3",
        "primary": "#d2bbff",
        "secondary-fixed": "#e9ddff",
        "on-secondary-fixed": "#23005c",
        "tertiary-fixed-dim": "#ddb7ff",
        "surface-container-low": "#161b2b",
        "surface-container": "#1a1f30",
        "on-secondary-container": "#c4abff",
        "on-tertiary-container": "#f2dfff",
        "on-primary-fixed": "#25005a",
        "on-background": "#dee1f9",
        "inverse-surface": "#dee1f9",
        "on-primary-fixed-variant": "#5a00c6",
        "surface": "#0e1323",
        "secondary-container": "#571bc1",
        "tertiary": "#ddb7ff",
        "error": "#ffb4ab",
        "on-tertiary-fixed": "#2c0051",
        "on-primary-container": "#ede0ff",
        "surface-bright": "#34394a",
        "on-surface": "#dee1f9",
        "tertiary-fixed": "#f0dbff",
        "on-tertiary": "#490080",
        "tertiary-container": "#8d36db",
        "surface-dim": "#0e1323",
        "outline": "#958da1",
        "inverse-primary": "#732ee4",
        "error-container": "#93000a"
      },
      borderRadius: {
        DEFAULT: "0.25rem",
        lg: "0.5rem",
        xl: "0.75rem",
        full: "9999px"
      },
      spacing: {
        unit: "8px",
        "margin-mobile": "16px",
        gutter: "24px",
        "margin-desktop": "40px",
        "container-max": "1440px"
      },
      fontFamily: {
        "display-lg": ["Geist"],
        "headline-lg-mobile": ["Geist"],
        "body-md": ["Geist"],
        "label-sm": ["JetBrains Mono"],
        "headline-lg": ["Geist"]
      },
      fontSize: {
        "display-lg": ["48px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "700" }],
        "headline-lg-mobile": ["28px", { lineHeight: "1.2", fontWeight: "600" }],
        "body-md": ["16px", { lineHeight: "1.6", fontWeight: "400" }],
        "label-sm": ["12px", { lineHeight: "1.4", letterSpacing: "0.05em", fontWeight: "500" }],
        "headline-lg": ["32px", { lineHeight: "1.2", letterSpacing: "-0.01em", fontWeight: "600" }]
      }
    },
  },
  plugins: [],
}