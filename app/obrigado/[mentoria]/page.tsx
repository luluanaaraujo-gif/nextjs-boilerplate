// app/obrigado/[mentoria]/page.tsx
import Link from "next/link";
import { notFound } from "next/navigation";

export const dynamic = "force-static";

const BRAND = { primary: "#0ea5e9", secondary: "#fbbf24", dark: "#0b1220" };

// 🔗 Cada mentoria com seu grupo do WhatsApp e página de venda correspondente
const MENTORIAS: Record<
  string,
  { titulo: string; grupoWhats: string; paginaVenda: string }
> = {
  "clube-aprova-encceja": {
    titulo: "Clube Aprova ENCCEJA",
    grupoWhats: "https://chat.whatsapp.com/EhYhaIcxCvO7Cq2gBeceMd",
    paginaVenda: "/clube-aprova-encceja",
  },
  "pedro-ii": {
    titulo: "Mentoria Pedro II",
    grupoWhats: "https://chat.whatsapp.com/HPO5mIWOuOvKpYzHjNSJng",
    paginaVenda: "/mentorias/pedro-ii",
  },
  uerj: {
    titulo: "Mentoria UERJ (Específico de Química)",
    grupoWhats: "https://chat.whatsapp.com/DRI4lqURAk69zjCJYCoS6p",
    paginaVenda: "/mentorias/uerj",
  },
  ifrj: {
    titulo: "Mentoria IFRJ",
    grupoWhats: "https://chat.whatsapp.com/FgNimaljASF7uHwMM4bLrN",
    paginaVenda: "/mentorias/ifrj",
  },
};

export async function generateMetadata({
  params,
}: {
  params: { mentoria: string };
}) {
  const cfg = MENTORIAS[params.mentoria];
  if (!cfg)
    return {
      title: "Obrigado | Prof. Luana Araujo",
      robots: { index: false },
    };
  return {
    title: `Obrigado pela matrícula | ${cfg.titulo}`,
    description:
      "Pagamento confirmado. Entre agora no grupo do WhatsApp e comece sua Trilha da Aprovação Guiada.",
    robots: { index: false },
  };
}

export default function ObrigadoPage({
  params,
  searchParams,
}: {
  params: { mentoria: string };
  searchParams?: Record<string, string | string[] | undefined>;
}) {
  const cfg = MENTORIAS[params.mentoria];
  if (!cfg) return notFound();

  const nome =
    typeof searchParams?.nome === "string" ? searchParams.nome : undefined;
  const status =
    typeof searchParams?.status === "string" ? searchParams.status : undefined;

  return (
    <main className="min-h-screen bg-white">
      {/* Cabeçalho */}
      <header className="border-b bg-white">
        <div className="mx-auto max-w-4xl px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span
              className="inline-flex h-8 w-8 rounded-xl"
              style={{ background: BRAND.primary }}
            />
            <strong className="text-slate-900">Prof. Luana Araujo</strong>
          </Link>
          <Link
            href={cfg.paginaVenda}
            className="text-sm text-slate-600 hover:text-slate-900"
          >
            Voltar à mentoria
          </Link>
        </div>
      </header>

      {/* Conteúdo principal */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-3xl border p-6 md:p-10 bg-slate-50 shadow-sm">
          <div
            className="mb-4 inline-flex items-center gap-2 rounded-full px-3 py-1 text-sm font-medium"
            style={{ background: "#ecfeff", color: BRAND.primary }}
          >
            ✅ Pagamento {status === "approved" ? "aprovado" : "confirmado"} •
            Acesso liberado
          </div>

          <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
            {nome ? `Parabéns, ${nome}! ` : "Parabéns!"}
            Você agora faz parte da{" "}
            <span className="whitespace-nowrap">{cfg.titulo}</span>.
          </h1>

          <p className="mt-4 text-slate-700 text-lg">
            Falta apenas um passo: entrar no{" "}
            <strong>grupo exclusivo do WhatsApp</strong> dessa mentoria.
          </p>
          <ul className="mt-3 ml-5 text-slate-700 list-disc space-y-1">
            <li>Receba o link de acesso às aulas e trilhas.</li>
            <li>Fique por dentro dos avisos e lives semanais.</li>
            <li>Tire dúvidas diretamente comigo e com a comunidade.</li>
          </ul>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href={cfg.grupoWhats}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-white shadow-md hover:scale-105 transition"
              style={{ background: BRAND.primary }}
            >
              💬 Entrar no grupo do WhatsApp
            </a>
            <Link
              href={`${cfg.paginaVenda}#faq`}
              className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border"
              style={{ borderColor: BRAND.primary, color: BRAND.dark }}
            >
              Ver dúvidas frequentes
            </Link>
          </div>

          {/* Passos */}
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            <Step
              num="1"
              title="Confirmação no e-mail"
              desc="Você receberá o e-mail confirmando sua assinatura."
            />
            <Step
              num="2"
              title="Entre no grupo"
              desc="Clique no botão acima e acesse o WhatsApp da sua mentoria."
            />
            <Step
              num="3"
              title="Comece hoje"
              desc="Siga a primeira trilha, marque o checklist e veja seu progresso."
            />
          </div>

          {/* Bloco de suporte */}
          <div className="mt-10 rounded-2xl bg-white p-5 ring-1 ring-black/5">
            <h2 className="font-semibold text-slate-900">Precisa de ajuda?</h2>
            <p className="mt-2 text-slate-700">
              Se tiver qualquer dificuldade com o acesso, fale comigo:
            </p>
            <div className="mt-3">
              <a
                href="https://wa.me/?text=Olá%20Luana%2C%20acabei%20de%20assinar%20e%20preciso%20de%20ajuda%20com%20o%20acesso."
                target="_blank"
                rel="noopener"
                className="text-sm underline text-slate-700 hover:text-slate-900"
              >
                👉 Falar com a Prof. Luana no WhatsApp
              </a>
            </div>
          </div>

          <p className="mt-8 text-xs text-slate-500">
            O ENCCEJA é o exame oficial do Governo Federal. O {cfg.titulo} prepara
            você para essa prova.
          </p>
        </div>
      </section>
    </main>
  );
}

function Step({ num, title, desc }: { num: string; title: string; desc: string }) {
  const BRAND = { primary: "#0ea5e9" };
  return (
    <div className="rounded-xl border bg-white p-4">
      <div className="text-sm font-bold" style={{ color: BRAND.primary }}>
        Passo {num}
      </div>
      <div className="mt-1 font-semibold text-slate-900">{title}</div>
      <div className="mt-1 text-slate-700 text-sm">{desc}</div>
    </div>
  );
}

