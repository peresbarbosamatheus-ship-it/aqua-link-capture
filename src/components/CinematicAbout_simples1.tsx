import mascote from "@/assets/mascote.png";

function AtomIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}

function BeakerIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v6L5 20a2 2 0 002 2h10a2 2 0 002-2L14 9V3" />
    </svg>
  );
}

export default function CinematicAbout() {
  return (
    <section id="sobre-nos" className="w-full bg-white py-16 scroll-mt-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Linha dourada */}
        <div className="w-20 h-1 bg-yellow-400 mx-auto mb-6" />

        {/* Título */}
        <h2 className="text-center text-4xl md:text-5xl font-bold text-slate-900 mb-12">
          Sobre nós
        </h2>

        {/* Conteúdo: texto + mascote */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          {/* Texto */}
          <div>
            <div className="space-y-5 text-slate-800 text-lg leading-relaxed">
              <p>
                Fundada em 2015, a GQA nasceu para atender indústrias e o mercado de recreação,
                oferecendo excelência no tratamento de piscinas — unindo conhecimento técnico,
                produtos de qualidade e atendimento especializado.
              </p>
              <p>
                Nosso diferencial está no atendimento e na expertise técnica: a empresa é liderada
                por um engenheiro químico com mais de 30 anos de experiência em tratamento de águas.
              </p>
              <p className="font-bold text-slate-900">
                Mais do que produtos, entregamos qualidade e confiabilidade em cada atendimento.
              </p>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-4 mt-8">
              <div className="flex items-center gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100">
                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <AtomIcon />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">30+ anos de expertise</h3>
                  <p className="text-sm text-slate-600">Engenharia química aplicada</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100">
                <div className="shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700">
                  <BeakerIcon />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Engenheiro Químico</h3>
                  <p className="text-sm text-slate-600">Liderança técnica em cada solução</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mascote - maior */}
          <div className="flex justify-center">
            <img
              src={mascote}
              alt="Mascote GQA"
              className="w-full max-w-xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
