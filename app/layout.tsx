// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Prof. Luana Araújo",
  description: "Mentorias ENCCEJA, IFRJ, UERJ (Química) e CEFET.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900">
        <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur">
          <div className="mx-auto max-w-6xl h-16 px-4 flex items-center justify-between">
            <a href="/" className="font-semibold">Prof. Luana Araújo</a>
            <nav className="hidden sm:flex gap-6 text-sm">
              <a href="/pessoal">Pessoal</a>
              <a href="/sobre">Sobre</a>
            </nav>
            <a
              href="https://wa.me/5521997331448"
              className="hidden sm:inline-flex rounded-lg bg-amber-500 px-4 py-2 text-white text-sm font-medium hover:bg-amber-600"
              target="_blank"
            >
              WhatsApp
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t">
          <div className="mx-auto max-w-6xl px-4 h-16 flex items-center justify-between text-sm text-gray-600">
            <span>© {new Date().getFullYear()} Prof. Luana Araújo</span>
            <span>Direção + constância</span>
          </div>
        </footer>
      </body>
    </html>
  );
}

       
