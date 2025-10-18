// app/mentorias/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

const WHATSAPP_CTA =
  "https://wa.me/5521XXXXXXXXX?text=Oi%20Luana,%20quero%20saber%20mais%20sobre%20as%20mentorias!";

// --- Base de serviços: adicione aqui cada mentoria (um por vez) ---
const SERVICES = {
  encceja: {
    title: "Mentoria ENCCEJA",
    eyebrow: "Trilha guiada • ENCCEJA",
    description:
      "Plano claro até a prova: trilhas semanais, aulas objetivas, checklist do que mais cai e comunidade no WhatsApp para tirar dúvidas.",
    bullets: [
      "Aulas gravadas e ao vivo (curtas e objetivas)",
      "Trilhas semanais com o que fazer a cada dia",
      "Checklist do que mais cai",
      "Comunidade no WhatsApp para dúvidas",
    ],
    hero: {
      image: "/assets/luana-hero.png", // troque se quiser outra imagem
      alt: "Luana Araújo",
    },
    highlights: [
      { label: "Carga horária", value: "Flexível (com trilhas semanais)" },
      { label: "Suporte", value: "Comunidade + plantões de dúvida" },
      { label: "Material", value: "Resumos, mapas mentais e simulados" },
    ],
    faq: [
      {
        q: "Para quem é a mentoria ENCCEJA?",
        a: "Para quem quer um plano simples e objetivo para conquistar o certificado com segurança.",
      },
      {
        q: "Como acontecem as aulas?",
        a: "Aulas curtas e diretas, gravadas e ao vivo, com trilhas semanais para manter a constância.",
      },
      {
        q: "Tenho suporte durante os estudos?",
        a: "Sim! Você participa da comunidade no WhatsApp e conta com plantões de dúvida.",
      },
    ],
    seo: {
      title: "Mentoria ENCCEJA • Prof. Luana Araújo",
      description:
        "Trilhas semanais, aulas objetivas e checklist do que mais cai. Comunidade no WhatsApp e plano claro até a prova.",
    },
    ctaLabel: "Quero entrar na mentoria",
  },

  // Exemplo de “molde” para próximos (deixei como referência):
  // "cefet": { ... },
  // "pedro-ii": { ... },
  // "reforco-escolar": { ... },
  // "ifrj": { ... },
  // "uerj-quimica": { ... },
} as const;

type Slug = keyof typeof SERVICES;

export async function generateMetadata({
  params,
}: {
  params: { slug: Slug };
}): Promise<Metadata> {
  const data = SERVICES[params.slug];
  if (!data) {
    return {
      title: "Mentoria • Prof. Luana Araújo",
      description:
        "Mentorias para ENCCEJA, IFRJ, UERJ (Química), Pedro II e CEFET-RJ. Plano claro, constância e apoio próximo.",
    };
  }
  return {
    title: data.seo.title,
    description: data.seo.description,
    openGraph: {
      title: data.seo.title,
      description: data.seo.description,
      images: [
        {
          url: data.hero.image,
          width: 1200,
          height: 630,
          alt: data.hero.alt,
        },
      ],
    },
  };
}

export default function ServicePage({
  params,
}: {
  params: { slug: Slug };
}) {
  const data = SERVICES[params.slug];
  if (!data) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-16">
        <h1 className="text-3xl font-bold">Mentoria não encontrada</h1>
        <p className="mt-4 text-gray-600">
          Essa página ainda não foi publicada. Volte para a página principal.
        </p>
        <Link
          href="/pessoal"
          className="inline-block mt-6 rounded-xl bg-amber-600 px-4 py-3 text-white hover:bg-amber-700"
        >
          Voltar
        </Link>
      </main>
    );
  }

  return (
    <main className="max-w-6xl mx-auto px-4 lg:px-8 py-12">
      {/* HERO */}
      <section className="grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <span className="inline-block text-xs uppercase tracking-wide text-amber-700 bg-amber-100 rounded-full px-3 py-1">
            {data.eyebrow}
          </span>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
            {data.title}
          </h1>
          <p className="mt-4 text-gray-700 leading-relaxed">
            {data.description}
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <Link
              href={WHATSAPP_CTA}
              className="rounded-xl bg-amber-600 px-5 py-3 text-white font-medium hover:bg-amber-700"
              target="_blank"
            >
              {data.ctaLabel}
            </Link>
            <Link
              href="/pessoal#mentorias"
              className="rounded-xl border border-amber-300 px-5 py-3 text-amber-800 hover:bg-amber-50"
            >
              Ver outras mentorias
            </Link>
          </div>
        </div>

        <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-2 ring-amber-200">
          <Image
            src={data.hero.image}
            alt={data.hero.alt}
            fill
            className="object-cover"
            sizes="(max-width:1024px) 100vw, 50vw"
            priority
          />
        </div>
      </section>

      {/* O QUE INCLUI */}
      <section className="mt-12">
        <h2 className="text-2xl font-bold">O que você recebe</h2>
        <ul className="mt-4 grid md:grid-cols-2 gap-3">
          {data.bullets.map((b) => (
            <li
              key={b}
              className="flex items-start gap-3 rounded-xl border border-amber-200/70 bg-white px-4 py-3"
            >
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-amber-500" />
              <span className="text-gray-800">{b}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* HIGHLIGHTS */}
      <section className="mt-10">
        <div className="grid sm:grid-cols-3 gap-4">
          {data.highlights.map((h) => (
            <div
              key={h.label}
              className="rounded-2xl border border-amber-200 bg-amber-50/60 p-4"
            >
              <div className="text-xs uppercase tracking-wide text-amber-700">
                {h.label}
              </div>
              <div className="mt-1 text-gray-900 font-medium">{h.value}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="mt-12">
        <h3 className="text-xl font-semibold">Perguntas frequentes</h3>
        <div className="mt-4 space-y-4">
          {data.faq.map((item, idx) => (
            <details
              key={idx}
              className="group rounded-xl border border-amber-200 bg-white px-4 py-3"
            >
              <summary className="cursor-pointer font-medium text-gray-900 marker:hidden">
                {item.q}
              </summary>
              <p className="mt-2 text-gray-700">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="mt-12 rounded-2xl border border-amber-200 bg-amber-50 p-6 flex items-center justify-between gap-6 flex-wrap">
        <div>
          <h4 className="text-lg font-semibold">
            Vamos começar a sua preparação?
          </h4>
          <p className="text-gray-700">
            Me chame no WhatsApp para eu te orientar no primeiro passo.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link
            href={WHATSAPP_CTA}
            target="_blank"
            className="rounded-xl bg-amber-600 px-5 py-3 text-white font-medium hover:bg-amber-700"
          >
            Falar no WhatsApp
          </Link>
          <Link
            href="/pessoal"
            className="rounded-xl border border-amber-300 px-5 py-3 text-amber-800 hover:bg-amber-100"
          >
            Voltar
          </Link>
        </div>
      </section>
    </main>
  );
}
