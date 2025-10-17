// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// Paleta inspirada na foto enviada
export const PALETTE = {
  amber: "#fbbf24",   // amarelo/dourado do fundo
  navy: "#1e3a8a",    // azul escuro (contraste)
  white: "#ffffff",
};

export const metadata: Metadata = {
  title: "Prof. Luana Araújo",
  description:
    "Transformando dificuldades em aprendizado. Mais de 15 anos de experiência ajudando alunos a conquistar seus objetivos.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        {/* HEADER */}
        <header
          className="w-full px-6 py-4 shadow-md flex items-center justify-between"
          style={{ backgroundColor: PALETTE.amber }}
        >
          <div className="flex items-center gap-3">
            {/* Avatar com borda */}
            <span
              className="h-10 w-10 rounded-full overflow-hidden border-2"
              style={{ borderColor: PALETTE.navy }}
            >
              <img
                src="/assets/luana-hero.png"
                alt="Luana Araújo"
                className="h-full w-full object-cover"
              />
            </span>
            <h1 className="text-lg font-bold" style={{ color: PALETTE.navy }}>
              Prof. Luana Araújo
            </h1>
          </div>
        </header>

        {/* CONTEÚDO */}
        <main className="min-h-screen bg-gray-50 text-gray-900">
          {children}
        </main>

        {/* FOOTER */}
        <footer
          className="w-full text-center py-6 mt-12"
          style={{ backgroundColor: PALETTE.navy, color: PALETTE.white }}
        >
          <p>© {new Date().getFullYear()} Prof. Luana Araújo. Todos os direitos reservados.</p>
        </footer>
      </body>
    </html>
  );
}
