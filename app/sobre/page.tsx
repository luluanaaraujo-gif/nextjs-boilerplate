// app/sobre/page.tsx
import React from "react";

export const metadata = {
  title: "Sobre • Prof. Luana Araújo",
  description:
    "Sobre a Prof. Luana Araújo e suas mentorias (ENCCEJA, IFRJ, UERJ Química e CEFET).",
};

export default function SobrePage() {
  return (
    <main className="section space-y-10">
      {/* SOBRE MIM */}
      <section className="space-y-4">
        <h1 className="h1">Sobre mim</h1>
        <p className="lead">
          Sou professora e mentora com mais de 15 anos de experiência ajudando
          alunos a transformar dificuldades em aprendizado. Atuo com foco em
          ENCCEJA, IFRJ, UERJ (Química) e CEFET. Minha abordagem é prática,
          clara e focada no que mais cai, com trilhas, revisão inteligente e
          acompanhamento próximo.
        </p>
      </section>

      {/* MENTORIAS EM CARDS */}
      <section className="space-y-6">
        <h2 className="h2 text-amber-600">Mentorias</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* ENCCEJA */}
          <article className="card">
            <div className="card-body">
              <h3 className="h3">Clube Aprova ENCCEJA</h3>
              <p className="lead mt-2">
                Trilhas semanais, aulas objetivas e checklist do que mais cai.
                Comunidade no WhatsApp e plano claro até a prova.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="/encceja" className="btn-primary">
                  Ver detalhes
                </a>
                <a
                  href="https://wa.me/5521997331448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* IFRJ */}
          <article className="card">
            <div className="card-body">
              <h3 className="h3">Preparação IFRJ</h3>
              <p className="lead mt-2">
                Conteúdos-chave com foco em resolução de exercícios e simulados
                estratégicos. Metodologia simples e direta.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="/ifj" className="btn-primary">
                  Ver detalhes
                </a>
                <a
                  href="https://wa.me/5521997331448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* UERJ Química */}
          <article className="card">
            <div className="card-body">
              <h3 className="h3">UERJ • Química</h3>
              <p className="lead mt-2">
                Reforço em Química voltado para prova: revisão dirigida, listas
                comentadas e mapa do que mais cai.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="/uerj-quimica" className="btn-primary">
                  Ver detalhes
                </a>
                <a
                  href="https://wa.me/5521997331448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>

          {/* CEFET */}
          <article className="card">
            <div className="card-body">
              <h3 className="h3">Mentoria CEFET</h3>
              <p className="lead mt-2">
                Planejamento prático, revisão do que mais cai e
                acompanhamento de perto para você chegar confiante na prova.
              </p>
              <div className="mt-4 flex gap-3">
                <a href="/cefet" className="btn-primary">
                  Ver detalhes
                </a>
                <a
                  href="https://wa.me/5521997331448"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}
