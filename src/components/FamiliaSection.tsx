import { useRef, useState, useEffect } from "react";

import familiaImage from "@/assets/familia.png";

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  return (
    <div className={`reveal ${className}`} style={{ animationDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}

function AnimOnView({
  children,
  direction = "from-bottom",
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  direction?: "from-left" | "from-right" | "from-bottom" | "scale-center";
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.disconnect();
          }
        });
      },
      { threshold: [0, 0.25, 0.5] },
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`anim-on-view ${direction} ${shown ? "in" : ""} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function FamiliaSection() {
  const WHATSAPP_URL = "https://wa.me/5581999125638";

  const benefits = [
    {
      icon: "💧",
      title: "ÁGUA LIMPA",
      subtitle: "E CRISTALINA",
    },
    {
      icon: "✓",
      title: "PRODUTOS DE",
      subtitle: "QUALIDADE",
    },
    {
      icon: "👍",
      title: "CONFIANÇA E",
      subtitle: "SEGURANÇA",
    },
    {
      icon: "😊",
      title: "DIVERSÃO PARA",
      subtitle: "TODA FAMÍLIA",
    },
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={familiaImage}
          alt="Família na piscina"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/40 z-1" />

      {/* Conteúdo */}
      <div className="relative z-10 container-prose section-y">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Texto esquerdo */}
          <AnimOnView direction="from-left">
            <div>
              <Reveal>
                <h2 className="font-title text-white leading-tight" style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
                  Mais que produtos,
                  <br />
                  <span style={{ color: "#0a6cc4" }}>oferecemos</span>
                  <br />
                  <span style={{ color: "#0a6cc4" }}>momentos</span>
                  <br />
                  inesquecíveis!
                </h2>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 text-lg text-white/90 leading-relaxed">
                  Tudo para sua piscina você encontra aqui.
                </p>
              </Reveal>

              {/* Benefícios em grid 2x2 */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {benefits.map((benefit, i) => (
                  <AnimOnView key={i} direction="from-bottom" delay={300 + i * 100}>
                    <div className="flex items-start gap-3">
                      <div className="text-3xl shrink-0 w-10 h-10 flex items-center justify-center rounded-full border-2 border-white/30">
                        {benefit.icon}
                      </div>
                      <div className="text-white text-sm font-semibold leading-tight">
                        <div>{benefit.title}</div>
                        <div style={{ color: "#0a6cc4" }}>{benefit.subtitle}</div>
                      </div>
                    </div>
                  </AnimOnView>
                ))}
              </div>

              {/* Botão CTA */}
              <Reveal delay={700}>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full mt-10 transition-all hover:scale-105 shadow-xl"
                >
                  🛒 COMPRE AGORA
                  <span className="text-sm font-normal">e transforme sua piscina!</span>
                </a>
              </Reveal>
            </div>
          </AnimOnView>

          {/* Espaço vazio (a imagem de fundo já ocupa) */}
          <div />
        </div>
      </div>
    </section>
  );
}
