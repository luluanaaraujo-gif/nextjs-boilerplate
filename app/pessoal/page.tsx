// app/pessoal/page.tsx
import Image from "next/image";
import Link from "next/link";

const WHATS_LINK =
  "https://wa.me/5521XXXXXXXXX?text=Oi%2C%20Luana%21%20Quero%20saber%20mais%20sobre%20as%20mentorias%20%F0%9F%93%9D";

export default function Pessoal() {
  return (
    <main className="pb-16">
      {/* HERO */}
      <section className="relative overflow-hidden bg-amber-50">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-2 items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-amber-100 px-3 py-1 text-sm font-medium text-amber-800 ring-1 ring-amber-200">
              Prof. Luana Araújo
            </span>
            <h1 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
              Transformando dificuldades em aprendizado
            </h1>
            <p className="mt-3 text-lg text-gray-700">
              Mais de 15 anos ajudando alunos a conquistar seus objetivos
              (ENCCEJA, IFRJ, UERJ – Química, CEFET) com trilhas, revisão
              inteligente e acompanhamento próximo.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={WHATS_LINK}
                className="inline-flex items-center justify-center rounded-lg bg-amber-600 px-5 py-3 text-white font-medium hover:bg-amber-700 transition"
              >
                Falar no WhatsApp
              </Link>
              <Link
                href="#mentorias"
                className="inline-flex items-center justify-center rounded-lg px-5 py-3 font-medium text-amber-700 ring-1 ring-amber-300 hover:bg-amber-50 transition"
              >
                Ver mentorias
              </Link>
            </div>
          </div>

          {/* Imagem SEM distorção (aspect ratio + object-cover) */}
          <div className="relative w-full">
            <div className="relative w-full overflow-hidden rounded-2xl ring-1 ring-amber-200 bg-amber-100 aspect-[4/3] sm:aspect-[16/10]">
              <Image
                src="/assets/luana-hero.png"
                alt="Foto da Prof. Luana Araújo"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MENTORIAS (cards) */}
      <section id="mentorias" className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          Mentorias
        </h2>
        <p className="mt-2 text-gray-600">
          Escolha a trilha certa e avance com clareza, constância e apoio.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {CARDS.map((c) => (
            <article
              key={c.title}
              className="group rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {c.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600">{c.subtitle}</p>
                </div>
                <span className="inline-flex items-center rounded-full bg-amber-100 px-2 py-1 text-xs font-medium text-amber-800 ring-1 ring-amber-200">
                  {c.badge}
                </span>
              </div>
              <ul className="mt-4 space-y-2 text-sm text-gray-700">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500" />
                    {p}
                  </li>
                ))}
              </ul>
              <Link
                href={c.link}
                className="mt-5 inline-flex items-center rounded-lg bg-amber-600 px-4 py-2 text-white text-sm font-medium hover:bg-amber-700 transition"
              >
                Quero detalhes
              </Link>
            </article>
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-20">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
          Depoimentos
        </h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <blockquote
              key={t.name}
              className="rounded-2xl bg-white p-6 ring-1 ring-gray-200 shadow-sm"
            >
              <p className="text-gray-800">“{t.text}”</p>
              <footer className="mt-4 text-sm font-medium text-gray-700">
                — {t.name}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      {/* CONTATO / REDES */}
      <section className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 mt-20">
        <div className="rounded-2xl bg-amber-50 p-8 ring-1 ring-amber-200">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Vamos conversar?
          </h2>
          <p className="mt-2 text-gray-700">
            Fale comigo no WhatsApp ou acompanhe meu conteúdo nas redes.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href={WHATS_LINK}
              className="inline-flex items-center rounded-lg bg-amber-600 px-5 py-3 text-white font-medium hover:bg-amber-700 transition"
            >
              Abrir WhatsApp
            </Link>
            <Link
              href="https://www.instagram.com/seuusuario"
              target="_blank"
              className="inline-flex items-center rounded-lg px-5 py-3 font-medium text-amber-700 ring-1 ring-amber-300 hover:bg-amber-100 transition"
            >
              Instagram
            </Link>
            <Link
              href="https://www.youtube.com/@seucanal"
              target="_blank"
              className="inline-flex items-center rounded-lg px-5 py-3 font-medium text-amber-700 ring-1 ring-amber-300 hover:bg-amber-100 transition"
            >
              YouTube
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

const CARDS = [
  {
    title: "Clube Aprova ENCCEJA",
    subtitle: "Trilhas semanais, aulas objetivas e checklist do que mais cai.",
    badge: "Popular",
    points: [
      "Aulas gravadas e ao vivo",
      "Checklist do que mais cai",
      "Comunidade no WhatsApp",
    ],
    link:
      "https://wa.me/5521XXXXXXXXX?text=Quero%20detalhes%20do%20Clube%20Aprova%20ENCCEJA",
  },
  {
    title: "Preparação IFRJ",
    subtitle: "Resolução de exercícios e simulados estratégicos.",
    badge: "Intensivo",
    points: [
      "Resumos objetivo + mapas mentais",
      "Simulados estratégicos",
      "Plano claro até a prova",
    ],
    link:
      "https://wa.me/5521XXXXXXXXX?text=Quero%20detalhes%20da%20prepara%C3%A7%C3%A3o%20IFRJ",
  },
  {
    title: "UERJ • Química",
    subtitle: "Revisão dirigida, listas comentadas e mapa do que mais cai.",
    badge: "Foco Química",
    points: ["Listas comentadas", "Revisão dirigida", "Mentoria próxima"],
    link:
      "https://wa.me/5521XXXXXXXXX?text=Quero%20detalhes%20da%20mentoria%20UERJ%20Qu%C3%ADmica",
  },
];
const TESTIMONIALS = [
  {
    name: "Beatriz S.",
    text:
      "Passei no ENCCEJA! As trilhas e o checklist me deram exatamente o que estudar. Recomendo muito.",
  },
  {
    name: "Pedro A.",
    text:
      "Na Química da UERJ eu sempre travava; com a revisão dirigida e as listas comentadas, destravei.",
  },
  {
    name: "Rafael M.",
    text:
      "A mentoria do IFRJ foi essencial para organizar meus estudos. O plano semanal fez toda a diferença.",
  },
];
