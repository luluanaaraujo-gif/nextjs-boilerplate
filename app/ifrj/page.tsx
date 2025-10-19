import Link from "next/link";

export default function MentoriaIFRJ() {
  const WHATSAPP_CTA =
    "https://wa.me/5521976739159?text=Oi%20Luana%2C%20quero%20saber%20mais%20sobre%20a%20mentoria%20do%20IFRJ!";

  return (
    <main className="bg-amber-50/30 min-h-screen">
      <section className="mx-auto max-w-6xl px-4 pt-10 pb-8">
        <Link
          href="/pessoal#mentorias"
          className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800"
        >
          ← Voltar
        </Link>

        <span className="ml-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
          Intensivo • IFRJ
        </span>

        <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
          Mentoria Intensiva para o IFRJ
        </h1>

        <p className="mt-4 max-w-2xl text-gray-700 leading-relaxed">
          A mentoria ideal para quem vai fazer a prova do IFRJ e quer revisar os
          principais conteúdos com clareza e estratégia. Foco total nos temas
          que mais caem e em simulados direcionados.
        </p>

        <ul className="mt-6 space-y-3 text-gray-700">
          <li>✔️ Simulados comentados e revisões estratégicas</li>
          <li>✔️ Mapas mentais e resumos objetivos</li>
          <li>✔️ Acompanhamento e plano de estudo personalizado</li>
        </ul>

        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href={WHATSAPP_CTA}
            className="inline-flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm"
          >
            Quero participar
          </Link>

          <Link
            href="/pessoal"
            className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-white/60"
          >
            Ver outras mentorias
          </Link>
        </div>
      </section>
    </main>
  );
}
