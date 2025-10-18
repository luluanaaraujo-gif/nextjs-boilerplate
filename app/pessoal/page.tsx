// app/pessoal/page.tsx
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

/**
 * 🔗 Seu link curto do WhatsApp (ou com número)
 */
const WHATSAPP_CTA =
  "https://wa.me/5521976739159?text=Oi%20Luana%2C%20quero%20saber%20mais%20sobre%20as%20mentorias!";

/** 🎨 Paleta (mesmas cores que você já usava) */
const BRAND = {
  primary: "bg-amber-500",
  primaryHover: "hover:bg-amber-600",
  ring: "ring-amber-200",
  textPrimary: "text-amber-600",
};

export default function PaginaPessoal() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-amber-50/30 text-[#0b1220]">
      {/* ========= Cabeçalho fixo ========= */}
      <header className="fixed top-0 left-0 z-50 w-full bg-[#0b1220] text-white shadow-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-lg font-semibold">Prof. Luana Araújo</h1>

          {/* Navegação – desktop */}
          <nav className="hidden gap-6 text-sm md:flex">
            <Link href="#mentorias" className="hover:text-amber-400 transition-colors">
              Mentorias
            </Link>
            <Link href="#sobre" className="hover:text-amber-400 transition-colors">
              Sobre
            </Link>
            <Link href="#contato" className="hover:text-amber-400 transition-colors">
              Contato
            </Link>
            <Link
              href={WHATSAPP_CTA}
              target="_blank"
              className="rounded-md bg-amber-500 px-3 py-1 font-medium text-black transition hover:bg-amber-600"
            >
              WhatsApp
            </Link>
            <Link
              href="https://www.tiktok.com/@prof.luanaaraujo"
              target="_blank"
              className="rounded-md border border-white/20 px-3 py-1 font-medium hover:bg-white/10"
            >
              TikTok
            </Link>
          </nav>

          {/* Botão sanduíche – mobile */}
          <button
            aria-label="Abrir menu"
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-md p-2 hover:bg-white/10 md:hidden"
          >
            <span className="block h-0.5 w-6 bg-white" />
            <span className="mt-1 block h-0.5 w-6 bg-white" />
            <span className="mt-1 block h-0.5 w-6 bg-white" />
          </button>
        </div>

        {/* Menu móvel */}
        {menuOpen && (
          <nav className="border-t border-white/10 bg-[#0b1220] md:hidden">
            <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-3 text-sm">
              <Link href="#mentorias" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
                Mentorias
              </Link>
              <Link href="#sobre" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
                Sobre
              </Link>
              <Link href="#contato" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
                Contato
              </Link>
              <div className="mt-1 flex gap-3">
                <Link
                  href={WHATSAPP_CTA}
                  target="_blank"
                  className="rounded-md bg-amber-500 px-3 py-1 font-medium text-black hover:bg-amber-600"
                >
                  WhatsApp
                </Link>
                <Link
                  href="https://www.tiktok.com/@prof.luanaaraujo"
                  target="_blank"
                  className="rounded-md border border-white/20 px-3 py-1 font-medium hover:bg-white/10"
                >
                  TikTok
                </Link>
              </div>
            </div>
          </nav>
        )}
      </header>
      {/* ======== Fim do cabeçalho ======== */}

            </Link>
            <Link
              href="https://www.tiktok.com/@prof.luanaaraujo"
              target="_blank"
              className="hover:text-amber-400 transition-colors"
            >
              TikTok
            </Link>
          </nav>

          {/* Botão mobile (menu sanduíche) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 border border-white/30 rounded"
            aria-label="Abrir menu"
          >
            <div
              className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <div
              className={`h-0.5 w-5 bg-white my-[3px] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </

      />

      {/* Conteúdo principal */}
      <main className="max-w-6xl mx-auto px-6 py-12">
        {/* seu conteúdo atual continua daqui pra baixo */}

/**
 * Troque pelo seu link curto de WhatsApp (ou com número).
 *  - Com número: https://wa.me/5521976739159?text=Oi%20Luana%2C%20quero%20saber%20mais%20sobre%20as%20mentorias!
 *  - Com link curto: https://wa.me/message/SEU_CODIGO
 */
const WHATSAPP_CTA =
  "https://wa.me/5521976739159?text=Oi%20Luana%2C%20quero%20saber%20mais%20sobre%20as%20mentorias!";

/** Paleta (usa as cores que você já configurou no Tailwind) */
const BRAND = {
  primary: "bg-amber-500",
  primaryHover: "hover:bg-amber-600",
  ring: "ring-amber-200",
  textPrimary: "text-amber-600",
};

// Cabeçalho da página principal
<header className="w-full bg-[#0b1220] text-white py-4 shadow-md">
  <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
    <h1 className="text-xl font-semibold">Prof. Luana Araújo</h1>
    <nav className="flex gap-4 text-sm">
      <Link href="#mentorias" className="hover:text-amber-400">Mentorias</Link>
      <Link href="#sobre" className="hover:text-amber-400">Sobre</Link>
      <Link href="#contato" className="hover:text-amber-400">Contato</Link>
      <Link href="https://wa.me/5521997331448" className="bg-amber-500 hover:bg-amber-600 text-black px-3 py-1 rounded-md">
        WhatsApp
      </Link>
    </nav>
  </div>
</header>

/** Mentorias (novas inclusões: Reforço escolar, Pedro II, CEFET-RJ) */
const MENTORIAS = [
  {
    slug: "/mentorias/encceja",
    titulo: "Clube Aprova ENCCEJA",
    tag: "Popular",
    bullets: [
      "Aulas gravadas e ao vivo",
      "Trilhas semanais e objetivos claros",
      "Checklist do que mais cai",
      "Comunidade no WhatsApp",
    ],
  },
  {
    slug: "/ifri",
    titulo: "Preparação IFRJ",
    tag: "Intensivo",
    bullets: [
      "Resolução de exercícios e simulados estratégicos",
      "Mapas mentais e resumos objetivo",
      "Plano claro até a prova",
    ],
  },
  {
    slug: "/uerj-quimica",
    titulo: "UERJ • Química",
    tag: "Foco Química",
    bullets: [
      "Revisão dirigida e listas comentadas",
      "Mapa do que mais cai",
      "Roteiro claro e acompanhamento",
    ],
  },
  {
    slug: "/reforco",
    titulo: "Reforço Escolar",
    tag: "Fundamentos",
    bullets: [
      "Base sólida em matemática e ciências",
      "Rotina de estudos e hábitos",
      "Acompanhamento próximo",
    ],
  },
  {
    slug: "/pedro-ii",
    titulo: "Preparação Colégio Pedro II",
    tag: "Pedro II",
    bullets: [
      "Trilhas objetivas por conteúdo",
      "Simulados com correção comentada",
      "Estratégias para prova",
    ],
  },
  {
    slug: "/cefet",
    titulo: "Preparação CEFET-RJ",
    tag: "CEFET",
    bullets: [
      "Conteúdos-chave direcionados",
      "Listas de exercícios com revisão",
      "Plano de estudo enxuto e eficiente",
    ],
  },
];

/** Depoimentos (exemplo) */
const DEPOIMENTOS = [
  {
    nome: "Beatriz S.",
    curso: "Aprovada no IFRJ",
    texto:
      "A Luana me ajudou a organizar o que estudar e a revisar do jeito certo. As trilhas semanais fizeram TODA a diferença!",
  },
  {
    nome: "Carlos A.",
    curso: "Aprovado no ENCCEJA",
    texto:
      "Nunca gostei de estudar, mas com a metodologia da Luana ficou simples. Os checklists e a comunidade me mantiveram no foco.",
  },
  {
    nome: "Larissa M.",
    curso: "Uerj — Química",
    texto:
      "Revisões objetivas, mapas mentais e listas comentadas… foi o combo que me levou à aprovação. Gratidão!",
  },
];

/** Redes sociais */
const REDES = [
  {
    nome: "Instagram",
    href: "https://instagram.com/@prof.luanaaraujo",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a.75.75 0 100 1.5.75.75 0 000-1.5z" />
      </svg>
    ),
  },
  {
    nome: "YouTube",
    href: "https://youtube.com/@prof.luanaraujo",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M23.5 6.2s-.2-1.7-.8-2.5c-.8-.8-1.6-.8-2-1C18.6 2.2 12 2.2 12 2.2h0s-6.6 0-8.7.5c-.4.2-1.2.2-2 1C.7 4.4.5 6.2.5 6.2S0 8.2 0 10.2v1.5c0 2 .5 4 5.3 4.4 1.9.2 6.7.3 6.7.3s6.6 0 8.7-.5c.4-.2 1.2-.2 2-1 .6-.8.8-2.5.8-2.5s.5-2 .5-4V10.2c0-2-.5-4-5.3-4.4zM9.6 13.8V7.6l6 3.1-6 3.1z" />
      </svg>
    ),
  },
  {
    nome: "TikTok",
    href: "https://www.tiktok.com/@prof.luanaaraujo",
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M12.66 2h2.63c.15 1.46.74 2.66 1.84 3.61a5.74 5.74 0 002.92 1.24v2.6a8.06 8.06 0 01-4.42-1.23v6.44a5.3 5.3 0 01-1.08 3.33 5.33 5.33 0 01-3.26 1.99 6.05 6.05 0 01-1.23.12 5.33 5.33 0 01-3.8-1.57 5.4 5.4 0 01-1.57-3.86 5.36 5.36 0 011.57-3.84 5.22 5.22 0 013.82-1.58c.26 0 .54.02.85.06v2.8a2.8 2.8 0 00-.86-.15 2.54 2.54 0 00-1.84.72 2.53 2.53 0 00-.74 1.85c0 .74.25 1.36.74 1.86.5.5 1.1.75 1.82.75a2.37 2.37 0 001.83-.77c.5-.5.76-1.1.76-1.83V2z" />
      </svg>
    ),
  },
  {
    nome: "WhatsApp",
    href: WHATSAPP_CTA,
    icon: (
      <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor">
        <path d="M20.5 3.5A11.5 11.5 0 006.8 19.7l-3.1.8.8-3.1A11.5 11.5 0 1020.5 3.5zM12 20a8 8 0 118-8 8 8 0 01-8 8zm4.7-5.4c-.2-.1-1.3-.6-1.5-.7s-.4-.1-.6.1-.7.7-.9.8-.3.1-.5 0a6.4 6.4 0 01-1.8-1.1 6.5 6.5 0 01-1.2-1.5c-.1-.2 0-.3 0-.5l.7-.9s.1-.2 0-.4-.4-1.1-.5-1.3-.3-.3-.5-.3h-.4c-.2 0-.4 0-.6.3-.2.3-.8.8-.8 2s.8 2.3.9 2.5a7.5 7.5 0 002.9 2.9h.1c.3.1 1.8.5 2.5.3s1.2-.8 1.3-1.1.2-.8.1-.9-.1-.1-.3-.2z" />
      </svg>
    ),
  },
];


function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border px-3 py-1 text-xs font-medium text-gray-600">
      {children}
    </span>
  );
}

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="max-w-5xl">
      {eyebrow ? (
        <p className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${BRAND.textPrimary} bg-amber-50`}>
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">{title}</h2>
      {subtitle ? <p className="mt-2 text-gray-600">{subtitle}</p> : null}
    </div>
  );
}

function MentoriaCard({
  titulo,
  tag,
  bullets,
  href,
}: {
  titulo: string;
  tag?: string;
  bullets: string[];
  href: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm transition hover:shadow-md">
      <div className="mb-3 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-gray-900">{titulo}</h3>
        {tag ? <Badge>{tag}</Badge> : null}
      </div>

      <ul className="mb-5 space-y-2 text-sm text-gray-600">
        {bullets.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[6px] inline-block h-1.5 w-1.5 rounded-full bg-amber-500" />
            <span>{b}</span>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-2">
        <Link
          href={href}
          className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Quero detalhes
        </Link>
        <Link
          href={WHATSAPP_CTA}
          className={`inline-flex items-center gap-2 rounded-full ${BRAND.primary} ${BRAND.primaryHover} px-4 py-2 text-sm font-semibold text-white`}
        >
          Falar no WhatsApp
        </Link>
      </div>
    </div>
  );
}

function Depoimento({
  nome,
  curso,
  texto,
}: {
  nome: string;
  curso: string;
  texto: string;
}) {
  return (
    <div className="rounded-2xl border bg-white p-5 shadow-sm">
      <p className="text-gray-700">{texto}</p>
      <div className="mt-4 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 font-semibold text-amber-700">
          {nome.split(" ").map((n) => n[0]).slice(0, 2).join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{nome}</p>
          <p className="text-xs text-gray-600">{curso}</p>
        </div>
      </div>
    </div>
  );
}

export default function PessoalPage() {
  return (
    <main className="bg-amber-50/30">
      {/* HERO */}
      <section className="relative mx-auto max-w-6xl px-4 pb-10 pt-10 sm:pb-14 sm:pt-12 lg:pb-16 lg:pt-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <p className="mb-3 inline-block rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
              Prof. Luana Araújo
            </p>
            <h1 className="text-3xl font-extrabold leading-tight text-gray-900 sm:text-4xl">
              Transformando dificuldades em aprendizado
            </h1>
            <p className="mt-4 max-w-xl text-gray-700">
              Mais de 20 anos ajudando alunos a conquistar seus objetivos
              (ENCCEJA, IFRJ, UERJ – Química, **Pedro II** e **CEFET-RJ**) com trilhas, revisão
              inteligente e acompanhamento próximo.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={WHATSAPP_CTA}
                className={`inline-flex items-center justify-center rounded-full ${BRAND.primary} ${BRAND.primaryHover} px-5 py-3 text-sm font-semibold text-white shadow-sm`}
              >
                Falar no WhatsApp
              </Link>
              <Link
                href="#mentorias"
                className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-white/60"
              >
                Ver mentorias
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl">
              <Image
                src="/assets/luana-hero.png"
                alt="Foto de Luana Araújo sorrindo, com fundo âmbar"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* MENTORIAS */}
      <section id="mentorias" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <SectionTitle
          eyebrow="Mentorias"
          title="Escolha a trilha certa e avance com clareza, constância e apoio."
        />

        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {MENTORIAS.map((m) => (
            <MentoriaCard
              key={m.titulo}
              titulo={m.titulo}
              tag={m.tag}
              bullets={m.bullets}
              href={m.slug}
            />
          ))}
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <SectionTitle
          eyebrow="Resultados"
          title="O que os alunos dizem"
          subtitle="Histórias reais de quem estudou com metodologia, clareza e acompanhamento."
        />

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {DEPOIMENTOS.map((d, i) => (
            <Depoimento key={i} nome={d.nome} curso={d.curso} texto={d.texto} />
          ))}
        </div>
      </section>

      {/* SOBRE MIM */}
      <section className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionTitle eyebrow="Sobre mim" title="Quem é a Prof. Luana Araújo" />
            <p className="mt-3 text-gray-700">
              Sou professora e mentora com mais de 20 anos de experiência ajudando
              alunos a transformar dificuldades em aprendizado. Minha abordagem é
              prática e humana: trilhas, revisões inteligentes, mapas mentais e
              acompanhamento próximo para você estudar com clareza e constância,
              sem se perder no caminho.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <Link
                href={WHATSAPP_CTA}
                className={`inline-flex items-center justify-center rounded-full ${BRAND.primary} ${BRAND.primaryHover} px-5 py-3 text-sm font-semibold text-white`}
              >
                Quero falar com você
              </Link>
              <Link
                href="#mentorias"
                className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-white/60"
              >
                Ver pacotes e trilhas
              </Link>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl">
              <Image
                src="/assets/luana-hero.png"
                alt="Luana em estúdio"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 540px"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CONTATO + REDES */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="rounded-3xl border bg-white p-6 shadow-sm sm:p-8">
          <div className="grid items-center gap-6 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold text-gray-900">
                Vamos dar o próximo passo?
              </h3>
              <p className="mt-2 text-gray-600">
                Clique para falar comigo no WhatsApp ou me siga nas redes.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                <Link
                  href={WHATSAPP_CTA}
                  className={`inline-flex items-center gap-2 rounded-full ${BRAND.primary} ${BRAND.primaryHover} px-5 py-3 text-sm font-semibold text-white`}
                >
                  {REDES[2].icon}
                  <span>Falar no WhatsApp</span>
                </Link>
              </div>
            </div>

            <div className="md:justify-self-end">
              <div className="flex items-center gap-3">
                {REDES.slice(0, 2).map((r) => (
                  <Link
                    key={r.nome}
                    href={r.href}
                    className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                    target="_blank"
                  >
                    {r.icon}
                    <span>{r.nome}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>© {new Date().getFullYear()} Prof. Luana Araújo — Todos os direitos reservados.</p>
            <div className="flex items-center gap-4">
              <Link href="/pessoal" className="hover:underline">
                Início
              </Link>
              <Link href="#mentorias" className="hover:underline">
                Mentorias
              </Link>
              <Link href={WHATSAPP_CTA} className="hover:underline">
                Contato
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
