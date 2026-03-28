import {
  Inter,
  Playfair_Display,
  Monsieur_La_Doulaise,
} from "next/font/google";

export const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "500", "600", "700", "800"],
});

export const ornamentalScript = Monsieur_La_Doulaise({
  subsets: ["latin-ext"],
  weight: "400",
});