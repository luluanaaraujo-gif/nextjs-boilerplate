// app/pessoal/page.tsx
import Image from "next/image";
import Link from "next/link";

/**
 * 🔧 troque por seu link curto do WhatsApp (ou com número):
 *  - Com número:  https://wa.me/5521XXXXXXXXX?text=Olá%20Luana%2C%20quero%20saber%20mais%20sobre%20as%20mentorias!
 *  - Com link curto: https://wa.me/message/SEU_CODIGO
 */
const WHATSAPP_CTA =
  "https://wa.me/?text=Olá%20Luana%2C%20quero%20saber%20mais%20sobre%20as%20mentorias!";

/** Paleta baseada na sua foto (âmbar/azul) */
const BRAND = {
  primary: "#f59e0b", // amber-500
  primaryDark: "#d97706", // amber-600
  dark: "#0b1220", // azul escuro/black-azulado
};

const services = [
  {
    key: "encceja",
    title: "Clube Aprova ENCCEJA",
    bullet: "Trilhas semanais, aulas objetivas e checklist do que mais cai.",
    img: "/assets/clubeenceeja.png",
    groupLink:
      "https://chat.whatsapp.com/EhYhaIcxCvO7Cq2gBeceMd?mode=wwc",
    payLink: "https://mpago.li/1meRf21",
  },
  {
    key: "ifrj",
    title: "Preparação IFRJ",
    bullet:
      "Conteúdos-chave com foco em resolução de exercícios e simulados estratégicos.",
    img: "/assets/ifrimagem.png", // ajuste para seu nome exato se for .png.jpg
    groupLink:
      "https://chat.whatsapp.com/FgNimaljASF7uHwMM4bLrN?mode=wwc",
    payLink: "https://mpago.li/1RdTFbM",
  },
  {
    key: "uerj-quimica",
    title: "UERJ • Química",
    bullet:
      "Reforço em Química voltado para prova: revisão dirigida, listas comentadas e mapa do que mais cai.",
    img: "/assets/uerjimagem.png",
    groupLink:
      "https://chat.whatsapp.com/DRI4lqURAk69zjCJYCoS6p?mode=wwc",
    payLink: "https://mpago.li/1RdTFbM",
  },
  {
    key: "cefet",
    title: "Mentoria CEFET",
    bullet:
      "Planejamento prático e acompanhamento de perto para chegar confiante na prova.",
    img: "/assets/colegiocp2.png", // usando esta imagem até você enviar a do CEFET
    // se tiver grupo de CEFET, coloque aqui:
    groupLink: "https://wa.me/?text=Tenho%20interesse%20na%20mentoria%20CEFET",
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
      "Eu precisava de um plano claro e acompanhamento. A mentoria CEFET me deixou segura para a prova.",
  },
];

const socials = [
  {
    name: "Instagram",
    href: "https://instagram.com", // troque pelo seu
  },
  {
    name: "YouTube",
    href: "https://youtube.com", // troque pelo seu
  },
  {
    name: "TikTok",
    href: "https://tiktok.com", // troque pelo seu
  },
];

export const metadata = {
  title: "Prof. Luana Araújo — Mentorias",
  description:
    "Mentorias ENCCEJA, IFRJ, UERJ (Química) e CEFET. Trilha, plano e acompanhamento de perto para sua aprovação.",
};

export default function PersonalHome() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link href="/pessoal" className="group inline-flex items-center gap-3">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full ring-2 ring-offset-2 ring-amber-500">
              <Image
                src="/assets/luana-hero.png"
                alt="Luana Araújo"
                width={36}
                height={36}
                className="h-full w-full rounded-full object-cover"
                priority
              />
            </span>
            <span className="font-semibold tracking-tight">
              Prof. Luana Araújo
            </span>
          </Link>

          <div className="hidden gap-6 sm:flex">
            <a href="#servicos" className="hover:text-amber-600">
              Mentorias
            </a>
            <a href="#sobre" className="hover:text-amber-600">
              Sobre
            </a>
            <a href="#depoimentos" className="hover:text-amber-600">
              Depoimentos
            </a>
            <a href="#contato" className="hover:text-amber-600">
              Contato
            </a>
          </div>

          <Link
            href={WHATSAPP_CTA}
            target="_blank"
            className="hidden rounded-full bg-amber-500 px-4 py-2 text-sm font-medium text-white shadow hover:bg-amber-600 sm:inline-block"
          >
            Falar no WhatsApp
          </Link>
        </div>
      </nav>

      {/* HERO */}
      <header className="relative overflow-hidden">
        <div
          className="absolute inset-0 -z-10"
          style={{
            background: `linear-gradient(180deg, ${BRAND.primary}20, transparent 35%), radial-gradient(1200px 600px at 10% -10%, ${BRAND.primary}15, transparent 60%)`,
          }}
        />
        <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:grid-cols-2 sm:py-16">
          <div className="order-2 sm:order-1">
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Transformando dificuldades em aprendizado
            </h1>
            <p className="mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
              Mais de 15 anos ajudando alunos a conquistar objetivos com trilhas
              inteligentes, plano claro e acompanhamento próximo. ENCCEJA, IFRJ,
              UERJ (Química) e CEFET.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#servicos"
                className="rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-amber-600"
              >
                Ver mentorias
              </a>
              <Link
                href={WHATSAPP_CTA}
                target="_blank"
                className="rounded-full border border-gray-300 px-5 py-2.5 text-sm font-semibold hover:border-amber-400 hover:text-amber-600"
              >
                Tirar uma dúvida
              </Link>
            </div>
          </div>

          <div className="order-1 sm:order-2">
            <div className="relative mx-auto w-full max-w-[440px]">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-amber-200/40 blur-2xl" />
              <Image
                src="/assets/luana-hero.png"
                alt="Luana Araújo"
                width={880}
                height={880}
                priority
                className="h-auto w-full rounded-3xl border border-amber-100 object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* SERVIÇOS */}
      <section id="servicos" className="bg-gray-50 py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-4">
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-bold sm:text-3xl">Mentorias</h2>
              <p className="mt-2 max-w-2xl text-sm text-gray-600 sm:text-base">
                Escolha a trilha certa para o seu objetivo e estude com
                direcionamento e constância.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s) => (
              <div
                key={s.key}
                className="group relative overflow-hidden rounded-2xl border bg-white shadow-sm transition hover:shadow-md"
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
              </div>
            ))}
          </div>

          {/* CTA abaixo dos cards */}
          <div className="mx-auto mt-10 flex max-w-3xl flex-col items-center gap-3 rounded-2xl border border-amber-200 bg-amber-50 px-6 py-6 text-center">
            <p className="text-sm text-amber-900 sm:text-base">
              Não sabe por onde começar? Fale comigo e eu te indico a melhor
              trilha para o seu caso.
            </p>
            <Link
              href={WHATSAPP_CTA}
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
            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Prof. Luana Araújo
            </h2>
            <p className="mt-3 text-gray-700">
              Sou professora e mentora com mais de 15 anos de experiência,
              ajudando alunos a transformarem dificuldades em aprendizado. Atuo
              com foco em ENCCEJA, IFRJ, UERJ (Química) e CEFET. Minha
              abordagem é prática, clara e focada no que mais cai, com trilhas,
              revisão inteligente e acompanhamento próximo.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="#servicos"
                className="rounded-full border border-gray-300 px-4 py-2 text-sm font-medium hover:border-amber-400 hover:text-amber-600"
              >
                Ver mentorias
              </a>
              <Link
                href={WHATSAPP_CTA}
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
              <figure
                key={i}
                className="rounded-2xl border bg-white p-5 shadow-sm"
              >
                <blockquote className="text-gray-700">{t.text}</blockquote>
                <figcaption className="mt-4 flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-amber-100 font-semibold text-amber-800">
                    {t.name.split(" ")[0][0]}
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
                Quer ajuda para escolher a trilha certa? Fala comigo no
                WhatsApp — respondo rapidinho!
              </p>
              <Link
                href={WHATSAPP_CTA}
                target="_blank"
                className="mt-4 inline-flex rounded-full bg-amber-500 px-5 py-2.5 text-sm font-semibold text-white shadow hover:bg-amber-600"
              >
                Chamar no WhatsApp
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-6 text-center sm:flex-row sm:text-left">
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} Prof. Luana Araújo — Todos os direitos
            reservados
          </p>
          <div className="text-xs text-gray-500">
            Feito com foco no que mais cai • Direção + constância
          </div>
        </div>
      </footer>
    </div>
  );
}
