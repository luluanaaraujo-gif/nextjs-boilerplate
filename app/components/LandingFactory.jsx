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
      headline: "Ainda dá tempo
