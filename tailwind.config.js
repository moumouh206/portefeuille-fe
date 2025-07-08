/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      // Nous mettons toutes les couleurs directement ici
      colors: {
        // --- Palette Principale Kaspersky ---
        "kaspersky-green": "#187181",
        "kaspersky-green-light": "#2aa0b5",
        "kaspersky-green-lighter": "#BEFFF4",
        "kaspersky-green-dark": "#00A88E",

        // --- Palette de Gris pour le Flat Design ---
        "brand-bg": "#f3f4f6", // Fond de page (bg-gray-100)
        "brand-surface": "#ffffff", // Fond pour les cartes, inputs, etc. (bg-white)
        "brand-line": "#e5e7eb", // Lignes de séparation fines (border-gray-200)

        // --- Palette de Texte ---
        "brand-text-main": "#1f2937", // Texte principal, titres (text-gray-800)
        "brand-text-alt": "#6b7280", // Texte secondaire, labels (text-gray-500)
        "brand-text-inverse": "#ffffff", // Texte sur fond coloré (text-white)
      },
    },
  },
  plugins: [],
};
