 // app/layout.tsx
import "./globals.css";
import React from "react";

export const metadata = {
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
      <body className="bg-white text-gray-900 antialiased">
        {/* Navbar */}
        <header className="sticky top-0 z-50 backdrop-blur-md border-b"
                style={{ borderColor: "#eef2f7", background: "rgba(255,255,255,.85)" }}>
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              {/* Avatar da marca */}
              <span className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-offset-2 ring-amber-400">
                <img
                  src="/assets/luana-hero.png"
                  alt="Luana Araújo"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-semibold text-blue-900">Prof. Luana Araújo</span>
            </a>

            <div className="flex items-center gap-2">
              {/* Deixa escondido quem precisa de código */}
              <a
                href="/acesso"
                className="px-4 py-2 rounded-xl font-semibold border transition hover:-translate-y-0.5"
                style={{ borderColor: "rgba(0,0,0,.08)", color: "#0f2d5c", background: "white" }}
              >
                Tenho um código
              </a>
              <a
                href="https://wa.me/5521997331448"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl font-semibold shadow hover:shadow-lg transition"
                style={{
                  background: "linear-gradient(90deg, #f5b342, #f2b233)",
                  color: "#0b1220",
                }}
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </header>

        {/* Conteúdo */}
        <main className="max-w-5xl mx-auto px-6 py-8">{children}</main>

        {/* Rodapé */}
        <footer className="text-center text-sm text-gray-600 py-6 mt-12 border-t"
                style={{ borderColor: "#eef2f7" }}>
          © {new Date().getFullYear()} Prof. Luana Araújo — Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
