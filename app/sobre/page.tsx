// app/sobre/page.tsx
import React from "react";
import { FaInstagram, FaWhatsapp, FaFacebook, FaStar } from "react-icons/fa";

export const metadata = {
  title: "Sobre • Prof. Luana Araújo",
  description: "Página pessoal da Prof. Luana Araújo: mentoria, reforço escolar e preparação para provas.",
};

export default function SobrePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Seção Hero */}
      <section className="bg-amber-500 text-white text-center py-16 px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Prof. Luana Araújo</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Transformando dificuldades em aprendizado. Mais de 15 anos ajudando alunos a conquistar seus objetivos.
        </p>
      </section>

      {/* Quem sou eu */}
      <section className="max-w-5xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
        <img
          src="/assets/luana-hero.png"
          alt="Professora Luana Araújo"
          className="rounded-2xl shadow-lg object-cover w-full"
        />
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Quem sou eu</h2>
          <p className="text-gray-600 leading-relaxed">
            Sou professora e mentora dedicada à educação. Auxilio alunos que buscam reforço escolar e preparação
            para provas como ENCCEJA, IFRJ, UERJ e CEFET. Meu objetivo é mostrar que aprender pode ser mais simples,
            eficiente e prazeroso com a metodologia certa.
          </p>
        </div>
      </section>

      {/* Cards de Mentorias */}
      <section className="bg-white py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Mentorias</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Clube Aprova ENCCEJA",
              desc: "Trilhas semanais, aulas objetivas, checklist e grupo no WhatsApp.",
            },
            {
              title: "Preparação IFRJ",
              desc: "Conteúdos-chave com resolução de exercícios e simulados estratégicos.",
            },
            {
              title: "UERJ • Química",
              desc: "Reforço em Química com revisão dirigida, listas comentadas e mapas de estudo.",
            },
            {
              title: "Mentoria CEFET",
              desc: "Planejamento prático e acompanhamento próximo para a prova do CEFET.",
            },
          ].map((mentoria, i) => (
            <div
              key={i}
              className="p-6 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold text-amber-600">{mentoria.title}</h3>
              <p className="text-gray-600 mt-2">{mentoria.desc}</p>
              <button className="mt-4 px-4 py-2 bg-amber-500 text-white rounded-lg hover:bg-amber-600">
                Ver detalhes
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Depoimentos */}
      <section className="bg-gray-100 py-16 px-6">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Depoimentos</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {[
            { name: "Ana Clara", text: "Com a mentoria consegui passar no IFRJ! Material direto ao ponto." },
            { name: "João Pedro", text: "As aulas da professora Luana mudaram minha forma de estudar. Recomendo muito!" },
          ].map((dep, i) => (
            <div key={i} className="p-6 bg-white rounded-xl shadow-md">
              <p className="text-gray-600 italic">"{dep.text}"</p>
              <div className="flex items-center mt-4">
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <FaStar className="text-amber-500" />
                <span className="ml-2 font-semibold">{dep.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Redes Sociais */}
      <section className="py-12 bg-white text-center">
        <h2 className="text-2xl font-bold mb-6 text-gray-800">Me siga nas redes sociais</h2>
        <div className="flex justify-center gap-6 text-3xl text-amber-600">
          <a href="https://instagram.com/prof.luanaaraujo" target="_blank"><FaInstagram /></a>
          <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
          <a href="https://wa.me/5521997331448" target="_blank"><FaWhatsapp /></a>
        </div>
      </section>

      {/* Contato */}
      <footer className="bg-amber-500 text-white text-center py-6">
        <p className="text-lg">Entre em contato direto pelo WhatsApp</p>
        <a
          href="https://wa.me/5521997331448"
          className="inline-block mt-4 px-6 py-3 bg-white text-amber-600 font-bold rounded-lg shadow hover:bg-gray-100"
        >
          Falar no WhatsApp
        </a>
        <p className="mt-6 text-sm">© {new Date().getFullYear()} Prof. Luana Araújo – Todos os direitos reservados</p>
      </footer>
    </main>
  );
}
