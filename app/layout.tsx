// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Prof. Luana Araújo",
  description:
    "Mentorias (ENCCEJA, IFRJ, UERJ Química e CEFET) com trilhas, revisão inteligente e acompanhamento próximo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="min-h-dvh bg-white text-gray-900 antialiased">
        {children}
      </body>
    </html>
  );
}
