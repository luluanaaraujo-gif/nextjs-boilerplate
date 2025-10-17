// app/page.tsx
export default function HomePage() {
  return (
    <>
      {/* HERO só aqui na home */}
      <section
        className="relative bg-cover bg-center"
        style={{ backgroundImage: "url('/assets/luana-hero.png')" }}
      >
        <div className="bg-black/70 flex flex-col items-center justify-center text-center py-20 px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Prof. Luana Araújo
          </h2>
          <p className="text-lg text-white max-w-2xl">
            Transformando dificuldades em aprendizado. Mais de 15 anos de
            experiência ajudando alunos a conquistar seus objetivos.
          </p>
          <div className="mt-6">
            <a
              href="/sobre#mentoria-cefet"
              className="px-6 py-3 bg-amber-500 text-white font-semibold rounded-lg shadow-lg hover:bg-amber-600 transition"
            >
              Mentoria CEFET
            </a>
          </div>
        </div>
      </section>

      {/* Conteúdo adicional da home, se quiser */}
      <section className="mt-10">
        <h3 className="text-2xl font-semibold text-gray-800">
          Bem-vindo(a)!
        </h3>
        <p className="mt-3 text-gray-700">
          Escolha uma mentoria ou conheça mais sobre meu trabalho.
        </p>
      </section>
    </>
  );
}
