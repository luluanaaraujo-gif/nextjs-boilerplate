import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Clube Aprova ENCCEJA | Prof. Luana Araujo",
  description:
    "Trilha da Aprovação Guiada: plano passo a passo, aulas objetivas e checklist do que mais cai no ENCCEJA. Assinatura mensal — simples, acessível e sem burocracia.",
  openGraph: {
    title: "Clube Aprova ENCCEJA | Prof. Luana Araujo",
    description:
      "Assine por um valor acessível, estude com trilhas semanais e conquiste seu diploma pelo ENCCEJA.",
    images: ["/assets/encceja-trabalho.png"],
  },
};

// ⚡ CONFIG RÁPIDA
const WHATSAPP =
  "https://wa.me/?text=Olá%20Luana%2C%20quero%20entrar%20no%20Clube%20Aprova%20ENCCEJA!";
const BRAND = {
  primary: "#0ea5e9",
  secondary: "#fbbf24",
  dark: "#0b1220",
};
const HERO_IMAGE = "/assets/encceja-trabalho.png";
const PRICE = "R$ 29,90/mês";
const PAYMENT_LINK = "https://mpago.li/1meRf21m";

function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/90 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span
            className="inline-flex h-8 w-8 rounded-xl"
            style={{ background: BRAND.primary }}
            aria-hidden
          />
          <strong className="text-slate-900">Prof. Luana Araujo</strong>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-slate-700">
          <Link href="/#mentorias" className="hover:text-slate-900">
            Mentorias
          </Link>
          <Link href="/pessoal" className="hover:text-slate-900">
            Quem sou eu
          </Link>
          <Link href="#faq" className="hover:text-slate-900">
            Dúvidas
          </Link>
          <a
            href="#matricula"
            className="inline-flex items-center rounded-xl px-4 py-2 font-medium"
            style={{ background: BRAND.secondary, color: "#111827" }}
          >
            Quero começar agora
          </a>
        </nav>
      </div>
    </header>
  );
}

export default function Page() {
  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-12 lg:py-20 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium"
              style={{ background: "#ecfeff", color: BRAND.primary }}
            >
              ✅ Trilha da Aprovação Guiada • Comece hoje
            </div>

            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Você merece mais do que um emprego que não te faz feliz.
            </h1>

            <p className="mt-4 text-lg text-slate-700 leading-relaxed">
              O <strong>Clube Aprova ENCCEJA</strong> é o seu primeiro passo para
              conquistar o diploma do Ensino Fundamental ou Médio sem voltar para a escola tradicional.
              Com um plano claro, aulas objetivas e acompanhamento direto pelo WhatsApp,
              você estuda o que <em>realmente</em> cai na prova, no seu ritmo.
            </p>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a
                href={PAYMENT_LINK}
                target="_blank"
                rel="noopener"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold text-white shadow-md hover:scale-105 transition-transform"
                style={{ background: BRAND.primary }}
              >
                🏆 Assinar agora — {PRICE}
              </a>
              <a
                href={WHATSAPP}
                target="_blank"
                className="inline-flex items-center justify-center rounded-xl px-5 py-3 font-semibold border"
                style={{ borderColor: BRAND.primary, color: BRAND.dark }}
              >
                Tirar dúvidas no WhatsApp
              </a>
            </div>

            <p className="mt-3 text-sm text-slate-600">
              ✅ Assinatura: <strong>{PRICE}</strong> • Cancele quando quiser •
              Acesso imediato às trilhas
            </p>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-black/5">
              <Image
                src={HERO_IMAGE}
                alt="Pessoa trabalhando em área que não gosta por não ter concluído os estudos"
                width={1200}
                height={900}
                className="w-full h-auto object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mecanismos */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-10 grid md:grid-cols-3 gap-6">
          <Mechanism
            title="Trilha da Aprovação Guiada"
            desc="Você não precisa saber por onde começar — eu te mostro o caminho certo, semana a semana, com metas pequenas e checklist do que mais cai."
            quote="Você segue o plano. Eu garanto o caminho."
          />
          <Mechanism
            title="Netflix da Educação"
            desc="Assinatura acessível, conteúdo sob demanda e acompanhamento. Troque o hábito de maratonar séries por maratonar conquistas."
            quote="Transforme o valor da Netflix em um investimento na sua liberdade."
          />
          <Mechanism
            title="Método 3x Simples"
            desc="Aulas curtas, checklist do essencial e trilhas semanais. 3x mais simples, rápido e possível do que um supletivo tradicional."
            quote="3x mais simples. 3x mais rápido. 3x mais possível."
          />
        </div>
      </section>

      {/* Para quem é */}
      <section className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-extrabold text-slate-900">É para você que…</h2>
          <div className="mt-6 grid md:grid-cols-2 gap-4">
            {[
              "Já tentou voltar a estudar, mas a rotina não deixou.",
              "Sente vergonha de não ter o diploma e evita falar sobre isso.",
              "Trabalha em algo que não gosta porque as melhores vagas exigem o ensino médio.",
              "Acredita que estudar de novo seria difícil demais.",
            ].map((t, i) => (
              <div key={i} className="rounded-xl border p-4 text-slate-700">
                • {t}
              </div>
            ))}
          </div>
          <p className="mt-6 text-slate-700">
            A boa notícia: o <strong>ENCCEJA</strong> é um exame do governo que garante o{" "}
            <strong>mesmo diploma</strong> de quem concluiu os estudos em escola regular —
            e eu te conduzo passo a passo até lá.
          </p>
        </div>
      </section>

      {/* Como funciona */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-extrabold text-slate-900">Como funciona o Clube</h2>

          <div className="mt-6 grid md:grid-cols-2 gap-5">
            <Card title="Trilhas semanais" desc="O que estudar e quando, sem adivinhar." />
            <Card title="Aulas curtas e objetivas" desc="Direto ao ponto do que mais cai." />
            <Card title="Checklist ENCCEJA" desc="Acompanhe o que já dominou e o que falta." />
            <Card title="Comunidade no WhatsApp" desc="Tire dúvidas e receba apoio real." />
            <Card title="Assinatura mensal" desc="Acessível, recorrente e sem burocracia." />
            <Card title="Cancele quando quiser" desc="Liberdade total e zero risco." />
          </div>

          <div className="mt-8">
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center rounded-xl px-6 py-3 font-semibold text-white"
              style={{ background: BRAND.primary }}
            >
              Quero entrar agora — {PRICE}
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-white">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-3xl font-extrabold text-slate-900">Dúvidas frequentes</h2>
          <div className="mt-6 space-y-4">
            <Faq
              q="Preciso voltar para a escola?"
              a="Não. Você estuda online, com trilhas semanais e aulas objetivas focadas no que cai no ENCCEJA."
            />
            <Faq
              q="O diploma é válido?"
              a="Sim. O ENCCEJA dá o mesmo diploma de quem concluiu o Ensino Fundamental ou Médio em escola regular, válido em todo o país."
            />
            <Faq
              q="Como funciona a assinatura?"
              a="Você paga um valor mensal acessível (como uma assinatura de streaming), tem acesso às trilhas, aulas e comunidade, e pode cancelar quando quiser."
            />
            <Faq
              q="Quais formas de pagamento?"
              a="Cartão de crédito (recorrente mensal). Assim que confirmar, seu acesso é imediato."
            />
            <Faq
              q="Posso cancelar quando quiser?"
              a="Sim. A assinatura é mensal e você pode cancelar a qualquer momento, sem multas."
            />
            <Faq
              q="Tem garantia?"
              a="Sim. Você tem 7 dias para testar o clube sem risco. Se não for pra você, é só cancelar nesse período."
            />
          </div>
        </div>
      </section>

      {/* Chamada final */}
      <section id="matricula" className="bg-slate-900">
        <div className="mx-auto max-w-6xl px-4 py-16 text-center">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-white">
            O futuro não espera — mas você pode decidir começar hoje.
          </h2>
          <p className="mt-4 text-slate-300">
            Por menos do que o valor da Netflix, você investe em algo que muda sua vida.
            Assinatura mensal. Sem burocracia. Cancele quando quiser.
          </p>

          <div className="mt-7 flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={PAYMENT_LINK}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold"
              style={{ background: BRAND.secondary, color: "#111827" }}
            >
              Fazer minha matrícula — {PRICE}
            </a>
            <a
              href="#faq"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-white/20 text-white"
            >
              Ver como funciona
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t">
        <div className="mx-auto max-w-6xl px-4 py-8 text-sm text-slate-500 flex items-center justify-between">
          <p>
            © {new Date().getFullYear()} Prof. Luana Araujo — Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com/prof.luanaaraujo"
              target="_blank"
              className="hover:text-slate-700"
            >
              @prof.luanaaraujo
            </a>
            <a href={WHATSAPP} target="_blank" className="hover:text-slate-700">
              WhatsApp
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

function Mechanism({
  title,
  desc,
  quote,
}: {
  title: string;
  desc: string;
  quote: string;
}) {
  return (
    <div className="rounded-2xl p-6 ring-1 ring-black/5 bg-white">
      <h3 className="font-bold text-slate-900 text-lg">{title}</h3>
      <p className="mt-2 text-slate-700">{desc}</p>
      <p className="mt-3 text-sm text-slate-500 italic">“{quote}”</p>
    </div>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <div className="rounded-2xl p-6 bg-white ring-1 ring-black/5">
      <h3 className="font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-slate-700">{desc}</p>
    </div>
  );
}

function Faq({ q, a }: { q: string; a: string }) {
  return (
    <details className="rounded-xl border p-4">
      <summary className="cursor-pointer font-semibold text-slate-900">{q}</summary>
      <p className="mt-2 text-slate-700">{a}</p>
    </details>
  );
}
