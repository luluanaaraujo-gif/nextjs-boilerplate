// app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Prof. Luana Araújo",
    template: "%s • Prof. Luana Araújo",
  },
  description:
    "Mentorias Pedro II, IFRJ, UERJ (Química) e Clube Aprova ENCCEJA.",
  openGraph: { images: ["/assets/luana-hero.png"] },
};

const PALETTE = {
  amber: "#f5b342",
  gold: "#f2b233",
  navy: "#0f2d5c",
  ink: "#0b1220",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900 antialiased">
        {/* NAVBAR FIXA */}
        <header
          className="sticky top-0 z-50 backdrop-blur-md border-b"
          style={{ borderColor: "#eef2f7", background: "rgba(255,255,255,.8)" }}
        >
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Marca (SEM ringColor e SEM classes traduzidas) */}
            <a href="/" className="flex items-center gap-3">
              <span
                className="h-9 w-9 rounded-full overflow-hidden border-2"
                style={{ borderColor: PALETTE.amber }}
              >
                <img
                  src="/assets/luana-hero.png"
                  alt="Luana Araújo"
                  className="h-full w-full object-cover"
                />
              </span>
              <span className="font-semibold" style={{ color: PALETTE.navy }}>
                Prof. Luana Araújo
              </span>
            </a>

            <div className="flex items-center gap-2">
              <a
                href="/acesso"
                className="px-4 py-2 rounded-xl font-semibold border transition hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(0,0,0,.08)",
                  color: PALETTE.navy,
                  background: "rgba(255,255,255,.95)",
                }}
              >
                Tenho um código
              </a>
              <a
                href="https://wa.me/5521997331448"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl font-semibold shadow hover:shadow-lg transition"
                style={{
                  background: `linear-gradient(90deg, ${PALETTE.amber}, ${PALETTE.gold})`,
                  color: "#0b1220",
                }}
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </header>

        {/* CONTEÚDO */}
        {children}

        {/* RODAPÉ */}
        <footer
          className="text-center text-sm text-gray-500 py-6 border-t"
          style={{ borderColor: "#eef2f7" }}
        >
          © {new Date().getFullYear()} Prof. Luana Araújo • Todos os direitos
          reservados
        </footer>
      </body>
    </html>
  );
}
