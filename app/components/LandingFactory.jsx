// app/components/LandingFactory.jsx
import React from "react";

// Configuração das páginas
const CONFIG = {
  ENCCEJA: {
    brand: {
      name: "Clube do ENCCEJA",
      tagline: "Aulas online e apoio completo para sua aprovação",
      primary: "#0ea5e9",
      secondary: "#fbbf24",
      dark: "#0b1220",
    },
    hero: {
      eyebrow: "Clube ENCCEJA",
      headline: "Garanta já sua aprovação!",
      backgroundImage: "/assets/clubeenceeja.png",
    },
    offer: {
      bullets: [
        "Aulas gravadas e ao vivo (curtas e objetivas)",
        "Trilhas semanais: o que fazer a cada dia",
        "Checklist do que mais cai",
        "Comunidade no WhatsApp para tirar dúvidas",
      ],
      priceText: "Planos a partir de R$29/mês",
      groupLink: "https://chat.whatsapp.com/...",
      payLink: "https://mpago.li/...",
    },
  },

  PedroII: {
    brand: {
      name: "Mentoria Express Pedro II",
      tagline: "Transformando dificuldades em aprendizado",
      primary: "#0ea5e9",
      secondary: "#fbbf24",
      dark: "#0b1220",
    },
    hero: {
      eyebrow: "Mentoria Express - Pedro II",
      headline: "Ainda dá tempo",
      backgroundImage: "/assets/colegiocp2.png",
    },
  },

  IFRJ: {
    brand: {
      name: "Preparatório IFRJ",
      tagline: "Domine os principais conteúdos do exame",
      primary: "#0ea5e9",
      secondary: "#fbbf24",
      dark: "#0b1220",
    },
    hero: {
      eyebrow: "Preparatório IFRJ",
      headline: "Estude com foco e eficiência",
      backgroundImage: "/assets/ifrjimagem.png",
    },
  },

  UERJ: {
    brand: {
      name: "UERJ Química",
      tagline: "Preparação completa em química",
      primary: "#0ea5e9",
      secondary: "#fbbf24",
      dark: "#0b1220",
    },
    hero: {
      eyebrow: "UERJ - Química",
      headline: "Conquiste sua vaga!",
      backgroundImage: "/assets/uerjimagem.png",
    },
  },

  Reforco: {
    brand: {
      name: "Reforço Escolar",
      tagline: "Apoio em matemática, química e física",
      primary: "#0ea5e9",
      secondary: "#fbbf24",
      dark: "#0b1220",
    },
    hero: {
      eyebrow: "Reforço Inteligente",
      headline: "Transformando dificuldades em aprendizado",
      backgroundImage: "/assets/reforco.png",
    },
  },
};

// Componente que renderiza dinamicamente cada página
export default function LandingFactory({ siteKey }) {
  const site = CONFIG[siteKey];

  if (!site) {
    return (
      <div className="flex h-screen items-center justify-center">
        <h1 className="text-2xl font-bold text-red-600">
          Página não encontrada
        </h1>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${site.hero.backgroundImage})` }}
    >
      {/* Hero Section */}
      <div className="bg-black bg-opacity-60 p-8">
        <h4 className="text-sm uppercase tracking-wide text-yellow-400">
          {site.hero.eyebrow}
        </h4>
        <h1 className="text-4xl font-bold">{site.hero.headline}</h1>
        <p className="mt-2 text-lg">{site.brand.tagline}</p>
      </div>

      {/* Oferta (se existir) */}
      {site.offer && (
        <div className="p-8 bg-white text-black">
          <h2 className="text-2xl font-semibold mb-4">O que você recebe:</h2>
          <ul className="list-disc pl-6 space-y-2">
            {site.offer.bullets.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <p className="mt-4 font-bold">{site.offer.priceText}</p>

          <div className="mt-4 flex space-x-4">
            <a
              href={site.offer.groupLink}
              target="_blank"
              className="px-4 py-2 bg-green-600 text-white rounded"
            >
              Entrar no grupo
            </a>
            <a
              href={site.offer.payLink}
              target="_blank"
              className="px-4 py-2 bg-blue-600 text-white rounded"
            >
              Fazer pagamento
            </a>
          </div>
        </div>
      )}
    </div>
  );
}
