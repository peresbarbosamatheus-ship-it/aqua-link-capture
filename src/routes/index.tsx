import { createFileRoute } from "@tanstack/react-router";
import heroPool from "@/assets/hero-pool.jpg";
import aboutPool from "@/assets/about-pool.jpg";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

const WHATSAPP_URL = "https://wa.me/5581999999999";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GQA Produtos para Piscina Camaragibe PE" },
      {
        name: "description",
        content:
          "Loja especializada em produtos para piscina em Camaragibe, PE. Diagnóstico em 10 minutos no WhatsApp, técnicos especializados e frete grátis na região.",
      },
      { property: "og:title", content: "GQA — Produtos para Piscina em Camaragibe, PE" },
      { property: "og:description", content: "Diagnóstico em 10 min, técnicos especializados e frete grátis em Camaragibe." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="bg-bg text-text overflow-x-hidden">
      <Header />
      <Hero />
      <Metrics />
      <About />
      <Differentials />
      <Products />
      <HowItWorks />
      <OfferBanner />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

function PinIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroPool}
        alt="Piscina iluminada GQA Camaragibe"
        className="absolute inset-0 w-full h-full object-cover"
        width={1920}
        height={1080}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, rgba(2,11,24,0.35) 0%, rgba(2,11,24,0.7) 60%, rgba(2,11,24,0.95) 100%)",
        }}
      />
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 text-center pt-28 pb-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full label-eyebrow bg-white/90 !text-bg font-medium">
            <PinIcon /> Camaragibe, Pernambuco
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="h-hero mt-8 text-text">
            Sua piscina perfeita<br />começa com uma ligação
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 body-lg max-w-2xl mx-auto">
            Diagnóstico especializado em até 10 minutos. Técnicos treinados.
            Visita presencial. Frete grátis em Camaragibe.
          </p>
        </Reveal>
        <Reveal delay={3}>
          <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center justify-center gap-3 px-7 py-4 text-base font-medium text-white w-full sm:w-auto"
              style={{ background: "var(--whatsapp)" }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
              </svg>
              Diagnóstico Grátis no WhatsApp
            </a>
            <a
              href="#produtos"
              className="btn-premium inline-flex items-center justify-center px-7 py-4 border border-white/50 text-base text-text hover:bg-white hover:!text-bg w-full sm:w-auto"
            >
              Ver Produtos
            </a>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 bounce-soft">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M6 9l6 6 6-6" />
        </svg>
      </div>
    </section>
  );
}

function Metrics() {
  const items = [
    { value: 10, suffix: " min", label: "Tempo de resposta" },
    { value: 100, suffix: "%", label: "Atendimento especializado" },
    { value: "Grátis", label: "Frete para Camaragibe" },
  ];
  return (
    <section className="bg-bg-2 section-y">
      <div className="divider-soft absolute left-0 right-0" />
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0">
        {items.map((m, i) => (
          <Reveal
            key={i}
            delay={(i + 1) as 1 | 2 | 3}
            className={`text-center px-6 ${i > 0 ? "md:border-l md:border-white/10" : ""}`}
          >
            <div className="font-title text-5xl md:text-6xl lg:text-7xl text-text">
              {typeof m.value === "number" ? (
                <Counter to={m.value} suffix={m.suffix} />
              ) : (
                m.value
              )}
            </div>
            <div className="mt-4 label-eyebrow">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="bg-bg section-y">
      <div className="max-w-[1100px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        <Reveal>
          <span className="gold-line mb-8" />
          <h2 className="h-section text-text">
            GQA — Especialistas em piscinas em Camaragibe
          </h2>
          <p className="mt-8 body-lg max-w-xl">
            Mais do que uma loja, somos um time de especialistas prontos para
            resolver qualquer problema da sua piscina. Em até 10 minutos você
            sabe exatamente o que fazer.
          </p>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="nav-link inline-flex items-center gap-2 text-accent"
            >
              Conversar com especialista →
            </a>
          </div>
        </Reveal>
        <Reveal delay={1}>
          <div className="relative">
            <div className="img-zoom rounded-lg shadow-premium">
              <img
                src={aboutPool}
                alt="Piscina premium"
                loading="lazy"
                width={1024}
                height={1024}
                className="w-full aspect-square object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-gold/40 hidden sm:block" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Differentials() {
  const items = [
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <circle cx="12" cy="12" r="9" />
          <path d="M12 7v5l3 2" />
        </svg>
      ),
      title: "Diagnóstico em 10 Minutos",
      text: "Você descreve o problema, nossos técnicos resolvem na hora.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l8 3v6c0 4.5-3.5 8-8 9-4.5-1-8-4.5-8-9V6l8-3z" />
        </svg>
      ),
      title: "Técnicos Especializados",
      text: "Orientação completa do tratamento da água da sua piscina.",
    },
    {
      icon: (
        <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z" />
          <circle cx="12" cy="10" r="2.5" />
        </svg>
      ),
      title: "Visita Presencial",
      text: "Atendemos em Camaragibe e região com visita técnica no local.",
    },
  ];
  return (
    <section id="diferenciais" className="bg-bg-2 section-y">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section">Por que escolher a GQA?</h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {items.map((it, i) => (
            <Reveal key={i} delay={(i + 1) as 1 | 2 | 3}>
              <div
                className="group h-full p-10 rounded-2xl border shadow-premium-hover"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  borderColor: "rgba(255,255,255,0.08)",
                }}
              >
                <div className="text-accent">{it.icon}</div>
                <h3 className="font-display font-medium text-2xl mt-8 text-text">
                  {it.title}
                </h3>
                <p className="mt-4 body-lg">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Products() {
  const items = [
    { name: "Produtos Químicos", icon: <path d="M9 3h6v4l4 9a5 5 0 01-5 7H10a5 5 0 01-5-7l4-9V3z" /> },
    { name: "Filtros e Bombas", icon: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" /></> },
    { name: "Iluminação", icon: <><path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 3-2 5-3 7H8c-1-2-3-4-3-7a7 7 0 017-7z" /></> },
    { name: "Acessórios", icon: <><circle cx="12" cy="12" r="9" /><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18" /></> },
    { name: "Equipamentos", icon: <><rect x="3" y="6" width="18" height="14" rx="2" /><path d="M8 6V4h8v2" /></> },
    { name: "Aquecimento", icon: <><path d="M12 2s4 5 4 9a4 4 0 11-8 0c0-4 4-9 4-9z" /></> },
  ];
  return (
    <section id="produtos" className="bg-bg section-y">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="text-center max-w-3xl mx-auto">
          <h2 className="h-section">
            Tudo para sua piscina<br />em um só lugar
          </h2>
          <p className="mt-6 body-lg">
            Produtos de qualidade, entrega rápida, suporte especializado.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 lg:gap-6">
          {items.map((p, i) => (
            <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div
                className="group relative overflow-hidden rounded-2xl p-10 text-center shadow-premium-hover cursor-pointer"
                style={{ background: "var(--bg-2)" }}
              >
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(135deg, rgba(0,150,199,0.18), rgba(0,150,199,0))" }}
                />
                <div className="relative">
                  <div className="mx-auto w-14 h-14 flex items-center justify-center text-accent">
                    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {p.icon}
                    </svg>
                  </div>
                  <h3 className="mt-6 font-display text-lg text-text tracking-wide">
                    {p.name}
                  </h3>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium inline-flex items-center gap-2 px-7 py-4 border border-accent text-accent hover:bg-accent hover:!text-text"
          >
            Consultar disponibilidade no WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    { n: "01", title: "Fale pelo WhatsApp", icon: <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" /> },
    { n: "02", title: "Diagnóstico em 10 min", icon: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></> },
    { n: "03", title: "Receba em casa", icon: <><path d="M3 7h13v10H3zM16 10h4l1 3v4h-5" /><circle cx="7" cy="18" r="1.5" /><circle cx="18" cy="18" r="1.5" /></> },
  ];
  return (
    <section className="bg-bg-2 section-y relative">
      <div className="max-w-[1100px] mx-auto px-6">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section">Simples assim</h2>
        </Reveal>
        <div className="mt-20 relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6">
          <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-px" style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.12), transparent)" }} />
          {steps.map((s, i) => (
            <Reveal key={i} delay={(i + 1) as 1 | 2 | 3}>
              <div className="relative text-center px-4">
                <div className="font-title text-7xl md:text-8xl" style={{ color: "rgba(255,255,255,0.06)" }}>
                  {s.n}
                </div>
                <div className="relative -mt-12 mx-auto w-16 h-16 rounded-full flex items-center justify-center text-accent border border-white/10" style={{ background: "var(--bg)" }}>
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    {s.icon}
                  </svg>
                </div>
                <h3 className="mt-6 font-display text-xl tracking-wide">{s.title}</h3>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function OfferBanner() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="section-y px-6 text-center"
        style={{ background: "linear-gradient(135deg, #0096C7 0%, #023E8A 100%)" }}
      >
        <Reveal>
          <h2 className="h-section text-white max-w-3xl mx-auto">
            Frete Grátis para Camaragibe e Região
          </h2>
          <p className="mt-5 text-white/85 text-lg">Em todos os pedidos.</p>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2 px-8 py-4 bg-white !text-[#023E8A] font-medium shadow-premium"
            >
              Aproveitar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer id="contato" style={{ background: "#010810" }} className="pt-20 pb-10 px-6">
      <div className="max-w-[1100px] mx-auto text-center">
        <div className="font-title text-3xl tracking-[0.3em]">GQA</div>
        <nav className="mt-8 flex flex-wrap justify-center gap-8 text-sm text-text-muted">
          <a href="#produtos" className="nav-link hover:text-text">Produtos</a>
          <a href="#diferenciais" className="nav-link hover:text-text">Serviços</a>
          <a href="#contato" className="nav-link hover:text-text">Contato</a>
        </nav>
        <div className="mt-8 flex justify-center gap-5">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-text-muted hover:text-white hover:border-white/40 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
            </svg>
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-text-muted hover:text-white hover:border-white/40 transition-all"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
            </svg>
          </a>
        </div>
        <div className="mt-10 pt-8 text-sm text-text-muted space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          <p>GQA — Produtos para Piscina | Camaragibe, PE</p>
          <p className="text-text-muted/70">© 2025 GQA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
