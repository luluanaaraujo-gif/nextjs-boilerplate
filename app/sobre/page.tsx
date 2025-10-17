// app/sobre/page.tsx
import React from "react";

export const metadata = {
  title: "Sobre • Prof. Luana Araújo",
  description:
    "Sobre a Prof. Luana Araújo e suas mentorias (ENCCEJA, IFRJ, UERJ, CEFET).",
};

export default function SobrePage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-10 space-y-12">
      <section>
        <h1 className="text-3xl font-bold text-[#0f2d5c]">Sobre mim</h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Sou professora e mentora com mais de 15 anos de experiência ajudando
          alunos a transformar dificuldades em aprendizado, com foco em ENCCEJA,
          IFRJ, UERJ (Química) e CEFET. Minha abordagem é prática, clara e
          personalizada para cada objetivo.
        </p>
      </section>

      <section id="mentoria-cefet">
        <h2 className="text-2xl font-semibold text-[#0f2d5c]">
          Mentoria CEFET
        </h2>
        <p className="mt-3 text-gray-700 leading-relaxed">
          A mentoria CEFET é focada em planejamento de estudos, resolução de
          questões comentadas e revisão estratégica dos conteúdos que mais caem,
          com encontros objetivos e materiais de apoio.
        </p>

        <div className="mt-5 flex flex-wrap gap-3">
          <a
            href="https://wa.me/5521997331448"
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 rounded-xl font-semibold shadow hover:shadow-lg hover:-translate-y-0.5 transition"
            style={{
              background: "linear-gradient(90deg, #f5b342, #f2b233)",
              color: "#0b1220",
            }}
          >
            Falar no WhatsApp
          </a>

          <a
            href="/"
            className="px-4 py-2 rounded-xl font-semibold border transition hover:-translate-y-0.5"
            style={{
              borderColor: "rgba(0,0,0,.1)",
              color: "#0f2d5c",
              background: "white",
            }}
          >
            Voltar à página inicial
          </a>
        </div>
      </section>
    </div>
  );
}

