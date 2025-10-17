// app/sobre/page.tsx
import React from "react";

export const metadata = {
  title: "Sobre • Prof. Luana Araújo",
  description:
    "Sobre a Prof. Luana Araújo e suas mentorias (ENCCEJA, IFRJ, UERJ, CEFET).",
};

export default function SobrePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-12 space-y-12">
      <section>
        <h1 className="text-3xl font-bold text-gray-900">Sobre mim</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Sou professora e mentora com mais de 15 anos de experiência ajudando
          alunos a transformar dificuldades em aprendizado. Atuo com foco em
          ENCCEJA, IFRJ, UERJ (Química) e CEFET. Minha abordagem é prática,
          clara e focada no que mais cai, com trilhas, revisão inteligente e
          acompanhamento próximo.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Mentorias</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              title: "Clube Aprova ENCCEJA",
              desc: "Trilhas semanais, aulas objetivas e checklist do que mais cai.",
              link: "#",
            },
            {
              title: "Preparação IFRJ",
              desc: "Conteúdos-chave com foco em exercícios e simulados estratégicos.",
              link: "#",
            },
            {
              title: "UERJ • Química",
              desc: "Revisão dirigida, listas comentadas e mapa do que mais cai.",
              link: "#",
            },
            {
              title: "Mentoria CEFET",
              desc: "Planejamento prático e acompanhamento de perto até a prova.",
              link: "#",
            },
          ].map((mentoria, i) => (
            <div
              key={i}
              className="bg-white border rounded-xl shadow-md p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-gray-800">
                {mentoria.title}
              </h3>
              <p className="text-gray-600 mt-2">{mentoria.desc}</p>
              <a
                href={mentoria.link}
                className="inline-block mt-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600"
              >
                Ver detalhes
              </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
