import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import poolSunset from "@/assets/pool-modern-1.jpg";
import poolAerial from "@/assets/pool-modern-2.jpg";
import poolWater from "@/assets/pool-modern-3.jpg";
import poolDusk from "@/assets/pool-modern-4.jpg";
import logo from "@/assets/gqa-logo.png";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FloatingInstagram } from "@/components/FloatingInstagram";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";
import { ScrollProgressBar } from "@/components/ScrollProgressBar";
import { CartProvider, useCart } from "@/components/cart/CartContext";
import { CartDrawer } from "@/components/cart/Cart";
import { usePageScroll, useElementScrollProgress } from "@/hooks/useScrollProgress";

const WHATSAPP = "5581999125638";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;
const INSTAGRAM_URL = "https://instagram.com/gquimica.ambiental";
const PHONE_LABEL = "(81) 9 9912-5638";

const HERO_VIDEO = "/videos/hero.mp4";
const BREAK_VIDEO = "/videos/intermediate.mp4";

const waProduct = (name: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${name}`)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GQA — Produtos para Piscina | Engenharia Química Aplicada" },
      {
        name: "description",
        content:
          "Loja especializada em produtos para piscina. 30 anos de engenharia química, diagnóstico em 10 minutos e atendimento técnico em toda a região.",
      },
      {
        property: "og:title",
        content: "GQA — Água cristalina. Expertise de quem entende de química.",
      },
      {
        property: "og:description",
        content: "Diagnóstico em 10 min · Curadoria de engenheiro químico · Frete grátis.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <CartProvider>
      <div className="bg-bg text-text overflow-x-hidden">
        <ScrollProgressBar />
        <Header />
        <VideoHero />
        
        <Metrics />
        <Differentials />
        <CinematicAbout />
        <AboutPin />
        <CrossfadeTransition />
        <V2Scope>
          <ProductsEquipment />
          <ChemistryDivider />
          <ProductsChemistry />
          <Brands />
          <Services />
        </V2Scope>
        <HowItWorks />
        <OfferBanner />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
        <FloatingInstagram />
        <CartDrawer />
      </div>
    </CartProvider>
  );
}

/* ============================================================
   HERO COM VÍDEO IMERSIVO + ZOOM POR SCROLL
============================================================ */
function VideoHero() {
  const scrollY = usePageScroll();

  const vh =
    typeof window !== "undefined"
      ? window.innerHeight
      : 800;

  const progress = Math.min(1, scrollY / vh);

  const contentOpacity = Math.max(
    0,
    1 - progress * 1.6
  );

  const contentY = -progress * 40;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "var(--bg-dark)" }}
    >
      {/* Gradiente de fundo */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,82,204,0.25) 0%, transparent 70%)",
        }}
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 40% 40% at 80% 80%, rgba(0,82,204,0.10) 0%, transparent 70%)",
        }}
      />

      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="relative z-10 container-prose text-center pt-28 pb-32"
        style={{
          opacity: contentOpacity,
          transform: `translateY(${contentY}px)`,
          transition: "opacity 0.1s linear",
        }}
      >
        <Reveal>
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-medium border"
            style={{
              color: "var(--accent-light)",
              borderColor: "rgba(59,130,246,0.3)",
              background: "rgba(59,130,246,0.08)",
            }}
          >
            <BeakerSm className="w-3.5 h-3.5" />
            Engenheiro Químico · Desde 2015
          </span>
        </Reveal>

        <Reveal delay={1}>
          <h1
            className="h-hero mt-8"
            style={{ color: "#ffffff" }}
          >
            Água cristalina.
            <br />
            <span style={{ color: "var(--accent-light)" }}>
              Expertise de quem
            </span>
            <br />
            entende de química.
          </h1>
        </Reveal>

        <Reveal delay={2}>
          <p
            className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed"
            style={{
              color: "rgba(232,237,245,0.75)",
            }}
          >
            30 anos de engenharia química aplicados à sua
            piscina. Diagnóstico preciso, produtos certificados
            e atendimento que resolve de verdade.
          </p>
        </Reveal>

        <Reveal delay={3}>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">

            {/* BOTÃO WHATSAPP */}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center justify-center gap-3 px-8 py-4 text-base text-white w-full sm:w-auto"
              style={{
                background: "var(--whatsapp)",
                borderRadius: "12px",
              }}
            >
              <WAIcon className="w-5 h-5" />
              Diagnóstico Grátis no WhatsApp
            </a>

            {/* BOTÃO PRODUTOS */}
            <a
              href="#produtos"
              className="btn-premium inline-flex items-center justify-center px-8 py-4 text-base w-full sm:w-auto"
              style={{
                border:
                  "1px solid rgba(255,255,255,0.2)",
                color: "#ffffff",
                borderRadius: "12px",
                background: "rgba(255,255,255,0.05)",
              }}
            >
              Ver Produtos
            </a>
          </div>

          <p
            className="mt-5 text-xs tracking-wide"
            style={{
              color: "rgba(232,237,245,0.5)",
            }}
          >
            ✓ Sem compromisso &nbsp; ✓ Diagnóstico gratuito
            &nbsp; ✓ Resposta em minutos
          </p>
        </Reveal>

        {/* Cards de métricas */}
        <Reveal delay={3}>
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              {
                value: "30+",
                label: "Anos de expertise",
              },
              {
                value: "1000+",
                label: "Clientes atendidos",
              },
              {
                value: "10min",
                label: "Diagnóstico",
              },
              {
                value: "2015",
                label: "Fundada em",
              },
            ].map((m, i) => (
              <div
                key={i}
                className="rounded-2xl p-5 text-center"
                style={{
                  background: "rgba(255,255,255,0.05)",
                  border:
                    "1px solid rgba(255,255,255,0.08)",
                }}
              >
                <div className="font-title text-3xl text-white">
                  {m.value}
                </div>

                <div
                  className="mt-1 text-xs tracking-wide"
                  style={{
                    color: "rgba(232,237,245,0.55)",
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      {/* Scroll icon */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 bounce-soft"
        style={{
          color: "rgba(255,255,255,0.4)",
        }}
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}

/* ============================================================
   PIN SECTION — 3 frases reveladas pelo scroll
============================================================ */
function PinSection() {
  const { ref, progress } = useElementScrollProgress<HTMLDivElement>();

  const phrases = [
    "Sua piscina está pedindo socorro. A gente ouve.",
    "10 minutos. É tudo que precisamos para resolver o que outros não conseguem.",
    "Química de verdade. Não achismo.",
  ];

  const getOpacity = (i: number) => {
    const start = i / 3;
    const end = (i + 1) / 3;
    const mid = (start + end) / 2;
    if (progress < start || progress > end) return 0;
    const d = Math.abs(progress - mid) / ((end - start) / 2);
    return Math.max(0, 1 - d);
  };

  const blur = 4 + progress * 14;
  const darken = 0.45 + progress * 0.3;

  return (
    <section
      ref={ref}
      data-pin
      className="relative w-full pin-section"
      style={{ height: "100vh", background: "var(--bg-dark)" }}
    >
      <style>{`@media (max-width: 1023px) { .pin-section { height: 200vh !important; } }`}</style>
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          className="video-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poolSunset}
          style={{ filter: `blur(${blur}px)`, transform: "scale(1.1)" }}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: `rgba(2,30,60,${darken})` }} />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative w-full max-w-4xl text-center" style={{ minHeight: 160 }}>
            {phrases.map((t, i) => (
              <p
                key={i}
                className="absolute inset-0 flex items-center justify-center font-title text-white leading-tight"
                style={{
                  fontSize: "clamp(36px, 6vw, 64px)",
                  opacity: getOpacity(i),
                  transition: "opacity 0.2s linear",
                  letterSpacing: "-0.01em",
                }}
              >
                {t}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   ANIMAÇÃO DIRECIONAL (intersection observer)
============================================================ */
function AnimOnView({
  children,
  direction = "from-bottom",
  delay = 0,
  className = "",
}: {
  children: ReactNode;
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

/* ============================================================
   MÉTRICAS
============================================================ */
function Metrics() {
  const items: {
    label: string;
    render: ReactNode;
    dir: "from-left" | "from-bottom" | "scale-center" | "from-right";
    delay: number;
  }[] = [
    {
      label: "Expertise em química",
      render: (
        <>
          <span className="text-3xl align-top mr-1">+</span>
          <Counter to={30} />
        </>
      ),
      dir: "from-left",
      delay: 0,
    },
    {
      label: "Clientes atendidos",
      render: (
        <>
          <span className="text-3xl align-top mr-1">+</span>
          <Counter to={1000} />
        </>
      ),
      dir: "from-bottom",
      delay: 150,
    },
    {
      label: "Serviços especializados",
      render: <Counter to={12} />,
      dir: "scale-center",
      delay: 300,
    },
    {
      label: "Tempo de diagnóstico",
      render: (
        <>
          <Counter to={10} />
          <span className="text-3xl ml-1">min</span>
        </>
      ),
      dir: "from-bottom",
      delay: 450,
    },
    { label: "Fundada em", render: <Counter to={2015} />, dir: "from-right", delay: 600 },
  ];
  return (
    <section className="section-y" style={{ background: "var(--bg-dark)" }}>
      <div className="container-prose grid grid-cols-2 md:grid-cols-5 gap-y-10">
        {items.map((m, i) => (
          <AnimOnView
            key={i}
            direction={m.dir}
            delay={m.delay}
            className={`text-center px-4 ${i > 0 ? "md:border-l md:border-white/15" : ""}`}
          >
            <div className="font-title text-5xl md:text-6xl text-white leading-none">
              {m.render}
            </div>
            <div className="mt-4 label-eyebrow label-eyebrow-light">{m.label}</div>
          </AnimOnView>
        ))}
      </div>
    </section>
  );
}

/* ============================================================
   DIFERENCIAIS
============================================================ */
function Differentials() {
  const items = [
    {
      icon: <Clock />,
      title: "Diagnóstico em 10 Minutos",
      text: "Você descreve, nós resolvemos. Sem achismo, sem tempo perdido.",
    },
    {
      icon: <Beaker />,
      title: "Expertise Química Real",
      text: "30 anos de engenharia aplicados à sua piscina. Não é papo, é formação.",
    },
    {
      icon: <Heart />,
      title: "Visita Presencial",
      text: "Quando precisa de olho no olho, a gente aparece.",
    },
    {
      icon: <CheckBadge />,
      title: "Produtos Certificados",
      text: "Nada aqui foi escolhido por acaso. Cada produto passou pelo crivo técnico do nosso engenheiro.",
    },
    {
      icon: <Truck />,
      title: "Frete Grátis",
      text: "Porque facilitar a vida do cliente faz parte do serviço.",
    },
    {
      icon: <Store />,
      
      text: "Tempo suficiente para aprender o que funciona e eliminar o que não funciona.",
    },
  ];
  return (
    <section className="section-y" style={{ background: "var(--bg)" }}>
      <div className="container-prose">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section">Por que quem entende escolhe a GQA</h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <AnimOnView key={i} direction="from-bottom" delay={i * 120}>
              <div className="card-light h-full p-8">
                <div
                  className="text-accent w-12 h-12 flex items-center justify-center rounded-xl"
                  style={{ background: "rgba(0,73,133,0.08)" }}
                >
                  {it.icon}
                </div>
                <h3 className="font-display text-2xl mt-6 text-text">{it.title}</h3>
                <p className="mt-3 body-lg">{it.text}</p>
              </div>
            </AnimOnView>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   QUEM SOMOS CINEMATOGRÁFICO
============================================================ */
function CinematicAbout() {
  const scrollY = usePageScroll();
  const ref = useRef<HTMLElement>(null);
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.innerWidth < 1024) {
      setOffset(0);
      return;
    }
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const center = rect.top + rect.height / 2 - window.innerHeight / 2;
    setOffset(-center * 0.12);
  }, [scrollY]);

  return (
    <section
      id="quem-somos"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      style={{ minHeight: "100vh" }}
    >
      <video
        className="video-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poolWater}
        style={{ transform: `translateY(${offset}px) scale(1.12)` }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "rgba(2,30,60,0.78)" }} />
      <div className="relative z-10 container-prose section-y grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        <AnimOnView direction="from-left">
          <span className="label-eyebrow label-eyebrow-light">Quem somos</span>
          <h3
            className="font-title mt-4"
            style={{ color: "#0a6cc4", fontSize: "clamp(34px, 4.5vw, 52px)", lineHeight: 1.1 }}
          >
            Não vendemos produto.
            <br />
            Vendemos resultado.
          </h3>
          <div className="mt-8 space-y-5" style={{ color: "rgba(255,255,255,0.88)", fontSize: 17, lineHeight: 1.75 }}>
            <p>
              Fundada em 2015, a GQA nasceu para atender indústrias e o mercado de recreação,
              oferecendo excelência no tratamento de piscinas — unindo conhecimento técnico,
              produtos de qualidade e atendimento especializado.
            </p>
            <p>
              Nosso diferencial está no atendimento e na expertise técnica: a empresa é liderada
              por um engenheiro químico com mais de 30 anos de experiência em tratamento de águas,
              tanto no segmento de piscinas quanto na área industrial.
            </p>
            <p>
              Trabalhamos com compromisso, transparência e alto padrão de atendimento, sempre
              focados em manter sua piscina limpa, saudável e pronta para os melhores momentos.
            </p>
            <p className="font-medium" style={{ color: "#fff" }}>
              Mais do que produtos, entregamos qualidade e confiabilidade em cada atendimento.
            </p>
          </div>
        </AnimOnView>
        <AnimOnView direction="from-right" delay={200}>
          <div className="flex flex-col gap-4">
            <GlassBadge icon={<Atom />} title="30+ anos de expertise" subtitle="Engenharia química aplicada" />
           
            <GlassBadge icon={<Beaker />} title="Engenheiro Químico" subtitle="Liderança técnica em cada solução" />
          </div>
        </AnimOnView>
      </div>
    </section>
  );
}

function GlassBadge({ icon, title, subtitle }: { icon: ReactNode; title: string; subtitle: string }) {
  return (
    <div
      className="flex items-center gap-4 p-5 text-white rounded-2xl"
      style={{
        background: "rgba(255,255,255,0.10)",
        backdropFilter: "blur(10px)",
        WebkitBackdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.2)",
      }}
    >
      <div
        className="shrink-0 w-12 h-12 rounded-full flex items-center justify-center"
        style={{ background: "rgba(10,108,196,0.2)", color: "#0a6cc4" }}
      >
        {icon}
      </div>
      <div>
        <div className="font-title text-2xl leading-tight">{title}</div>
        <div className="text-sm text-white/75 mt-1">{subtitle}</div>
      </div>
    </div>
  );
}

/* ============================================================
   ABOUT PIN — 2 frases adicionais com V1 ao fundo
============================================================ */
function AboutPin() {
  const { ref, progress } = useElementScrollProgress<HTMLDivElement>();
  const phraseA = 1 - Math.min(1, Math.abs(progress - 0.25) / 0.25);
  const phraseB = 1 - Math.min(1, Math.abs(progress - 0.75) / 0.25);
  return (
    <section
      ref={ref}
      className="relative w-full"
      style={{ height: "200vh", background: "var(--bg-dark)" }}
    >
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        <video
          className="video-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poolSunset}
          style={{ transform: "scale(1.1)", filter: "blur(2px)" }}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0" style={{ background: "rgba(2,30,60,0.65)" }} />
        <div className="absolute inset-0 flex items-center justify-center px-6">
          <div className="relative w-full max-w-4xl text-center" style={{ minHeight: 200 }}>
            <p
              className="absolute inset-0 flex items-center justify-center font-title text-white leading-tight"
              style={{
                fontSize: "clamp(30px, 4.5vw, 52px)",
                opacity: Math.max(0, phraseA),
                transition: "opacity 0.2s linear",
              }}
            >
              Fundada por quem passou 30 anos resolvendo problemas de água na indústria e nas piscinas.
            </p>
            <p
              className="absolute inset-0 flex items-center justify-center font-title text-white leading-tight"
              style={{
                fontSize: "clamp(30px, 4.5vw, 52px)",
                opacity: Math.max(0, phraseB),
                transition: "opacity 0.2s linear",
              }}
            >
              Agora essa expertise está disponível para <span style={{ color: "#0a6cc4" }}>você</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CROSSFADE V1 → V2
============================================================ */
function CrossfadeTransition() {
  const { ref, progress } = useElementScrollProgress<HTMLDivElement>();
  const v1Op = Math.max(0, 1 - progress / 0.6);
  const v2Op = Math.max(0, (progress - 0.4) / 0.6);
  const textOp = 1 - Math.min(1, Math.abs(progress - 0.5) / 0.35);
  return (
    <section ref={ref} className="relative overflow-hidden" style={{ height: "100vh" }}>
      <video
        className="video-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poolDusk}
        style={{ opacity: v1Op, transform: "scale(1.05)" }}
      >
        <source src={HERO_VIDEO} type="video/mp4" />
      </video>
      <video
        className="video-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poolAerial}
        style={{ opacity: v2Op, transform: "scale(1.05)" }}
      >
        <source src={BREAK_VIDEO} type="video/mp4" />
      </video>
      <div className="absolute inset-0" style={{ background: "rgba(2,30,60,0.45)" }} />
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <h2
          className="font-title text-white text-center max-w-3xl leading-tight"
          style={{
            fontSize: "clamp(34px, 5vw, 56px)",
            opacity: Math.max(0, textOp),
            transform: `translateY(${(1 - textOp) * 30}px)`,
            transition: "opacity 0.15s linear",
          }}
        >
          Do cuidado técnico ao prazer de mergulhar.
        </h2>
      </div>
    </section>
  );
}

/* ============================================================
   V2 SCOPE — vídeo sticky de fundo para Produtos/Química/Serviços
============================================================ */
function V2Scope({ children }: { children: ReactNode }) {
  return (
    <div className="relative">
      <div className="sticky top-0 h-screen w-full overflow-hidden" style={{ zIndex: 0 }}>
        <video
          className="video-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poolWater}
          style={{ animation: "slowZoom 20s ease-in-out alternate infinite" }}
        >
          <source src={BREAK_VIDEO} type="video/mp4" />
        </video>
      </div>
      <div style={{ marginTop: "-100vh", position: "relative", zIndex: 1 }}>{children}</div>
      <style>{`@keyframes slowZoom { from { transform: scale(1.0) } to { transform: scale(1.15) } }`}</style>
    </div>
  );
}

/* ============================================================
   PRODUTOS — TIPOS
============================================================ */
type Product = { name: string; desc: string; cat: string; icon: ReactNode };

function ProductCard({ p }: { p: Product }) {
  const { add, setOpen } = useCart();
  return (
    <div
      className="card-light p-6 flex flex-col"
      style={{ animation: "overlay-fade 0.4s ease both" }}
    >
      <div
        className="aspect-[4/3] rounded-xl mb-5 flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, rgba(0,73,133,0.08), rgba(10,108,196,0.15))",
        }}
        aria-label={`Placeholder ${p.name}`}
      >
        <div className="text-accent opacity-80">{p.icon}</div>
      </div>
      <span className="label-eyebrow text-xs">{p.cat}</span>
      <h3 className="font-display text-lg mt-2 text-text leading-snug">{p.name}</h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">{p.desc}</p>
      <div className="mt-5 flex items-center gap-2">
        <button
          onClick={() => {
            add(p.name);
            setOpen(true);
          }}
          className="btn-premium flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-white"
          style={{ background: "var(--accent)" }}
        >
          Adicionar ao carrinho
        </button>
        <a
          href={waProduct(p.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pedir ${p.name} no WhatsApp`}
          className="btn-premium w-10 h-10 inline-flex items-center justify-center text-white shrink-0"
          style={{ background: "var(--whatsapp)" }}
        >
          <WAIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

/* ============================================================
   SEÇÃO A — EQUIPAMENTOS E ACESSÓRIOS
============================================================ */
const EQUIPMENT: Product[] = [
  { cat: "Equipamentos", name: "Bomba e Filtro (Kit completo)", desc: "Circulação e filtragem 24h.", icon: <Gear /> },
  { cat: "Equipamentos", name: "Motobomba para Piscina", desc: "Alta performance, baixo consumo.", icon: <Gear /> },
  { cat: "Equipamentos", name: "Filtro de Areia", desc: "Filtragem eficiente e durável.", icon: <Filter /> },
  { cat: "Equipamentos", name: "Gerador de Cloro Salino", desc: "Cloro automático via sal, sem cheiro.", icon: <Bolt /> },
  { cat: "Limpeza", name: "Aspirador Manual", desc: "Remove sujeira do fundo.", icon: <Brush /> },
  { cat: "Limpeza", name: "Escova para Piscina", desc: "Para paredes e fundo em qualquer revestimento.", icon: <Brush /> },
  { cat: "Limpeza", name: "Peneira / Skimmer", desc: "Captura folhas e resíduos.", icon: <Net /> },
  { cat: "Limpeza", name: "Mangueira de Aspiração", desc: "Flexível e resistente UV.", icon: <Hose /> },
  { cat: "Iluminação", name: "Refletor LED RGB", desc: "Iluminação colorida com controle remoto.", icon: <Bulb /> },
  { cat: "Iluminação", name: "Refletor LED Branco", desc: "Luz clean para piscinas modernas.", icon: <Bulb /> },
  { cat: "Iluminação", name: "Painel de Comando", desc: "Controle centralizado.", icon: <Panel /> },
  { cat: "Acessórios", name: "Escada para Piscina", desc: "Inox, resistente, fixação segura.", icon: <Ladder /> },
  { cat: "Acessórios", name: "Flutuador de Cloro", desc: "Distribui tabletes continuamente.", icon: <Float /> },
  { cat: "Acessórios", name: "Termômetro de Piscina", desc: "Medição precisa da temperatura.", icon: <Thermo /> },
  { cat: "Aquecimento", name: "Trocador de Calor", desc: "Aquece com eficiência.", icon: <Flame /> },
  { cat: "Aquecimento", name: "Aquecedor Solar (Placas)", desc: "Energia limpa para água quente.", icon: <Sun /> },
  { cat: "Aquecimento", name: "Aquecedor Elétrico", desc: "Aquecimento rápido e controlado.", icon: <Bolt /> },
  { cat: "Spa e Jacuzzi", name: "Banheira de Hidromassagem", desc: "Relaxamento com jatos potentes.", icon: <Spa /> },
  { cat: "Spa e Jacuzzi", name: "Bomba para Spa", desc: "Circulação e aquecimento.", icon: <Gear /> },
  { cat: "Spa e Jacuzzi", name: "Produtos Químicos para Spa", desc: "Linha específica para spas.", icon: <Beaker /> },
];
const EQ_CATS = ["Todos", "Equipamentos", "Limpeza", "Iluminação", "Acessórios", "Aquecimento", "Spa e Jacuzzi"];

function ProductsEquipment() {
  const [active, setActive] = useState("Todos");
  const filtered = useMemo(
    () => (active === "Todos" ? EQUIPMENT : EQUIPMENT.filter((p) => p.cat === active)),
    [active],
  );
  return (
    <section id="produtos" className="section-y relative" style={{ background: "rgba(240,248,255,0.92)" }}>
      <div className="container-prose">
        <Reveal className="text-center max-w-4xl mx-auto">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section text-white" style={{ textShadow: "0 2px 24px rgba(0,0,0,0.5)" }}>
            Cada equipamento escolhido por quem conhece piscina de dentro para fora.
          </h2>
          <p className="mt-6 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Tudo que sua piscina precisa para funcionar com eficiência e segurança.
          </p>
        </Reveal>
        <div className="mt-12 filter-scroll md:justify-center">
          {EQ_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`filter-chip ${active === c ? "active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div
          className="mt-12 grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}
        >
          {filtered.map((p, i) => (
            <ProductCard key={`${p.name}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   DIVISOR — NOSSA LINHA QUÍMICA
============================================================ */
function ChemistryDivider() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #003a6b 0%, #004985 100%)" }}
    >
      <div className="container-prose py-12 flex flex-col md:flex-row items-center justify-center gap-5 text-white text-center md:text-left">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
          <Atom />
        </div>
        <div>
          <div className="label-eyebrow label-eyebrow-light">Curadoria técnica</div>
          <h3 className="font-title text-3xl md:text-4xl mt-1">Nossa Linha Química</h3>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SEÇÃO B — LINHA QUÍMICA
============================================================ */
type ChemCat = "Cloro" | "Algicidas" | "Clarificantes" | "Correção de pH" | "Estabilizantes" | "Auxiliares";
const CHEM_COLOR: Record<ChemCat, string> = {
  Cloro: "#004985",
  Algicidas: "#00B4A0",
  Clarificantes: "#0a6cc4",
  "Correção de pH": "#F4A261",
  Estabilizantes: "#2D6A9F",
  Auxiliares: "#4A90D9",
};

const CHEM: { cat: ChemCat; name: string; desc: string; icon: ReactNode }[] = [
  { cat: "Cloro", name: "Cloro Granulado", desc: "Pó de alta dissolução. Destrói bactérias com ação imediata.", icon: <Chem /> },
  { cat: "Cloro", name: "Cloro Tablete (Triclorina)", desc: "Tabletes de liberação lenta. Age por dias.", icon: <Chem /> },
  { cat: "Cloro", name: "Cloro Líquido", desc: "Ação rápida para choque.", icon: <Chem /> },
  { cat: "Algicidas", name: "Algicida de Manutenção", desc: "Previne algas verdes, pretas e amarelas.", icon: <Drop /> },
  { cat: "Algicidas", name: "Algicida de Choque", desc: "Elimina infestações severas em 24h.", icon: <Drop /> },
  { cat: "Clarificantes", name: "Clarificante Líquido", desc: "Agrupa partículas e deixa a água cristalina.", icon: <Drop /> },
  { cat: "Clarificantes", name: "Floculante", desc: "Remove impurezas em suspensão.", icon: <Drop /> },
  { cat: "Correção de pH", name: "pH Menos", desc: "Reduz o pH para o nível ideal de 7,2 a 7,6.", icon: <Beaker /> },
  { cat: "Correção de pH", name: "pH Mais", desc: "Eleva o pH para equilíbrio da água.", icon: <Beaker /> },
  { cat: "Estabilizantes", name: "Ácido Cianúrico", desc: "Protege o cloro do sol. Prolonga a eficiência.", icon: <Sun /> },
  { cat: "Auxiliares", name: "Redutor de Alcalinidade", desc: "Controla a alcalinidade total.", icon: <Beaker /> },
  { cat: "Auxiliares", name: "Removedor de Manchas", desc: "Elimina manchas de metais e minerais.", icon: <Brush /> },
  { cat: "Auxiliares", name: "Anticalcário", desc: "Previne incrustações calcárias.", icon: <Filter /> },
];
const CHEM_CATS = ["Todos", "Cloro", "Algicidas", "Clarificantes", "Correção de pH", "Estabilizantes", "Auxiliares"];

function ChemCard({ p }: { p: (typeof CHEM)[number] }) {
  const { add, setOpen } = useCart();
  const color = CHEM_COLOR[p.cat];
  return (
    <div className="chem-card flex flex-col" style={{ borderLeftColor: color }}>
      <div className="flex items-center justify-between mb-3">
        <span
          className="text-[11px] font-semibold uppercase tracking-[0.15em] px-2.5 py-1 rounded-full text-white"
          style={{ background: color }}
        >
          {p.cat}
        </span>
        <div style={{ color }}>{p.icon}</div>
      </div>
      <div
        className="aspect-[5/3] rounded-lg mb-3 flex items-center justify-center"
        style={{ background: `linear-gradient(135deg, ${color}10, ${color}25)` }}
      >
        <div style={{ color }} className="opacity-70">
          {p.icon}
        </div>
      </div>
      <h3 className="font-display text-lg text-[#0f172a] leading-snug">{p.name}</h3>
      <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">{p.desc}</p>
      <div className="mt-4 flex items-center gap-2">
        <button
          onClick={() => {
            add(p.name);
            setOpen(true);
          }}
          className="btn-premium flex-1 inline-flex items-center justify-center gap-2 px-3 py-2.5 text-sm text-white"
          style={{ background: color }}
        >
          Adicionar ao carrinho
        </button>
        <a
          href={waProduct(p.name)}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Pedir ${p.name} no WhatsApp`}
          className="btn-premium w-10 h-10 inline-flex items-center justify-center text-white shrink-0"
          style={{ background: "var(--whatsapp)" }}
        >
          <WAIcon className="w-4 h-4" />
        </a>
      </div>
    </div>
  );
}

function ProductsChemistry() {
  const [active, setActive] = useState("Todos");
  const filtered = useMemo(
    () => (active === "Todos" ? CHEM : CHEM.filter((p) => p.cat === active)),
    [active],
  );
  return (
    <section id="quimica" className="section-y relative" style={{ background: "rgba(2,30,60,0.85)" }}>
      <div className="container-prose">
        <Reveal className="text-center max-w-4xl mx-auto">
          <span
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-[0.15em] uppercase font-medium text-white mb-6"
            style={{ background: "rgba(10,108,196,0.2)", border: "1px solid rgba(10,108,196,0.4)" }}
          >
            <Atom className="w-3.5 h-3.5" /> Curadoria de Engenheiro Químico — 30 anos de expertise
          </span>
          <h2 className="font-title text-white leading-tight" style={{ fontSize: "clamp(32px, 5vw, 56px)" }}>
            A água da sua piscina tem memória.
            <br />
            Ela lembra quando foi tratada do jeito certo.
          </h2>
          <p className="mt-6 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
            Formulações selecionadas por um engenheiro químico. Cada produto indicado com precisão técnica.
          </p>
        </Reveal>
        <div className="mt-12 filter-scroll md:justify-center">
          {CHEM_CATS.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`filter-chip ${active === c ? "active" : ""}`}
            >
              {c}
            </button>
          ))}
        </div>
        <div
          className="mt-12 grid gap-5"
          style={{ gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))" }}
        >
          {filtered.map((p, i) => (
            <ChemCard key={`${p.name}-${i}`} p={p} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   MARCAS
============================================================ */
function Brands() {
  const brands = [
    { name: "Maresias", file: "marca_maresias_hq.png" },
    { name: "Pace", file: "marca_pace_hq.png" },
    { name: "Rhofer", file: "marca_rhofer_hq.png" },
    { name: "HiPool / TFL", file: "marca_tfl_hipool_hq.png" },
    { name: "Hidrodomi", file: "marca_hidrodomi_hq.png" },
    { name: "Netuno", file: "marca_netuno_hq.png" },
    { name: "Albacete", file: "marca_albacete_hq.png" },
    { name: "Dancor", file: "marca_dancor_hq.png" },
    { name: "HTH", file: "marca_hth_hq.png" },
    { name: "Sodramar", file: "marca_sodramar_hq.png" },
    { name: "Brustec Lazer", file: "marca_brustec_hq.png" },
    { name: "Nautilus", file: "marca_nautilus_hq.png" },
    { name: "Jacuzzi", file: "marca_jacuzzi_hq.png" },
    { name: "Genco", file: "marca_genco_hq.png" },
  ];
  return (
    <section id="marcas" className="section-y relative" style={{ background: "rgba(225,242,252,0.92)" }}>
      <div className="container-prose">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section">As melhores marcas estão aqui</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {brands.map((b, i) => (
            <AnimOnView key={b.name} direction="from-bottom" delay={(i % 5) * 80}>
              <div
                className="bg-white rounded-xl p-5 h-[120px] flex items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_-15px_rgba(0,73,133,0.4)] hover:border-[#004985] border border-transparent"
                style={{ boxShadow: "0 4px 16px rgba(0,73,133,0.10)" }}
              >
                <img
                  src={`/brands/${b.file}`}
                  alt={b.name}
                  loading="lazy"
                  className="object-contain w-full max-h-[80px]"
                  onError={(e) => {
                    const img = e.currentTarget;
                    img.style.display = "none";
                    const parent = img.parentElement;
                    if (parent && !parent.querySelector(".brand-fallback")) {
                      const span = document.createElement("span");
                      span.className = "brand-fallback font-display text-xl text-[#0f172a] tracking-wide text-center";
                      span.textContent = b.name;
                      parent.appendChild(span);
                    }
                  }}
                />
              </div>
            </AnimOnView>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   SERVIÇOS — FLIP CARDS 3D
============================================================ */
function Services() {
  const items = [
    { icon: <Store />, title: "Venda de Produtos, Bombas e Acessórios", desc: "Linha completa para residências, condomínios e clubes." },
    { icon: <Gear />, title: "Manutenção de Bombas e Filtros", desc: "Diagnóstico e reparo com peças originais." },
    { icon: <Filter />, title: "Troca de Elementos Filtrantes", desc: "Mantemos a filtragem em performance máxima." },
    { icon: <Beaker />, title: "Análise e Diagnóstico da Água", desc: "Avaliação química completa em 10 minutos." },
    { icon: <Drop />, title: "Remoção de Vazamentos", desc: "Identificação e correção precisa." },
    { icon: <Ladder />, title: "Construção e Instalação de Piscinas", desc: "Projeto, execução e entrega completa." },
    { icon: <Bulb />, title: "Iluminação e LED", desc: "RGB e branca, com controle e instalação." },
    { icon: <Flame />, title: "Sauna — Instalação e Venda", desc: "Equipamentos selecionados e instalação técnica." },
    { icon: <Sun />, title: "Aquecedores de Água", desc: "Solar, elétrico e trocadores de calor." },
    { icon: <Spa />, title: "SPA e Banheira de Hidromassagem", desc: "Venda e suporte completo." },
    { icon: <Bolt />, title: "Geradores de Cloro (Salino)", desc: "Automação do tratamento via sal." },
    { icon: <Heart />, title: "Consultoria de Dosagens", desc: "Plano técnico individual para sua piscina." },
  ];
  const [flipped, setFlipped] = useState<number | null>(null);
  return (
    <section id="servicos" className="section-y relative" style={{ background: "rgba(11,79,122,0.88)" }}>
      <div className="container-prose">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" style={{ background: "var(--accent-light)" }} />
          <h2 className="h-section text-white">Soluções que vão além do produto</h2>
          <p className="mt-6 body-lg-on-dark max-w-2xl mx-auto">
            Serviços especializados conduzidos por equipe técnica.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <AnimOnView key={i} direction="from-bottom" delay={(i % 3) * 120}>
              <div
                className={`flip-card h-[260px] ${flipped === i ? "is-flipped" : ""}`}
                onClick={() => setFlipped((f) => (f === i ? null : i))}
                role="button"
                tabIndex={0}
              >
                <div className="flip-inner">
                  <div className="flip-face card-dark items-start">
                    <div className="text-[var(--accent-light)] w-12 h-12 flex items-center justify-center">
                      {s.icon}
                    </div>
                    <h3 className="font-display text-xl mt-5 text-white leading-snug">{s.title}</h3>
                    <p className="mt-auto text-xs uppercase tracking-[0.2em] text-white/50">
                      Toque para detalhes →
                    </p>
                  </div>
                  <div
                    className="flip-face flip-back items-start"
                    style={{
                      background: "linear-gradient(135deg, #004985, #003a6b)",
                      border: "1px solid rgba(255,255,255,0.15)",
                    }}
                  >
                    <h3 className="font-display text-lg text-white leading-snug">{s.title}</h3>
                    <p className="mt-3 text-sm text-white/85 leading-relaxed flex-1">{s.desc}</p>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="btn-premium mt-4 inline-flex items-center gap-2 px-4 py-2.5 text-sm text-white self-start"
                      style={{ background: "var(--whatsapp)" }}
                    >
                      <WAIcon className="w-4 h-4" /> Falar no WhatsApp
                    </a>
                  </div>
                </div>
              </div>
            </AnimOnView>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   COMO FUNCIONA
============================================================ */
function HowItWorks() {
  const steps = [
    { n: "01", title: "Nos chame no WhatsApp", icon: <WAIcon className="w-7 h-7" /> },
    { n: "02", title: "Diagnóstico em 10 minutos", icon: <Clock /> },
    { n: "03", title: "Produto ou visita técnica", icon: <Truck /> },
    { n: "04", title: "Piscina resolvida", icon: <CheckBadge /> },
  ];
  return (
    <section className="section-y" style={{ background: "var(--bg)" }}>
      <div className="container-prose">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section">Do diagnóstico à água perfeita</h2>
        </Reveal>
        <div className="mt-20 relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
          <div
            className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px draw-line"
            style={{
              background: "linear-gradient(to right, var(--accent), var(--accent-light), var(--accent))",
            }}
          />
          {steps.map((s, i) => (
            <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="relative text-center px-4">
                <div className="font-title text-7xl md:text-8xl" style={{ color: "rgba(0,73,133,0.10)" }}>
                  {s.n}
                </div>
                <div
                  className="relative -mt-12 mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white"
                  style={{ background: "var(--accent)", boxShadow: "0 12px 30px -10px rgba(0,73,133,0.45)" }}
                >
                  {s.icon}
                </div>
                <h3 className="mt-6 font-display text-xl">{s.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   OFFER BANNER
============================================================ */
function OfferBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="section-y px-6 text-center"
        style={{ background: "linear-gradient(135deg, #004985 0%, #003a6b 100%)" }}
      >
        <Reveal>
          <h2 className="h-section text-white max-w-3xl mx-auto">
            Sua piscina está esperando. A GQA não.
          </h2>
          <p className="mt-5 text-white/85 text-lg max-w-2xl mx-auto">
            Frete grátis para toda a região. Porque facilitar faz parte do nosso serviço.
          </p>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2 px-8 py-4 bg-white !text-[#003a6b] font-medium"
            >
              Falar no WhatsApp agora
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ============================================================
   FAQ
============================================================ */
function FAQ() {
  const faqs = [
    { q: "Como faço o tratamento da minha piscina?", a: "Nossa equipe faz um diagnóstico técnico em até 10 minutos e indica exatamente os produtos e dosagens corretos para o seu caso." },
    { q: "Vocês fazem visita presencial?", a: "Sim! Atendemos toda a região com visita técnica no local." },
    { q: "Qual o prazo de entrega?", a: "Entrega rápida em toda a região. Fale conosco para confirmar disponibilidade." },
    { q: "Vocês vendem para condomínios?", a: "Sim, atendemos residências, condomínios e clubes com preços especiais por volume." },
    { q: "Têm frete grátis?", a: "Sim! Frete grátis para toda a região." },
    { q: "Como funciona o diagnóstico em 10 minutos?", a: "Você nos conta o problema pelo WhatsApp ou pessoalmente. Nossos técnicos identificam a causa e indicam a solução em até 10 minutos." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-y" style={{ background: "var(--bg-2)" }}>
      <div className="container-prose max-w-3xl">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section">Respondemos antes de você perguntar</h2>
        </Reveal>
        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
                <div className="card-light overflow-hidden">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                  >
                    <span className="font-display text-lg text-text">{f.q}</span>
                    <span
                      className="shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-accent transition-transform"
                      style={{
                        background: "rgba(0,73,133,0.10)",
                        transform: isOpen ? "rotate(45deg)" : "rotate(0deg)",
                      }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className="grid transition-all duration-400 ease-out"
                    style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 pb-6 body-lg">{f.a}</p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   CONTATO
============================================================ */
function Contact() {
  const cards = [
    { icon: <WAIcon className="w-5 h-5" />, label: "WhatsApp", value: PHONE_LABEL, href: WHATSAPP_URL },
    { icon: <IGIcon />, label: "Instagram", value: "@gquimica.ambiental", href: INSTAGRAM_URL },
    { icon: <PinIcon className="w-5 h-5" />, label: "Endereço", value: "Estrada de Aldeia, 10.811 · Sala D · Km 12 — Aldeia, PE (ao lado do Sete Coqueiros)" },
    { icon: <Clock />, label: "Horário", value: "Seg–Sex 8h–18h · Sáb 8h–13h" },
  ];
  return (
    <section id="contato" className="section-y" style={{ background: "#0f172a" }}>
      <div className="container-prose">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section text-white">Estamos prontos para atender você</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div className="space-y-4">
              {cards.map((c, i) => {
                const Wrapper: React.ElementType = c.href ? "a" : "div";
                return (
                  <Wrapper
                    key={i}
                    {...(c.href ? { href: c.href, target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="card-dark flex items-start gap-4 p-6 hover:!translate-y-[-4px]"
                  >
                    <div
                      className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-[var(--accent-light)]"
                      style={{ background: "rgba(10,108,196,0.12)" }}
                    >
                      {c.icon}
                    </div>
                    <div className="min-w-0">
                      <div className="label-eyebrow label-eyebrow-light">{c.label}</div>
                      <div className="mt-1 text-white text-base leading-relaxed break-words">{c.value}</div>
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </Reveal>
          <Reveal delay={1}>
            <div>
              <div className="rounded-2xl overflow-hidden border border-white/10 min-h-[360px]">
                <iframe
                  title="Localização GQA — Aldeia, PE"
                  src="https://www.google.com/maps?q=Estrada+de+Aldeia+10811+Aldeia+Camarajibe+PE&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, minHeight: 360, display: "block" }}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <p className="mt-4 text-sm text-white/80 text-center">
                📍 Ao lado do Sete Coqueiros · Aldeia, PE
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ============================================================
   FOOTER
============================================================ */
function Footer() {
  return (
    <footer style={{ background: "#041020" }} className="pt-16 pb-8 px-6">
      <div className="container-prose text-center">
        <div className="logo-badge inline-flex items-center mx-auto">
          <img
            src={logo}
            alt="GQA"
            className="logo-halo object-contain"
            style={{ height: 44 }}
            width={150}
            height={44}
          />
        </div>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          <a href="#produtos" className="nav-link hover:text-white">Produtos</a>
          <a href="#quimica" className="nav-link hover:text-white">Linha Química</a>
          <a href="#servicos" className="nav-link hover:text-white">Serviços</a>
          <a href="#quem-somos" className="nav-link hover:text-white">Quem Somos</a>
          <a href="#faq" className="nav-link hover:text-white">FAQ</a>
          <a href="#contato" className="nav-link hover:text-white">Contato</a>
        </nav>
        <div className="mt-8 flex justify-center gap-4">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all"
          >
            <WAIcon className="w-4 h-4" />
          </a>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-[#dc2743]/60 transition-all"
          >
            <IGIcon />
          </a>
        </div>
        <div
          className="mt-10 pt-8 text-sm text-white/55 space-y-2"
          style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}
        >
          <p>GQA — Produtos para Piscina · Aldeia, PE (ao lado do Sete Coqueiros)</p>
          <p className="text-white/40">© 2025 GQA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

/* ============================================================
   ÍCONES
============================================================ */
function S({ children, size = 24 }: { children: ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}
function PinIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}
function WAIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
    </svg>
  );
}
function IGIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
    </svg>
  );
}
function CheckBadge() { return <S><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></S>; }
function Store() { return <S><path d="M3 9l1.5-5h15L21 9" /><path d="M3 9v11h18V9" /><path d="M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0" /></S>; }
function Truck() { return <S><path d="M3 7h13v10H3zM16 10h4l1 3v4h-5" /><circle cx="7" cy="18" r="1.5" /><circle cx="18" cy="18" r="1.5" /></S>; }
function Heart() { return <S><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></S>; }
function Gift() { return <S><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z" /></S>; }
function Chem() { return <S><path d="M9 3h6v5l4 9a4 4 0 01-4 5H9a4 4 0 01-4-5l4-9V3z" /><path d="M9 8h6" /></S>; }
function Drop() { return <S><path d="M12 2s6 7 6 12a6 6 0 11-12 0c0-5 6-12 6-12z" /></S>; }
function Beaker() { return <S><path d="M9 3h6M10 3v6L5 20a2 2 0 002 2h10a2 2 0 002-2L14 9V3" /></S>; }
function BeakerSm({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M10 3v6L5 20a2 2 0 002 2h10a2 2 0 002-2L14 9V3" />
    </svg>
  );
}
function Sun() { return <S><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" /></S>; }
function Gear() {
  return (
    <S>
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" />
    </S>
  );
}
function Filter() { return <S><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></S>; }
function Bolt() { return <S><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></S>; }
function Brush() { return <S><path d="M3 21l3-3M9 15l6-6 3 3-6 6-3-3z" /><path d="M14 4l6 6" /></S>; }
function Net() { return <S><circle cx="11" cy="11" r="7" /><path d="M16 16l5 5" /></S>; }
function Hose() { return <S><path d="M3 12c4 0 4-6 8-6s4 6 8 6-4 6-8 6" /></S>; }
function Bulb() { return <S><path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 3-2 5-3 7H8c-1-2-3-4-3-7a7 7 0 017-7z" /></S>; }
function Panel() { return <S><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8" cy="10" r="1.5" /><circle cx="14" cy="10" r="1.5" /><line x1="6" y1="16" x2="18" y2="16" /></S>; }
function Ladder() { return <S><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="7" y1="6" x2="17" y2="6" /><line x1="7" y1="11" x2="17" y2="11" /><line x1="7" y1="16" x2="17" y2="16" /></S>; }
function Float() { return <S><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></S>; }
function Thermo() { return <S><path d="M14 14V4a2 2 0 10-4 0v10a4 4 0 104 0z" /></S>; }
function Spa() { return <S><path d="M3 21h18M5 17h14M5 17c0-3 3-6 7-6s7 3 7 6M12 11V3" /></S>; }
function Flame() { return <S><path d="M12 2s4 5 4 9a4 4 0 11-8 0c0-4 4-9 4-9z" /></S>; }
function Clock() { return <S><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></S>; }
function Atom({ className = "" }: { className?: string }) {
  return (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="10" ry="4" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  );
}
