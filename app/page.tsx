// app/page.tsx
import Image from "next/image";

export default function Home() {
  return (
    <main className="font-sans text-gray-900">
      {/* Hero Section */}
      <section
        className="flex flex-col items-center justify-center text-center text-white py-20"
        style={{
          background: `url(/assets/luana-hero.png) center/cover no-repeat`,
        }}
      >
        <div className="bg-black bg-opacity-50 p-6 rounded-2xl">
          <h1 className="text-4xl font-bold mb-4">Prof. Luana Araújo</h1>
          <p className="text-lg max-w-xl">
            Transformando dificuldades em aprendizado.  
            Mais de 15 anos de experiência ajudando alunos a conquistar seus objetivos.
          </p>
        </div>
      </section>

      {/* Sobre mim */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Sobre mim</h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Image
            src="/assets/luana-hero.png"
            alt="Foto de Luana Araújo"
            width={250}
            height={250}
            className="rounded-full shadow-lg"
          />
          <p className="text-lg leading-relaxed">
            Sou professora dedicada à educação e mentora de alunos que buscam
            reforço escolar, preparação para provas como o ENCCEJA, IFRJ, UERJ e
            Colégio Pedro II.  
            Meu objetivo é mostrar que aprender pode ser mais simples, eficiente
            e até prazeroso quando usamos a metodologia certa.
          </p>
        </div>
      </section>

      {/* Serviços */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-10">Serviços</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Clube do ENCCEJA</h3>
              <p>Aulas online, trilhas de estudo e apoio para conquistar seu diploma.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Mentoria Pedro II</h3>
              <p>Preparação estratégica para ingresso no Colégio Pedro II.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Mentoria UERJ</h3>
              <p>Suporte completo para quem busca aprovação na UERJ em Química.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Mentoria IFRJ</h3>
              <p>Aulas e materiais direcionados para garantir sua vaga no IFRJ.</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
              <h3 className="text-xl font-semibold mb-2">Reforço Escolar</h3>
              <p>Atendimento personalizado em Matemática, Química e Física.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section className="text-center py-16">
        <h2 className="text-3xl font-bold mb-4">Entre em contato</h2>
        <p className="mb-6">Tire suas dúvidas e saiba como participar.</p>
        <a
          href="https://wa.me/5521976739159"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-green-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-600 transition"
        >
          Fale comigo no WhatsApp
        </a>
      </section>
    </main>
  );
}
