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

  return (
  <section className="relative w-full" style={{ minHeight: "900px" }}>
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src={familiaImage}
          alt="Família na piscina"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Overlay mais claro */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.0) 100%)",
        }}
      />

      {/* Conteúdo */}
      <div className="relative z-10 container-prose py-24">
        <div className="max-w-xl">
          <AnimOnView direction="from-left">
            <div>
              <Reveal>
                <h2
                  className="font-title text-white leading-tight"
                  style={{ fontSize: "clamp(32px, 5vw, 56px)" }}
                >
                  Mais que produtos,
                  <br />
                  <span style={{ color: "#38bdf8" }}>oferecemos</span>
                  <br />
                  <span style={{ color: "#38bdf8" }}>momentos</span>
                  <br />
                  inesquecíveis!
                </h2>
              </Reveal>

              <Reveal delay={200}>
                <p className="mt-6 text-lg text-white/90 leading-relaxed">
                  Tudo para sua piscina você encontra aqui.
                </p>
              </Reveal>

              {/* Botão CTA */}
              <Reveal delay={400}>
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
        </div>
      </div>
    </section>
  );
}
