"use client";

/* app/pessoal/page.tsx */
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

/** ✅ seu link curto do WhatsApp */
const WHATSAPP_CTA =
  "https://wa.me/5521976739159?text=Oi%20Luana%2C%20quero%20saber%20mais%20sobre%20as%20mentorias!";

/** 🎨 paleta usada no tailwind (âmbar + azul-escuro) */
const BRAND = {
  primary: "bg-amber-500",
  primaryHover: "hover:bg-amber-600",
  ring: "ring-amber-200",
  textPrimary: "text-amber-600",
};

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
        <p
          className={`mb-2 inline-block rounded-full px-3 py-1 text-xs font-medium ${BRAND.textPrimary} bg-amber-50`}
        >
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
          {nome
            .split(" ")
            .map((n) => n[0])
            .slice(0, 2)
            .join("")}
        </div>
        <div>
          <p className="text-sm font-semibold text-gray-900">{nome}</p>
          <p className="text-xs text-gray-600">{curso}</p>
        </div>
      </div>
    </div>
  );
}

/** listas que já estavam na sua página (mentorias, depoimentos etc.) */
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

export default function PessoalPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="bg-amber-50/30">
      {/* ========================== */}
      {/*  CABEÇALHO FIXO (NOVO)    */}
      {/* ========================== */}
      <header className="w-full fixed top-0 left-0 bg-[#0b1220] text-white shadow-md z-50">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6">
          <h1 className="text-[15px] font-semibold">Prof. Luana Araújo</h1>

          {/* navegação desktop */}
          <nav className="hidden md:flex gap-6 text-sm">
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
              href="https://www.tiktok.com/@prof.luanaaraujo"
              target="_blank"
              className="rounded-md border border-white/20 px-3 py-1 font-medium hover:bg-white/10"
            >
              TikTok
            </Link>

            <Link
              href={WHATSAPP_CTA}
              target="_blank"
              className="bg-amber-500 hover:bg-amber-600 text-black px-3 py-1 rounded-md transition"
            >
              WhatsApp
            </Link>
          </nav>

          {/* botão mobile (hambúrguer) */}
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Abrir menu"
            className="md:hidden flex items-center justify-center w-8 h-8 border border-white/30 rounded"
          >
            <div
              className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "-rotate-45 translate-y-[5px]" : ""
              }`}
            />
            <div
              className={`absolute h-0.5 w-5 bg-white transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <div
              className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
                menuOpen ? "rotate-45 -translate-y-[5px]" : ""
              }`}
            />
          </button>
        </div>

        {/* menu mobile */}
        {menuOpen && (
          <div className="md:hidden border-t border-white/10 bg-[#0b1220]">
            <div className="mx-auto max-w-6xl px-6 py-3 text-sm flex flex-col gap-3">
              <Link
                href="#mentorias"
                className="hover:text-amber-400"
                onClick={() => setMenuOpen(false)}
              >
                Mentorias
              </Link>
              <Link
                href="#sobre"
                className="hover:text-amber-400"
                onClick={() => setMenuOpen(false)}
              >
                Sobre
              </Link>
              <Link
                href="#contato"
                className="hover:text-amber-400"
                onClick={() => setMenuOpen(false)}
              >
                Contato
              </Link>
              <Link
                href="https://www.tiktok.com/@prof.luanaaraujo"
                target="_blank"
                className="rounded-md border border-white/20 px-3 py-2 font-medium hover:bg-white/10"
                onClick={() => setMenuOpen(false)}
              >
                TikTok
              </Link>
              <Link
                href={WHATSAPP_CTA}
                target="_blank"
                className="rounded-md bg-amber-500 px-3 py-2 font-semibold text-black hover:bg-amber-600"
                onClick={() => setMenuOpen(false)}
              >
                WhatsApp
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* dá um respiro por causa do header fixo */}
      <div className="h-14" />

      {/* ========================== */}
      {/*          HERO              */}
      {/* ========================== */}
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
              (ENCCEJA, IFRJ, UERJ – Química, Pedro II e CEFET-RJ) com trilhas, revisão
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

      {/* ========================== */}
      {/*        MENTORIAS           */}
      {/* ========================== */}
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

      {/* ========================== */}
      {/*       DEPOIMENTOS          */}
      {/* ========================== */}
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

      {/* ========================== */}
      {/*         SOBRE MIM          */}
      {/* ========================== */}
      <section id="sobre" className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="order-2 lg:order-1">
            <SectionTitle eyebrow="Sobre mim" title="Quem é a Prof. Luana Araújo" />
            <p className="mt-3 text-gray-700">
              Sou professora e mentora com mais de 20 anos de experiência ajudando
              alunos a transformar dificuldades em aprendizado. Minha abordagem é
              prática e humana: trilhas, revisões inteligentes, mapas mentais e
              acompanhamento próximo para você estudar com clareza e constância.
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

      {/* ========================== */}
      {/*     CONTATO + REDES        */}
      {/* ========================== */}
      <section id="contato" className="mx-auto max-w-6xl px-4 pb-12">
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
                  Falar no WhatsApp
                </Link>
              </div>
            </div>

            <div className="md:justify-self-end">
              <div className="flex items-center gap-3">
                <Link
                  href="https://instagram.com/prof.luanaaraujo"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span>Instagram</span>
                </Link>
                <Link
                  href="https://youtube.com/@prof.luanaraujo"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span>YouTube</span>
                </Link>
                <Link
                  href="https://www.tiktok.com/@prof.luanaaraujo"
                  target="_blank"
                  className="inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <span>TikTok</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================== */}
      {/*          RODAPÉ            */}
      {/* ========================== */}
      <footer className="border-t bg-white/70">
        <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-3 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Prof. Luana Araújo — Todos os direitos
              reservados.
            </p>
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
