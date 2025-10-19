import Image from "next/image";
import Link from "next/link";

export default function MentoriaPedroII() {
  const WHATSAPP_CTA =
    "https://wa.me/5521976739159?text=Oi%20Luana%2C%20quero%20saber%20mais%20sobre%20a%20mentoria%20Pedro%20II!";

  return (
    <main className="bg-amber-50/30 min-h-screen flex items-center">
      <section className="mx-auto max-w-6xl px-4 py-12 grid md:grid-cols-2 gap-10 items-center">
        {/* Coluna de texto */}
        <div>
          <Link
            href="/pessoal#mentorias"
            className="inline-flex items-center gap-2 text-sm font-medium text-amber-700 hover:text-amber-800"
          >
            ← Voltar
          </Link>

          <span className="ml-3 inline-block rounded-full bg-amber-100 px-3 py-1 text-xs font-medium text-amber-700">
            Intensivo • Colégio Pedro II
          </span>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Mentoria Express — Colégio Pedro II
          </h1>

          <p className="mt-4 max-w-2xl text-gray-700 leading-relaxed">
            A preparação completa para o processo seletivo do Colégio Pedro II!
            Nesta mentoria, você vai revisar os principais conteúdos cobrados,
            participar de simulados, resolver provas anteriores e aprender
            estratégias para aumentar seu desempenho.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>✔️ Aulão Premonição antes da prova</li>
            <li>✔️ Simulados com correção comentada</li>
            <li>✔️ Grupo exclusivo no WhatsApp com desafios diários</li>
            <li>✔️ Revisões objetivas e material de apoio</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={WHATSAPP_CTA}
              className="inline-flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition"
            >
              Quero garantir minha vaga
            </Link>

            <Link
              href="/pessoal"
              className="inline-flex items-center justify-center rounded-full border px-5 py-3 text-sm font-semibold text-gray-800 hover:bg-white/60 transition"
            >
              Ver outras mentorias
            </Link>
          </div>
        </div>

        {/* Coluna da imagem */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/colegiocp2.png"
            alt="Alunos estudando para o Colégio Pedro II"
            width={500}
            height={400}
            className="rounded-2xl shadow-lg object-cover"
            priority
          />
        </div>
      </section>
    </main>
  );
}
