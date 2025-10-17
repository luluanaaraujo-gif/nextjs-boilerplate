// app/sobre/page.tsx

export const metadata = {
  title: "Sobre • Prof. Luana Araújo",
  description:
    "Sobre a Prof. Luana Araújo e suas mentorias (ENCCEJA, IFRJ, UERJ, CEFET).",
};

export default function SobrePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      {/* Seção de apresentação */}
      <section className="text-center">
        <h1 className="text-3xl font-bold text-amber-600">Sobre mim</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Sou professora e mentora com mais de 15 anos de experiência ajudando
          alunos a superar dificuldades em aprendizado, com foco em ENCCEJA,
          IFRJ, UERJ (Química) e CEFET. Minha abordagem é prática, clara e
          motivadora.
        </p>
      </section>

      {/* Serviços */}
      <section>
        <h2 className="text-2xl font-semibold text-amber-500 mb-4">
          Serviços e mentorias
        </h2>
        <ul className="space-y-3 text-gray-700">
          <li>✅ Clube Aprova ENCCEJA</li>
          <li>✅ Mentoria Pedro II</li>
          <li>✅ Preparação IFRJ & UERJ (Química)</li>
          <li>✅ Mentoria CEFET</li>
        </ul>
      </section>
    </main>
  );
}
