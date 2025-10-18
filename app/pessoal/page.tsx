// app/pessoal/page.tsx
import Image from "next/image";
import Link from "next/link";

// CTA padrão de WhatsApp (pode trocar a mensagem)
const WHATSAPP =
  "https://wa.me/5521997331448?text=Ol%C3%A1%20Luana%2C%20quero%20saber%20mais%20sobre%20as%20mentorias!";

const services = [
  {
    key: "encceja",
    title: "Clube Aprova ENCCEJA",
    bullet:
      "Trilhas semanais, aulas objetivas e checklist do que mais cai. Comunidade e plano claro até a prova.",
    img: "/assets/clubeenceeja.png",
    groupLink: "https://chat.whatsapp.com/EhYhaIcxCvO7Cq2gBeceMd?mode=wwc",
    payLink: "https://mpago.li/1meRf21",
  },
  {
    key: "ifrj",
    title: "Preparação IFRJ",
    bullet:
      "Conteúdos-chave com foco em exercícios e simulados estratégicos. Estudo simples, direto e eficiente.",
    img: "/assets/ifrjimagem.png",
    groupLink: "https://chat.whatsapp.com/FgNimaljASF7uHwMM4bLrN?mode=wwc",
    payLink: "https://mpago.li/1RdTFbM",
  },
  {
    key: "uerj",
    title: "UERJ • Química",
    bullet:
      "Revisão dirigida, listas comentadas e mapa do que mais cai. Material claro e acompanhamento.",
    img: "/assets/uerjimagem.png",
    groupLink: "https://chat.whatsapp.com/DRI4lqURAk69zjCJYCoS6p?mode=wwc",
    payLink: "https://mpago.li/1RdTFbM",
  },
  {
    key: "cefet",
    title: "Mentoria CEFET",
    bullet:
      "Planejamento prático, revisão do que mais cai e acompanhamento de perto até a prova.",
    img: "/assets/luana-hero.png", // troque quando tiver a imagem do CEFET
    groupLink: "https://wa.me/5521997331448?text=Tenho%20interesse%20na%20mentoria%20CEFET",
    payLink: "https://mpago.li/1RdTFbM",
  },
];

const testimonials = [
  {
    name: "Ana Paula",
    text:
      "A Luana descomplica de um jeito único. Passei no ENCCEJA estudando com as trilhas semanais e os checklists!",
  },
  {
    name: "Gustavo M.",
    text:
      "Para a UERJ (Química), a revisão dirigida e as listas comentadas fizeram toda a diferença. Recomendo muito!",
  },
  {
    name: "Larissa C.",
    text:
      "Eu precisava de um plano claro e acompanhamento. A mentoria do CEFET me deixou segura para a prova.",
  },
];

const socials = [
  { name: "Instagram", href: "https://instagram.com" },
  { name: "YouTube", href: "https://youtube.com" },
  { name: "TikTok", href: "https://tiktok.com" },
];

export const metadata = {
  title: "Prof. Luana Araújo — Mentorias",
  description:
    "Mentorias ENCCEJA, IFRJ, UERJ (Química) e CEFET. Trilha, plano e acompanhamento de perto para sua aprovação.",
};

export default function PersonalLanding() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* HERO */}
      <header className="relative overflow-hidden border-b bg-amber-50">
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:grid-cols-2 sm:py-16">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Transforme estudo em aprovação
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-700 sm:text-lg">
              Mentorias para ENCCEJA, IFRJ, UERJ (Química) e CEFET com aulas
              objetivas, trilhas semanais e acompanhamento próximo.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#servicos"
                className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-amber-600"
              >
                Ver mentorias
              </a>
              <Link
                href={WHATSAPP}
                target="_blank"
                className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold hover:border-amber-400 hover:text-amber-600"
              >
                Tirar uma dúvida
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-amber-200/40 blur-2xl" />
            <Image
              src="/assets/luana-hero.png"
              alt="Luana Araújo"
              width={880}
              height={880}
              priority
              className="h-auto w-full max-w-[440px] rounded-3xl border border-amber-100 object-cover shadow-xl mx-auto"
            />
          </div>
        </div>
      </header>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold sm:text-3xl">Mentorias</h2>
            <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
              Escolha a trilha certa para o seu objetivo.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <article
                key={s.key}
                className="group overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
              >
                <div className="relative">
                  <Image
                    src={s.img}
                    alt={s.title}
                    width={600}
                    height={380}
                    className="h-40 w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <h3 className="absolute bottom-3 left-3 right-3 text-base font-semibold text-white drop-shadow">
                    {s.title}
                  </h3>
                </div>

                <div className="p-4">
                  <p className="min-h-[56px] text-sm text-gray-600">{s.bullet}</p>
                  <div className="mt-4 flex flex-col gap-2">
                    <Link
                      href={s.groupLink}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:border-amber-400 hover:text-amber-600"
                    >
                      Entrar no grupo
                    </Link>
                    <Link
                      href={s.payLink}
                      target="_blank"
                      className="inline-flex items-center justify-center rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600"
                    >
                      Fazer pagamento
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* CTA abaixo dos cards */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-6 text-center">
            <p className="text-sm text-amber-900 sm:text-base">
              Não sabe por onde começar? Fale comigo e eu te indico a melhor trilha.
            </p>
            <Link
              href={WHATSAPP}
              target="_blank"
              className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-amber-600"
            >
              Falar no WhatsApp
            </Link>
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section id="sobre" className="py-14 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:grid-cols-2">
          <div>
            <span className="rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-800">
              Quem sou eu
            </span>
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Prof. Luana Araújo</h2>
            <p className="mt-3 text-gray-700">
              Sou professora e mentora com mais de 15 anos de experiência, ajudando
              alunos a transformar dificuldades em aprendizado. Minha abordagem é
              prática e direta ao ponto: trilhas semanais, mapas do que mais cai,
              revisão inteligente e listas comentadas.
            </p>
            <ul className="mt-6 space-y-2 text-gray-700">
              <li>• ENCCEJA — plano claro até a prova</li>
              <li>• IFRJ — conteúdo-chave e simulados estratégicos</li>
              <li>• UERJ • Química — revisão dirigida e listas comentadas</li>
              <li>• CEFET — planejamento prático com acompanhamento</li>
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#servicos"
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:border-amber-400 hover:text-amber-600"
              >
                Ver mentorias
              </a>
              <Link
                href={WHATSAPP}
                target="_blank"
                className="rounded-full bg-amber-500 px-4 py-2 text-sm font-semibold text-white shadow hover:bg-amber-600"
              >
                Conversar comigo
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-amber-200/50 to-transparent blur-2xl" />
            <Image
              src="/assets/luana-hero.png"
              alt="Luana Araújo"
              width={640}
              height={640}
              className="h-auto w-full rounded-3xl border border-amber-100 object-cover shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* DEPOIMENTOS */}
      <section id="depoimentos" className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="text-2xl font-bold sm:text-3xl">Depoimentos</h2>
          <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
            Histórias reais de alunos que estudaram com método e direcionamento.
          </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((t, i) => (
              <figure key={i} className="rounded-2xl border bg-white p-5 shadow-sm">
                <blockquote className="text-gray-700">“{t.text}”</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 font-semibold text-amber-800">
                    {t.name[0]}
                  </div>
                  <div className="text-sm font-medium">{t.name}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* REDES + CONTATO */}
      <section id="contato" className="py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="text-xl font-bold">Minhas redes</h3>
              <p className="mt-2 text-gray-600">
                Conteúdos, revisões e dicas práticas no dia a dia.
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {socials.map((s) => (
                  <Link
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:border-amber-400 hover:text-amber-600"
                  >
                    {s.name}
                  </Link>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-amber-200 bg-amber-50 p-6">
              <h3 className="text-xl font-bold">Fale comigo</h3>
              <p className="mt-2 text-gray-700">
                Quer ajuda para escolher a trilha certa? Me chama no WhatsApp!
              </p>
              <Link
                href={WHATSAPP}
                target="_blank"
                className="mt-4 inline-flex rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-amber-600"
              >
                Abrir WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
