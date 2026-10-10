import type { Metadata } from "next";
import { Montserrat, Dancing_Script } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const dancing = Dancing_Script({
  variable: "--font-dancing",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Desing Amoblamientos | Muebles a medida en Maipú, Mendoza",
  description:
    "Diseñamos y fabricamos muebles a medida: placards, vestidores, cocinas y más. Presupuestos sin cargo en Maipú, Mendoza.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={`${montserrat.variable} ${dancing.variable}`}>
      <body className="bg-crema font-sans text-carbon antialiased">
        {children}
      </body>
    </html>
  );
}