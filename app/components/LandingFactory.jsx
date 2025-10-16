"use client";

import React from "react";
import { Check } from "lucide-react";

// ==========================
// CONFIGURAÇÕES DE PRODUTOS
// ==========================
const CONFIG = {
  ENCCEJA: {
    brand: {
      name: "Clube Aprova ENCCEJA",
      tagline: "Seu diploma do ensino médio começa aqui",
      primary: "#0ea5e9",
      secondary: "#fbbf24",
      dark: "#0b1220",
    },
    hero: {
      eyebrow: "Clube de Assinaturas · ENCCEJA",
      headline: "Passe no ENCCEJA com estudo guiado e leve",
      subheadline:
        "Aulas on-line, trilhas semanais e suporte para você conquistar seu diploma.",
      ctaPrimary: "Entrar no Clube",
      ctaSecondary: "Ver plano por dentro",
      backgroundImage: "/assets/clubeenceeja.png",
      backgroundFixed: true,
    },
    offer: {
      bullets: [
        "Aulas gravadas e ao vivo (curtas e objetivas)",
        "Trilhas semanais: o que fazer a cada dia",
        "Checklist do que mais cai",
        "Comunidade no WhatsApp para tirar dúvidas",
      ],
      priceText: "Planos a partir de R$29/mês",
    },
    groupLink: "https://chat.whatsapp.com/EhYhaIcxCvO7Cq2gBeceMd?mode=wwc",
    payLink: "https://mpago.li/1meRf21",
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
      eyebrow: "Mentoria Express · Pedro II",
      headline: "Ainda dá tempo de garantir sua vaga!",
      subheadline:
        "Mentoria prática com revisões focadas, simulados e plano de estudo até a prova.",
      ctaPrimary: "Garantir minha vaga",
      ctaSecondary: "Ver como funciona",
      backgroundImage: "/assets/colegiocp2.png",
      backgroundFixed: true,
    },
    offer: {
      bullets: [
        "Aulão Premonição (o que mais cai)",
        "Simulado com correção comentada",
        "Plano semanal até 02/11/2025",
        "Grupo no WhatsApp com lembretes diários",
      ],
      priceText: "Somente R$97,00",
    },
    groupLink: "https://chat.whatsapp.com/HPO5mIWOuOvKpYzHjNSJng?mode=wwc",
    payLink: "https://mpago.li/1RdTFbM",
  },

  IFRJ: {
    brand: {
      name: "Mentoria IFRJ",
      tagline: "Foco total no que mais cai",
      primary: "#0ea5e9",
      secondary: "#fbbf24",
      dark: "#0b1220",
    },
    hero: {
      eyebrow: "Mentoria · IFRJ",
      headline: "Foco total no que mais cai no IFRJ",
      subheadline:
        "Aulões direcionados, simulados por área e revisão relâmpago.",
      ctaPrimary: "Quero entrar",
      ctaSecondary: "Ver cronograma",
      backgroundImage: "/assets/ifrjimagem.png",
      backgroundFixed: true,
    },
    offer: {
      bullets: [
        "Mapa de competências do edital",
        "Questões no estilo IFRJ, com comentário",
        "Revisões 30–40 min por tópico",
        "Checklist de última hora",
      ],
      priceText: "A partir de R$97,00",
    },
    groupLink: "https://chat.whatsapp.com/FgNimaljASF7uHwMM4bLrN?mode=wwc",
    payLink: "https://mpago.li/1RdTFbM",
  },

  UERJQuimica: {
    brand: {
      name: "Mentoria UERJ Química",
      tagline: "Acerte Química na UERJ com técnica e prática",
      primary: "#0ea5e9",
      secondary: "#fbbf24",
      dark: "#0b1220",
    },
    hero: {
      eyebrow: "Mentoria · UERJ (Química)",
      headline: "Acerte Química na UERJ com técnica e prática",
      subheadline:
        "Trilhas objetivas, resolução de questões UERJ e revisão das pegadinhas.",
      ctaPrimary: "Garantir minha vaga",
      ctaSecondary: "Ver cronograma",
      backgroundImage: "/assets/uerjimagem.png",
      backgroundFixed: true,
    },
    offer: {
      bullets: [
        "Estequiometria, soluções e termoquímica no ponto",
        "Questões clássicas UERJ por assunto (comentadas)",
        "Simulado UERJ + revisão final",
        "Mapa de fórmulas e erros comuns",
      ],
      priceText: "Somente R$97,00",
    },
    groupLink: "https://chat.whatsapp.com/DRI4lqURAk69zjCJYCoS6p?mode=wwc",
    payLink: "https://mpago.li/1RdTFbM",
  },

  Reforco: {
    brand: {
      name: "Reforço Escolar",
      tagline: "Transformando dificuldades em aprendizado",
      primary: "#0ea5e9",
      secondary: "#fbbf24",
      dark: "#0b1220",
    },
    hero: {
      eyebrow: "Reforço Escolar",
      headline: "Aulas de reforço personalizadas",
      subheadline:
        "Química, Física e Matemática para ensino médio — acompanhamento passo a passo.",
      ctaPrimary: "Falar com a professora",
      ctaSecondary: "Ver disciplinas",
      backgroundImage: "/assets/reforco.png",
      backgroundFixed: false,
    },
    offer: {
      bullets: [
        "Atendimento individual ou em grupo",
        "Material complementar incluso",
        "Foco nas suas dificuldades",
        "Horários flexíveis",
      ],
      priceText: "Entre em contato para valores",
    },
    groupLink: "#coloque_o_link_do_grupo_reforco",
    payLink: "",
  },

  Personal: {
    brand: {
      name: "Prof. Luana Araujo",
      tagline: "Transformando dificuldades em aprendizado",
      primary: "#0ea5e9",
      secondary: "#fbbf24",
      dark: "#0b1220",
    },
    hero: {
      eyebrow: "Sobre mim",
      headline: "Ajudo estudantes a destravar o estudo e alcançar aprovações",
      subheadline:
        "Mais de 15 anos de sala de aula. Metodologia prática e acompanhamento real.",
      ctaPrimary: "Conheça meus programas",
      ctaSecondary: "Falar comigo",
      backgroundImage: "/assets/uerjimagem.png",
      backgroundFixed: false,
    },
    offer: {
      bullets: [
        "Metodologia leve e consistente",
        "Materiais autorais e simulados comentados",
        "Acompanhamento pelo WhatsApp",
      ],
      priceText: "",
    },
    groupLink: "https://wa.me/5521997331448",
    payLink: "",
  },
};

// ==========================
// COMPONENTE PRINCIPAL
// ==========================
export default function LandingFactory({ siteKey = "Personal" }) {
  const cfg = CONFIG[siteKey] || CONFIG.Personal;

  return (
    <div>
      {/* Hero */}
      <section
        className="text-white text-center py-20"
        style={{
          backgroundImage: `url(${cfg.hero.backgroundImage})`,
          backgroundSize: "cover",
          backgroundAttachment: cfg.hero.backgroundFixed ? "fixed" : "scroll",
        }}
      >
        <h3 className="uppercase tracking-wide">{cfg.hero.eyebrow}</h3>
        <h1 className="text-4xl font-bold mt-2">{cfg.hero.headline}</h1>
        <p className="mt-4 text-lg">{cfg.hero.subheadline}</p>

        <div className="mt-6 flex justify-center gap-4">
          {cfg.payLink && (
            <a
              href={cfg.payLink}
              className="px-6 py-3 rounded-xl font-semibold"
              style={{
                backgroundColor: cfg.brand.secondary,
                color: cfg.brand.dark,
              }}
            >
              {cfg.hero.ctaPrimary}
            </a>
          )}
          {cfg.groupLink && (
            <a
              href={cfg.groupLink}
              className="px-6 py-3 rounded-xl border font-semibold"
            >
              {cfg.hero.ctaSecondary}
            </a>
          )}
        </div>
      </section>

      {/* Oferta */}
      <section className="max-w-3xl mx-auto py-12 px-4">
        <h2 className="text-2xl font-bold text-center mb-6">O que você recebe</h2>
        <ul className="space-y-3">
          {cfg.offer.bullets.map((item, i) => (
            <li key={i} className="flex items-center gap-2">
              <Check className="text-green-500" /> {item}
            </li>
          ))}
        </ul>
        {cfg.offer.priceText && (
          <p className="text-center mt-6 font-semibold">{cfg.offer.priceText}</p>
        )}
      </section>
    </div>
  );
}
