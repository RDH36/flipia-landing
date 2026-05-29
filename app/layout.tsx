import type { Metadata } from "next";
import { Fredoka, Nunito, Geist } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const fredoka = Fredoka({
  variable: "--font-fredoka",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Flipia — Retourne. Mémorise. Domine.",
  description:
    "Le premier jeu de mémoire 1v1 avec la mécanique Tornade. Défie tes amis ou affronte des IA redoutables. Disponible sur Android.",
  keywords: [
    "flipia",
    "memory game",
    "jeu de mémoire",
    "1v1",
    "tornado",
    "mobile game",
  ],
  openGraph: {
    title: "Flipia — Retourne. Mémorise. Domine.",
    description:
      "Le premier jeu de mémoire 1v1 avec la mécanique Tornade. Disponible sur Android.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={cn("h-full", "antialiased", fredoka.variable, nunito.variable, "font-sans", geist.variable)}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
