// app/sobre/page.tsx

export const metadata = {
  title: "Sobre • Prof. Luana Araújo",
  description:
    "Sobre a Prof. Luana Araújo e suas mentorias (ENCCEJA, IFRJ, UERJ, CEFET).",
};

export default function SobrePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-12">
      <section>
        <h1 className="text-3xl font-bold text-[#0f26d5]">Sobre mim</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Sou professora e mentora com mais de 15 anos de experiência ajudando
          alunos a transformar dificuldades em aprendizado, com foco em ENCCEJA,
          IFRJ, UERJ (Química) e CEFET. Minha abordagem é prática, clara e
          motivadora.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">
          Serviços oferecidos
        </h2>
        <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
          <li>📘 Mentoria para o ENCCEJA</li>
          <li>🔬 Preparação para provas do IFRJ</li>
          <li>🧪 Reforço em Química (UERJ)</li>
          <li>🏫 Apoio para ingresso no CEFET</li>
        </ul>
      </section>

      <div className="pt-6">
        <a
          href="/cefet"
          className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-amber-600 transition"
        >
          Mentoria CEFET
        </a>
      </div>
    </main>
  );
}
