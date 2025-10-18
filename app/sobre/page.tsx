// app/pessoal/page.tsx
import Image from "next/image";
import Link from "next/link";

const WHATSAPP_CTA =
  "https://wa.me/5521976739159?text=Olá%20Luana,%20quero%20saber%20mais%20sobre%20as%20mentorias!";

export default function PessoalPage() {
  return (
    <main className="font-sans">
      {/* Hero */}
      <section className="bg-amber-500 text-white py-12 px-6 text-center">
        <div className="flex flex-col items-center gap-4">
          <Image
            src="/assets/luana-hero.png"
            alt="Prof. Luana Araújo"
            width={120}
            height={120}
            className="rounded-full border-4 border-white shadow-lg"
          />
          <h1 className="text-3xl font-bold">Prof. Luana Araújo</h1>
          <p className="max-w-xl">
            Transformando dificuldades em aprendizado. Mais de 15 anos ajudando
            alunos a conquistar seus objetivos.
          </p>
        </div>
      </section>

      {/* Quem sou eu */}
      <section className="py-12 px-6 max-w-4xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-4">Quem sou eu</h2>
        <p className="text-gray-700 leading-relaxed">
          Sou professora e mentora com mais de 15 anos de experiência, com foco
          em ENCCEJA, IFRJ, UERJ (Química) e CEFET. Minha abordagem é prática,
          clara e objetiva, com trilhas, revisões inteligentes e
          acompanhamento próximo.
        </p>
      </section>

      {/* Serviços / Mentorias */}
      <section className="bg-gray-50 py-12 px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Mentorias</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {[
            {
              title: "Clube Aprova ENCCEJA",
              desc: "Trilhas semanais, aulas objetivas e checklist do que mais cai. Comunidade no WhatsApp e plano até a prova.",
            },
            {
              title: "Preparação IFRJ",
              desc: "Conteúdos-chave, resolução de exercícios e simulados estratégicos. Metodologia simples e direta.",
            },
            {
              title: "UERJ • Química",
              desc: "Reforço em Química para prova: revisão dirigida, listas comentadas e mapa do que mais cai.",
            },
            {
              title: "Mentoria CEFET",
              desc: "Planejamento prático, revisão focada e acompanhamento de perto para sua aprovação.",
            },
          ].map((s, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-xl p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600 mb-4">{s.desc}</p>
              <Link
                href={WHATSAPP_CTA}
                className="inline-block bg-amber-500 text-white px-4 py-2 rounded-lg hover:bg-amber-600 transition"
              >
                Quero saber mais
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-12 px-6 bg-white">
        <h2 className="text-2xl font-bold text-center mb-8">O que dizem meus alunos</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            {
              name: "Maria",
              text: "A Luana mudou completamente minha forma de estudar. Passei no ENCCEJA com confiança!",
            },
            {
              name: "João",
              text: "As revisões para o IFRJ foram fundamentais para eu ser aprovado.",
            },
            {
              name: "Carla",
              text: "A mentoria para o CEFET me ajudou a organizar meus estudos e chegar preparada.",
            },
          ].map((d, i) => (
            <div
              key={i}
              className="bg-gray-50 shadow-md rounded-xl p-6 text-center"
            >
              <p className="text-gray-700 italic mb-4">“{d.text}”</p>
              <span className="font-semibold text-amber-600">— {d.name}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Redes sociais */}
      <section className="bg-gray-100 py-12 px-6 text-center">
        <h2 className="text-2xl font-bold mb-6">Minhas redes</h2>
        <div className="flex justify-center gap-6">
          <Link
            href="https://instagram.com/prof.luanaaraujo"
            className="text-pink-600 font-semibold hover:underline"
          >
            Instagram
          </Link>
          <Link
            href="https://youtube.com"
            className="text-red-600 font-semibold hover:underline"
          >
            YouTube
          </Link>
        </div>
      </section>

      {/* Rodapé com WhatsApp */}
      <footer className="bg-amber-500 text-white text-center py-6 relative">
        <p>© {new Date().getFullYear()} Prof. Luana Araújo — Todos os direitos reservados</p>
        <Link
          href={WHATSAPP_CTA}
          className="fixed bottom-6 right-6 bg-green-500 p-4 rounded-full shadow-lg hover:bg-green-600 transition"
        >
          <Image
            src="/assets/whatsapp.svg"
            alt="WhatsApp"
            width={28}
            height={28}
          />
        </Link>
      </footer>
    </main>
  );
}

