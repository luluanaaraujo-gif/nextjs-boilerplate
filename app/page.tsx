// app/page.tsx
export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden border-b bg-amber-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 py-16 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">Prof. Luana Araújo</h1>
            <p className="mt-4 text-gray-700">
              Transformando dificuldades em aprendizado. Mais de 15 anos ajudando alunos…
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/sobre" className="rounded-lg bg-amber-500 px-4 py-2 text-white">Conheça mais</a>
              <a href="https://wa.me/5521997331448" className="rounded-lg border px-4 py-2">WhatsApp</a>
            </div>
          </div>
          <div>
            <img src="/assets/luana-hero.png" alt="Luana" className="rounded-2xl border object-cover" />
          </div>
        </div>
      </section>
      {/* …conteúdo adicional da home se quiser… */}
    </>
  );
}

