// app/sobre/page.tsx
export const metadata = {
  title: "Sobre • Prof. Luana Araújo",
  description:
    "Sobre a Prof. Luana Araújo e suas mentorias (ENCCEJA, IFRJ, UERJ, CEFET).",
};

export default function SobrePage() {
  return (
    <div className="space-y-10">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-amber-600">Sobre mim</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Sou professora e mentora com mais de 15 anos de experiência ajudando
          alunos a transformar dificuldades em aprendizado, com foco em ENCCEJA,
          IFRJ, UERJ (Química) e CEFET. Minha abordagem é prática, clara e
          motivadora.
        </p>
      </section>

      <section id="mentoria-cefet">
        <h2 className="text-2xl font-semibold text-gray-800">
          Mentoria CEFET
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          Planejamento de estudos, resolução de questões comentadas e revisão
          estratégica dos conteúdos que mais caem – com encontros objetivos e
          materiais de apoio.
        </p>
        <div className="mt-6 flex gap-3 flex-wrap">
          <a
            href="https://wa.me/5521997331448"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 bg-amber-500 text-white rounded-lg shadow hover:bg-amber-600 transition font-semibold"
          >
            Falar no WhatsApp
          </a>
          <a
            href="/"
            className="px-5 py-2.5 border rounded-lg shadow-sm hover:shadow transition font-semibold text-gray-800"
          >
            Voltar ao início
          </a>
        </div>
      </section>
    </div>
  );
}
