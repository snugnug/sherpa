/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin');

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        theme: {
          0: "rgb(var(--color-accent4) / <alpha-value>)",
          50: "rgb(var(--color-accent3) / <alpha-value>)",
          100: "rgb(var(--color-accent2) / <alpha-value>)",
          200: "rgb(var(--color-accent1) / <alpha-value>)",
          300: "rgb(var(--color-text2) / <alpha-value>)",
          400: "rgb(var(--color-text1) / <alpha-value>)",
          500: "rgb(var(--color-caret) / <alpha-value>)",
          600: "rgb(var(--color-comment) / <alpha-value>)",
          700: "rgb(var(--color-highlight) / <alpha-value>)",
          800: "rgb(var(--color-focused) / <alpha-value>)",
          900: "rgb(var(--color-base) / <alpha-value>)",
          1000: "rgb(var(--color-black) / <alpha-value>)",
        },
      },
      typography: ({ theme }) => ({
        test: {
          css: {
            "--tw-prose-body": theme("colors.theme[900]"),
            "--tw-prose-headings": theme("colors.theme[900]"),
            "--tw-prose-lead": theme("colors.theme[700]"),
            "--tw-prose-links": theme("colors.theme[900]"),
            "--tw-prose-bold": theme("colors.theme[900]"),
            "--tw-prose-counters": theme("colors.theme[600]"),
            "--tw-prose-bullets": theme("colors.theme[400]"),
            "--tw-prose-hr": theme("colors.theme[300]"),
            "--tw-prose-quotes": theme("colors.theme[900]"),
            "--tw-prose-quote-borders": theme("colors.theme[300]"),
            "--tw-prose-captions": theme("colors.theme[700]"),
            "--tw-prose-code": theme("colors.theme[900]"),
            "--tw-prose-pre-code": theme("colors.theme[100]"),
            "--tw-prose-pre-bg": theme("colors.theme[900]"),
            "--tw-prose-th-borders": theme("colors.theme[300]"),
            "--tw-prose-td-borders": theme("colors.theme[200]"),
            "--tw-prose-invert-body": theme("colors.theme[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.theme[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.theme[400]"),
            "--tw-prose-invert-bullets": theme("colors.theme[600]"),
            "--tw-prose-invert-hr": theme("colors.theme[700]"),
            "--tw-prose-invert-quotes": theme("colors.theme[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.theme[700]"),
            "--tw-prose-invert-captions": theme("colors.theme[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.theme[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.theme[600]"),
            "--tw-prose-invert-td-borders": theme("colors.theme[700]"),
          },
        },
      }),
    },
  },
        plugins: [
                require("@tailwindcss/typography"),
                plugin(function({ addVariant }) {
      addVariant('children', '&>*')
    })
],
};
