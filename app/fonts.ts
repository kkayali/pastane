import {
  Cormorant_Garamond,
  Inter,
  Monsieur_La_Doulaise,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const cormorant = Cormorant_Garamond({
  subsets: ["latin", "latin-ext"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const ornamentalScript = Monsieur_La_Doulaise({
  subsets: ["latin-ext"],
  variable: "--font-script",
  display: "swap",
  weight: "400",
});
