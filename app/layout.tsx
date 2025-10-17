// app/layout.tsx
import "./globals.css";

export const metadata = {
  title: "Prof. Luana Araújo",
  description: "Transformando dificuldades em aprendizado",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="bg-white text-gray-900">
        {/* Header simples */}
        <header className="bg-amber-500 text-white shadow-md">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
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

        {/* Conteúdo da página */}
        <main className="max-w-5xl mx-auto px-6 py-10">{children}</main>

        <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-12 border-t">
          © {new Date().getFullYear()} Prof. Luana Araújo – Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
