export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className="bg-white text-gray-900">
        {/* Navbar fixa e transparente com efeito glass */}
        <header
          className="fixed top-0 inset-x-0 z-50 border-b backdrop-blur-md"
          style={{
            borderColor: "rgba(255,255,255,.2)",
            background: "rgba(255,255,255,.55)"
          }}
        >
          <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
            {/* Avatar da marca */}
            <span className="h-10 w-10 rounded-full overflow-hidden ring-2 ring-offset-2 ring-amber-400 shadow-md shadow-amber-400/25">
              <img
                src="/assets/luana-hero.png"
                alt="Luana Araújo"
                className="h-full w-full object-cover"
              />
            </span>

            <h1 className="text-lg font-bold">Prof. Luana Araújo</h1>
          </nav>
        </header>

        {/* Hero Section */}
        <section className="relative flex items-center justify-center min-h-[70vh] text-center">
          <div className="absolute inset-0">
            <img
              src="/assets/luana-hero.png"
              alt="Hero background"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(0,0,0,.35), rgba(0,0,0,.15), transparent)"
              }}
            />
          </div>

          <div
            className="relative z-10 rounded-2xl px-6 py-7 shadow-xl border max-w-2xl"
            style={{
              background:
                "linear-gradient(135deg, rgba(245,179,66,.92), rgba(242,178,51,.88))",
              borderColor: "rgba(255,255,255,.35)",
              boxShadow: "0 10px 30px rgba(0,0,0,.25)",
              backdropFilter: "blur(6px)",
            }}
          >
            <h1 className="text-3xl sm:text-4xl font-extrabold text-[#0f2d5c]">
              Prof. Luana Araújo
            </h1>
            <p className="text-[#0b1220]/80 mt-2">
              Transformando dificuldades em aprendizado. Mais de 20 anos de experiência ajudando alunos a conquistar seus objetivos.
            </p>

            {/* Botões */}
            <div className="mt-6 flex flex-wrap justify-center gap-4">
              <a
                href="#mentoria-encceja"
                className="px-4 py-2 rounded-xl font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition"
                style={{
                  background: "linear-gradient(90deg, #f5b342, #f2b233)",
                  color: "#0b1220",
                }}
              >
                Clube do ENCCEJA
              </a>

              <a
                href="#mentoria-cefet"
                className="px-4 py-2 rounded-xl font-semibold border transition hover:-translate-y-0.5"
                style={{
                  borderColor: "rgba(0,0,0,.1)",
                  color: "#0f2d5c",
                  background: "white",
                }}
              >
                Mentoria CEFET
              </a>
            </div>
          </div>
        </section>

        {/* Conteúdo principal */}
        <main className="max-w-5xl mx-auto px-6 pt-24 pb-8">{children}</main>

        {/* Rodapé */}
        <footer className="bg-gray-100 text-center text-sm text-gray-600 py-6 mt-12 border-t">
          © {new Date().getFullYear()} Prof. Luana Araújo – Todos os direitos reservados
        </footer>
      </body>
    </html>
  );
}
