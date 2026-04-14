import type { Metadata } from "next";
import { Space_Grotesk, Manrope } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Curso Prático - Uso de Agentes de IA na Saúde | Clinica.IA",
  description:
    "Recupere 8 a 12 horas da sua semana com agentes de IA. Curso prático para profissionais da saúde em Belém-PA. 16 de Maio de 2025.",
  keywords: [
    "IA na saúde",
    "agentes de IA",
    "curso IA médicos",
    "inteligência artificial saúde",
    "Clinica.IA",
    "automação clínica",
  ],
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} ${manrope.variable} antialiased`}
        style={{ fontFamily: "var(--font-manrope)" }}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
