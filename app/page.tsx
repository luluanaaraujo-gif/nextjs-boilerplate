// app/sobre/page.tsx
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre • Prof. Luana Araújo",
  description:
    "Página pessoal da Prof. Luana Araújo: trajetória, missão e serviços (ENCCEJA, IFRJ, UERJ - Química e Pedro II).",
  openGraph: {
    title: "Prof. Luana Araújo",
    description:
      "Transformando dificuldades em aprendizado. Mais de 15 anos de experiência.",
    images: ["/assets/luana-hero.png"],
  },
};

const PALETTE = {
  amber: "#f5b342",
  gold: "#f2b233",
  navy: "#0f2d5c",
  ink: "#0b1220",
};

const services = [
  {
    key: "encceja",
    title: "Clube Aprova ENCCEJA",
    blurb:
      "Aulas objetivas, trilhas semanais e comunidade no WhatsApp para tirar dúvidas.",
    href: "/encceja",
    badge: "Acesso imediato",
    img: "/assets/clubeenceeja.png", // já existe no seu /public/assets
  },
  {
    key: "ifrj",
    title: "Mentoria IFRJ",
    blurb:
      "Estratégia, foco e simulados para você garantir sua vaga com tranquilidade.",
    href: "/ifrj",
    badge: "Acesso imediato",
    img: "/assets/ifrjimagem.png", // já existe no seu /public/assets
  },
  {
    key: "uerj",
    title: "Mentoria Química • UERJ",
    blurb:
      "Conteúdo de Química com método claro, checkpoints e revisão de alto impacto.",
    href: "/uerj-quimica",
    badge: "Acesso imediato",
    img: "/assets/uerjimagem.png", // já existe no seu /public/assets
  },
  {
    key: "pedro-ii",
    title: "Mentoria Pedro II",
    blurb:
      "Preparação guiada e prática. (acesso via código para turma fechada).",
    href: "/acesso", // sem link direto pra página protegida
    badge: "Com código",
    img: "/assets/colegiocp2.png", // você disse que usaria esta imagem
  },
  // Se quiser exibir “Reforço Escolar” depois, é só descomentar:
  // {
  //   key: "reforco",
  //   title: "Reforço Escolar",
  //   blurb: "Acompanhamento contínuo e personalizado (em breve).",
  //   href: "#",
  //   badge: "Em breve",
  //   img: "/assets/reforço.png",
  // },
];

export default function SobrePage() {
  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden">
        {/* foto de fundo */}
        <div className="absolute inset-0 -z-10">
          <Image
            src="/assets/luana-hero.png"
            alt="Luana Araújo"
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-80"
          />
          <div className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,.55), rgba(0,0,0,.35), rgba(255,255,255,0))",
            }}
          />
        </div>

        <div className="max-w-5xl mx-auto px-6 py-24 sm:py-28">
          <div className="inline-block rounded-2xl bg-black/85 px-6 py-6 shadow-xl">
            <h1 className="text-white text-3xl sm:text-4xl font-bold text-center">
              Prof. Luana Araújo
            </h1>
            <p className="text-white/90 mt-3 text-center max-w-3xl">
              Transformando dificuldades em aprendizado. Mais de 15 anos de
              experiência ajudando alunos a conquistar seus objetivos.
            </p>
          </div>
        </div>
      </section>

      {/* SOBRE MIM */}
      <section className="max-w-5xl mx-auto px-6 py-12 sm:py-16">
        <div className="grid md:grid-cols-[220px,1fr] items-start gap-8">
          <div className="flex md:justify-center">
            <div className="h-44 w-44 rounded-full overflow-hidden border-4 shadow"
                 style={{ borderColor: PALETTE.amber }}>
              <Image
                src="/assets/luana-hero.png"
                alt="Luana Araújo"
                width={256}
                height={256}
                className="h-full w-full object-cover"
                priority
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-semibold mb-3" style={{ color: PALETTE.navy }}>
              Sobre mim
            </h2>
            <p className="leading-relaxed text-gray-700">
              Sou professora dedicada e mentora de alunos que buscam reforço escolar,
              preparação para provas como o ENCCEJA, IFRJ, UERJ e Colégio Pedro II.
              Meu objetivo é mostrar que aprender pode ser mais simples, eficiente
              e até prazeroso quando usamos a metodologia certa — planejamento
              claro, prática direcionada e acompanhamento próximo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://wa.me/5521997331448"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-xl font-semibold shadow hover:shadow-lg transition"
                style={{
                  background: `linear-gradient(90deg, ${PALETTE.amber}, ${PALETTE.gold})`,
                  color: "#0b1220",
                }}
              >
                Falar no WhatsApp
              </a>
              <a
                href="/"
                className="px-4 py-2 rounded-xl font-semibold border"
                style={{ borderColor: "rgba(0,0,0,.1)", color: PALETTE.navy }}
              >
                Ver página inicial
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section className="bg-gray-50 border-y" style={{ borderColor: "#eef2f7" }}>
        <div className="max-w-6xl mx-auto px-6 py-12 sm:py-16">
          <h2 className="text-2xl font-semibold mb-8"
              style={{ color: PALETTE.navy }}>
            Serviços e mentorias
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <article
                key={s.key}
                className="rounded-2xl overflow-hidden border bg-white hover:shadow-lg transition"
                style={{ borderColor: "#eef2f7" }}
              >
                <div className="relative h-40">
                  <Image
                    src={s.img}
                    alt={s.title}
                    fill
                    sizes="(max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <span
                    className="absolute top-3 left-3 text-xs font-semibold px-2 py-1 rounded-full"
                    style={{
                      background: `linear-gradient(90deg, ${PALETTE.amber}, ${PALETTE.gold})`,
                      color: "#0b1220",
                    }}
                  >
                    {s.badge}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg">{s.title}</h3>
                  <p className="text-gray-600 mt-1 text-sm leading-relaxed">
                    {s.blurb}
                  </p>
                  <div className="mt-4">
                    <a
                      href={s.href}
                      className="inline-flex items-center px-3 py-2 rounded-lg font-semibold border hover:-translate-y-0.5 transition"
                      style={{
                        borderColor: "rgba(0,0,0,.1)",
                        color: PALETTE.navy,
                        background: "white",
                      }}
                    >
                      Acessar
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="max-w-6xl mx-auto px-6 py-14">
        <div
          className="rounded-2xl p-8 text-center shadow"
          style={{
            background: `linear-gradient(90deg, ${PALETTE.amber}, ${PALETTE.gold})`,
            color: "#0b1220",
          }}
        >
          <h3 className="text-xl font-bold">Quer começar hoje?</h3>
          <p className="mt-2">
            Me chama no WhatsApp e eu te oriento sobre o melhor caminho para o seu objetivo.
          </p>
          <a
            href="https://wa.me/5521997331448"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 px-4 py-2 rounded-xl font-semibold bg-black/80 text-white hover:bg-black"
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>
    </main>
  );
}
