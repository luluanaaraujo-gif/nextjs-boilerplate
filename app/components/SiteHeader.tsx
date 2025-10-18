"use client";

import Link from "next/link";
import { useState } from "react";

type Props = {
  whatsUrl: string;      // link curto do WhatsApp
  tiktokUrl?: string;    // opcional
};

export default function SiteHeader({ whatsUrl, tiktokUrl }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#0b1220]/90 backdrop-blur supports-[backdrop-filter]:bg-[#0b1220]/75">
      {/* Conteúdo em largura máxima */}
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        {/* Marca */}
        <Link href="/pessoal" className="text-amber-400 font-semibold tracking-wide hover:text-amber-300">
          Prof. Luana Araújo
        </Link>

        {/* Navegação desktop */}
        <nav className="hidden items-center gap-6 text-sm text-amber-200 md:flex">
          <a href="#mentorias" className="hover:text-white transition-colors">Mentorias</a>
          <a href="#sobre" className="hover:text-white transition-colors">Sobre</a>
          <a href="#contato" className="hover:text-white transition-colors">Contato</a>

          {/* Ações */}
          <div className="ml-3 flex items-center gap-2">
            {tiktokUrl && (
              <a
                href={tiktokUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md border border-amber-400/40 px-3 py-1.5 text-amber-200 hover:bg-amber-400 hover:text-black transition-colors"
                aria-label="Abrir TikTok"
              >
                TikTok
              </a>
            )}

            <a
              href={whatsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-amber-500 px-3 py-1.5 font-medium text-black hover:bg-amber-400 transition-colors"
              aria-label="Falar no WhatsApp"
            >
              WhatsApp
            </a>
          </div>
        </nav>

        {/* Botão mobile */}
        <button
          className="inline-flex items-center rounded-md border border-amber-400/40 px-2 py-1 text-amber-200 md:hidden"
          aria-label="Abrir menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="border-t border-white/10 md:hidden">
          <nav className="mx-auto flex max-w-6xl flex-col gap-1 px-6 py-3 text-amber-200">
            <a href="#mentorias" className="rounded px-2 py-2 hover:bg-white/5" onClick={() => setOpen(false)}>Mentorias</a>
            <a href="#sobre" className="rounded px-2 py-2 hover:bg-white/5" onClick={() => setOpen(false)}>Sobre</a>
            <a href="#contato" className="rounded px-2 py-2 hover:bg-white/5" onClick={() => setOpen(false)}>Contato</a>

            <div className="mt-2 flex items-center gap-2">
              {tiktokUrl && (
                <a
                  href={tiktokUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full rounded-md border border-amber-400/40 px-3 py-2 text-center hover:bg-amber-400 hover:text-black transition-colors"
                >
                  TikTok
                </a>
              )}
              <a
                href={whatsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full rounded-md bg-amber-500 px-3 py-2 text-center font-medium text-black hover:bg-amber-400 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
