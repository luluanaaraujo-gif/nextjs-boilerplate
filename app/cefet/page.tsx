// app/cefet/page.tsx

export const metadata = {
  title: "Mentoria CEFET • Prof. Luana Araújo",
  description:
    "Página dedicada à mentoria para alunos que querem se preparar para o CEFET com a Prof. Luana Araújo.",
};

export default function CefetPage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-10 space-y-8">
      <section className="text-center">
        <h1 className="text-3xl font-bold text-[#0f26d5]">
          Mentoria para o CEFET
        </h1>
        <p className="mt-4 text-gray-700 leading-relaxed">
          Essa mentoria foi criada especialmente para alunos que desejam se preparar
          para o processo seletivo do <strong>CEFET</strong>.  
          O objetivo é oferecer um caminho prático e eficiente, com aulas dinâmicas,
          materiais de apoio e acompanhamento próximo.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-800">
          O que você vai encontrar:
        </h2>
        <ul className="mt-3 list-disc list-inside text-gray-700 space-y-2">
          <li>Aulas focadas nos principais conteúdos cobrados</li>
          <li>Listas de exercícios comentados</li>
          <li>Simulados exclusivos</li>
          <li>Grupo de apoio no WhatsApp</li>
        </ul>
      </section>

      <div className="text-center pt-6">
        <a
          href="/"
          className="inline-block bg-amber-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-amber-600 transition"
        >
          Voltar para o início
        </a>
      </div>
    </main>
  );
}

