import Image from "next/image";
import Link from "next/link";

export default function MentoriaReforcoEscolar() {
  const WHATSAPP_CTA =
    "https://wa.me/5521976739159?text=Oi%20Luana%2C%20quero%20saber%20mais%20sobre%20as%20aulas%20de%20refor%C3%A7o%20escolar!";

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
            Reforço Escolar
          </span>

          <h1 className="mt-3 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Aulas de Reforço Escolar com Acompanhamento Individualizado
          </h1>

          <p className="mt-4 max-w-2xl text-gray-700 leading-relaxed">
            As aulas de reforço escolar são pensadas para ajudar alunos a
            recuperarem conteúdos, desenvolverem hábitos de estudo e
            conquistarem mais confiança nos estudos. Trabalhamos com todas as
            disciplinas e acompanhamos de perto o progresso do aluno.
          </p>

          <ul className="mt-6 space-y-3 text-gray-700">
            <li>📚 Todas as disciplinas do Ensino Fundamental e Médio</li>
            <li>📝 Auxílio nas tarefas de casa e na organização da rotina</li>
            <li>💡 Desenvolvimento pessoal e incentivo à autonomia</li>
            <li>🎯 Estratégias práticas para melhorar o desempenho escolar</li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href={WHATSAPP_CTA}
              className="inline-flex items-center justify-center rounded-full bg-amber-500 hover:bg-amber-600 px-5 py-3 text-sm font-semibold text-white shadow-sm transition"
            >
              Quero agendar uma aula
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
            src="/assets/reforco.png"
            alt="Aula de reforço escolar com professora auxiliando aluno"
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

