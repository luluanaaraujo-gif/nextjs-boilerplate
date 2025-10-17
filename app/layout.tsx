// app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
  title: "Prof. Luana Araújo",
  description: "Transformando dificuldades em aprendizado",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        {/* Navbar simples */}
        <header className="bg-amber-500 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            {/* Avatar da marca */}
            <span className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-offset-2 ring-amber-400">
              <img
                src="/assets/luana-hero.png"
                alt="Luana Araújo"
                className="h-full w-full object-cover"
              />
            </span>

            <h1 className="text-lg font-bold">Prof. Luana Araújo</h1>
          </div>
        </header>

        {/* Conteúdo principal */}
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>

        {/* Rodapé */}
        <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-12 border-t">
          © {new Date().getFullYear()} Prof. Luana Araújo – Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
