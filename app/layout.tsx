// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Prof. Luana Araújo",
  description: "Transformando dificuldades em aprendizado.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        {/* Header */}
        <header className="bg-amber-500 text-white py-6 shadow-md">
          <div className="container mx-auto flex items-center justify-between px-6">
            <div className="flex items-center space-x-4">
              <Image
                src="/assets/luana-hero.png"
                alt="Foto de Luana Araújo"
                width={60}
                height={60}
                className="rounded-full ring-2 ring-offset-2 ring-white"
              />
              <h1 className="text-xl font-bold">Prof. Luana Araújo</h1>
            </div>
            <nav className="space-x-6 text-sm font-medium">
              <a href="/" className="hover:underline">
                Início
              </a>
              <a href="/servicos" className="hover:underline">
                Serviços
              </a>
              <a href="/contato" className="hover:underline">
                Contato
              </a>
            </nav>
          </div>
        </header>

        {/* Conteúdo */}
        <main className="container mx-auto px-6 py-12">{children}</main>

        {/* Footer */}
        <footer className="bg-blue-900 text-white text-center py-6 mt-12">
          <p>
            © {new Date().getFullYear()} Prof. Luana Araújo — Transformando
            dificuldades em aprendizado
          </p>
        </footer>
      </body>
    </html>
  );
}
