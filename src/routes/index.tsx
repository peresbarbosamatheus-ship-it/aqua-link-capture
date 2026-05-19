import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import heroPool from "@/assets/hero-pool.jpg";
import aboutPool from "@/assets/about-pool.jpg";
import logo from "@/assets/gqa-logo.png";
import { Header } from "@/components/Header";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";
import { FloatingInstagram } from "@/components/FloatingInstagram";
import { Counter } from "@/components/Counter";
import { Reveal } from "@/components/Reveal";

const WHATSAPP = "5581999125638";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;
const INSTAGRAM_URL = "https://instagram.com/gquimica.ambiental";
const PHONE_LABEL = "(81) 9 9912-5638";

const waProduct = (name: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(`Olá! Gostaria de saber mais sobre: ${name}`)}`;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GQA Produtos para Piscina Camaragibe PE" },
      {
        name: "description",
        content:
          "Loja especializada em produtos para piscina em Camaragibe. Diagnóstico em 10 minutos, técnicos especializados, visita presencial e frete grátis.",
      },
      { property: "og:title", content: "GQA — Produtos para Piscina em Camaragibe, PE" },
      { property: "og:description", content: "Diagnóstico em 10 min, técnicos especializados, visita presencial e frete grátis em Camaragibe." },
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
      <Differentials />
      <Products />
      <Brands />
      <Services />
      <HowItWorks />
      <OfferBanner />
      <About />
      <FAQ />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
      <FloatingInstagram />
    </div>
  );
}

/* ---------- HERO ---------- */
function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img src={heroPool} alt="Piscina cristalina GQA Camaragibe" className="absolute inset-0 w-full h-full object-cover" width={1920} height={1080} />
      <div
        className="absolute inset-0"
        style={{ background: "linear-gradient(to bottom, rgba(0,60,100,0.45) 0%, rgba(2,30,60,0.78) 100%)" }}
      />
      <div className="relative z-10 container-prose text-center pt-28 pb-32">
        <Reveal>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-medium bg-white/90 text-[#062A40]">
            <PinIcon className="w-3.5 h-3.5" /> Camaragibe, Pernambuco
          </span>
        </Reveal>
        <Reveal delay={1}>
          <h1 className="h-hero mt-8 text-white">
            Sua piscina perfeita<br />começa com uma ligação
          </h1>
        </Reveal>
        <Reveal delay={2}>
          <p className="mt-8 max-w-2xl mx-auto text-lg leading-relaxed" style={{ color: "rgba(255,255,255,0.82)" }}>
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
              className="btn-premium inline-flex items-center justify-center gap-3 px-7 py-4 text-base text-white w-full sm:w-auto"
              style={{ background: "var(--whatsapp)" }}
            >
              <WAIcon className="w-5 h-5" /> Diagnóstico Grátis no WhatsApp
            </a>
            <a
              href="#produtos"
              className="btn-premium inline-flex items-center justify-center px-7 py-4 border border-white/60 text-base text-white hover:bg-white hover:!text-[#062A40] w-full sm:w-auto"
            >
              Ver Produtos
            </a>
          </div>
        </Reveal>
      </div>
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/70 bounce-soft">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 9l6 6 6-6" /></svg>
      </div>
    </section>
  );
}

/* ---------- METRICS ---------- */
function Metrics() {
  const items = [
    { value: 25, suffix: "+", label: "Anos de experiência" },
    { value: 500, suffix: "+", label: "Clientes atendidos" },
    { value: 12, suffix: "", label: "Serviços especializados" },
    { value: 10, suffix: " min", label: "Tempo de diagnóstico" },
    { value: 100, suffix: "%", label: "Satisfação garantida" },
  ];
  return (
    <section className="section-y" style={{ background: "var(--bg-dark)" }}>
      <div className="container-prose grid grid-cols-2 md:grid-cols-5 gap-y-10">
        {items.map((m, i) => (
          <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3} className={`text-center px-4 ${i > 0 ? "md:border-l md:border-white/15" : ""}`}>
            <div className="font-title text-5xl md:text-6xl text-white leading-none">
              <Counter to={m.value} suffix={m.suffix} />
            </div>
            <div className="mt-4 label-eyebrow label-eyebrow-light">{m.label}</div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- DIFFERENTIALS ---------- */
function Differentials() {
  const items = [
    { icon: <CheckBadge />, title: "Qualidade Certificada", text: "Produtos das melhores marcas nacionais com certificação e garantia em cada item." },
    { icon: <Tag />, title: "Melhor Preço da Região", text: "Preços competitivos para residências, condomínios e clubes. Atacado e varejo." },
    { icon: <Store />, title: "Loja Completa", text: "Químicos, bombas, filtros, sauna, spa, LED — tudo em um lugar." },
    { icon: <Truck />, title: "Entrega na Região", text: "Atendemos Camaragibe e região com rapidez e pontualidade." },
    { icon: <Heart />, title: "Atendimento Humanizado", text: "Equipe técnica que escuta, diagnostica e resolve." },
    { icon: <Gift />, title: "Frete Grátis", text: "Entrega gratuita para Camaragibe em todos os pedidos." },
  ];
  return (
    <section className="section-y" style={{ background: "var(--bg)" }}>
      <div className="container-prose">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section">O que nos diferencia</h2>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="card-light h-full p-8">
                <div className="text-accent w-12 h-12 flex items-center justify-center rounded-xl" style={{ background: "rgba(0,150,199,0.08)" }}>
                  {it.icon}
                </div>
                <h3 className="font-display text-2xl mt-6 text-text">{it.title}</h3>
                <p className="mt-3 body-lg">{it.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- PRODUCTS ---------- */
type Product = { name: string; desc: string; cat: string; icon: React.ReactNode };

const PRODUCTS: Product[] = [
  // Químicos
  { cat: "Químicos", name: "Cloro Granulado", desc: "Pó de alta dissolução. Destrói bactérias com ação imediata.", icon: <Chem /> },
  { cat: "Químicos", name: "Cloro Tablete (Triclorina)", desc: "Tabletes de liberação lenta para flutuador.", icon: <Chem /> },
  { cat: "Químicos", name: "Algicida Manutenção e Choque", desc: "Elimina algas verdes, pretas e amarelas.", icon: <Drop /> },
  { cat: "Químicos", name: "Clarificante / Floculante", desc: "Deixa a água cristalina e transparente.", icon: <Drop /> },
  { cat: "Químicos", name: "pH Menos / pH Mais", desc: "Correção do pH para equilíbrio da água.", icon: <Beaker /> },
  { cat: "Químicos", name: "Estabilizante (Ácido Cianúrico)", desc: "Protege o cloro da ação do sol.", icon: <Sun /> },
  // Equipamentos
  { cat: "Equipamentos", name: "Bomba e Filtro (Kit completo)", desc: "Circulação e filtragem 24h.", icon: <Gear /> },
  { cat: "Equipamentos", name: "Motobomba para Piscina", desc: "Alta performance, baixo consumo.", icon: <Gear /> },
  { cat: "Equipamentos", name: "Filtro de Areia", desc: "Filtragem eficiente.", icon: <Filter /> },
  { cat: "Equipamentos", name: "Gerador de Cloro Salino", desc: "Cloro automático via sal, sem cheiro.", icon: <Bolt /> },
  // Limpeza
  { cat: "Limpeza", name: "Aspirador Manual", desc: "Remove sujeira do fundo.", icon: <Brush /> },
  { cat: "Limpeza", name: "Escova para Piscina", desc: "Para paredes e fundo.", icon: <Brush /> },
  { cat: "Limpeza", name: "Peneira / Skimmer", desc: "Captura folhas e resíduos.", icon: <Net /> },
  { cat: "Limpeza", name: "Mangueira de Aspiração", desc: "Flexível e resistente UV.", icon: <Hose /> },
  // Iluminação
  { cat: "Iluminação", name: "Refletor LED RGB", desc: "Iluminação colorida com controle remoto.", icon: <Bulb /> },
  { cat: "Iluminação", name: "Refletor LED Branco", desc: "Luz clean para piscinas modernas.", icon: <Bulb /> },
  { cat: "Iluminação", name: "Painel de Comando", desc: "Controle centralizado.", icon: <Panel /> },
  // Acessórios
  { cat: "Acessórios", name: "Escada para Piscina", desc: "Inox, resistente, fixação segura.", icon: <Ladder /> },
  { cat: "Acessórios", name: "Flutuador de Cloro", desc: "Distribui tabletes continuamente.", icon: <Float /> },
  { cat: "Acessórios", name: "Termômetro de Piscina", desc: "Medição precisa da temperatura.", icon: <Thermo /> },
  // Spa
  { cat: "Spa e Jacuzzi", name: "Banheira de Hidromassagem", desc: "Relaxamento com jatos potentes.", icon: <Spa /> },
  { cat: "Spa e Jacuzzi", name: "Bomba para Spa", desc: "Circulação e aquecimento.", icon: <Gear /> },
  { cat: "Spa e Jacuzzi", name: "Produtos Químicos para Spa", desc: "Linha específica para spas.", icon: <Beaker /> },
  // Aquecimento
  { cat: "Aquecimento", name: "Trocador de Calor", desc: "Aquece com eficiência.", icon: <Flame /> },
  { cat: "Aquecimento", name: "Aquecedor Solar (Placas)", desc: "Energia limpa para água quente.", icon: <Sun /> },
  { cat: "Aquecimento", name: "Aquecedor Elétrico", desc: "Aquecimento rápido e controlado.", icon: <Bolt /> },
];

const CATS = ["Todos", "Químicos", "Equipamentos", "Limpeza", "Iluminação", "Acessórios", "Spa e Jacuzzi", "Aquecimento"];

function Products() {
  const [active, setActive] = useState("Todos");
  const filtered = useMemo(
    () => (active === "Todos" ? PRODUCTS : PRODUCTS.filter((p) => p.cat === active)),
    [active]
  );
  return (
    <section id="produtos" className="section-y" style={{ background: "#ffffff" }}>
      <div className="container-prose">
        <Reveal className="text-center max-w-3xl mx-auto">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section">Tudo para sua piscina</h2>
          <p className="mt-6 body-lg">Produtos de qualidade, entrega rápida, suporte especializado.</p>
        </Reveal>

        <div className="mt-12 filter-scroll md:justify-center">
          {CATS.map((c) => (
            <button key={c} onClick={() => setActive(c)} className={`filter-chip ${active === c ? "active" : ""}`}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-5" style={{ gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))" }}>
          {filtered.map((p, i) => (
            <div key={`${p.name}-${i}`} className="card-light p-6 flex flex-col" style={{ animation: "overlay-fade 0.4s ease both" }}>
              <div
                className="aspect-[4/3] rounded-xl mb-5 flex items-center justify-center"
                style={{ background: "linear-gradient(135deg, rgba(0,150,199,0.08), rgba(72,202,228,0.15))" }}
                aria-label={`Placeholder ${p.name}`}
              >
                <div className="text-accent opacity-80">{p.icon}</div>
              </div>
              <span className="label-eyebrow text-xs">{p.cat}</span>
              <h3 className="font-display text-xl mt-2 text-text leading-snug">{p.name}</h3>
              <p className="mt-2 text-sm text-text-muted leading-relaxed flex-1">{p.desc}</p>
              <a
                href={waProduct(p.name)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-premium mt-5 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm text-white"
                style={{ background: "var(--whatsapp)" }}
              >
                <WAIcon className="w-4 h-4" /> Pedir no WhatsApp
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- BRANDS ---------- */
function Brands() {
  const brands = ["HTH", "Genco", "Clorin", "Pentair", "Sodramar", "Nautilus", "Syllent", "Jacuzzi", "Lorenzetti", "Zodiac", "BWT", "Maresias"];
  return (
    <section id="marcas" className="section-y" style={{ background: "var(--bg-2)" }}>
      <div className="container-prose">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section">As melhores marcas estão aqui</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {brands.map((b, i) => (
            <Reveal key={b} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="card-light h-24 flex items-center justify-center px-4">
                <span className="font-display text-xl text-[#062A40] tracking-wide">{b}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- SERVICES ---------- */
function Services() {
  const items = [
    { icon: <Store />, title: "Venda de Produtos, Bombas e Acessórios" },
    { icon: <Gear />, title: "Manutenção de Bombas e Filtros" },
    { icon: <Filter />, title: "Troca de Elementos Filtrantes" },
    { icon: <Beaker />, title: "Análise e Diagnóstico da Água" },
    { icon: <Drop />, title: "Remoção de Vazamentos" },
    { icon: <Ladder />, title: "Construção e Instalação de Piscinas" },
    { icon: <Bulb />, title: "Iluminação e LED" },
    { icon: <Flame />, title: "Sauna — Instalação e Venda" },
    { icon: <Sun />, title: "Aquecedores de Água" },
    { icon: <Spa />, title: "SPA e Banheira de Hidromassagem" },
    { icon: <Bolt />, title: "Geradores de Cloro (Salino)" },
    { icon: <Heart />, title: "Orientação de Dosagens e Consultoria" },
  ];
  return (
    <section id="servicos" className="section-y" style={{ background: "var(--bg-dark)" }}>
      <div className="container-prose">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" style={{ background: "var(--accent-light)" }} />
          <h2 className="h-section text-white">Muito mais do que produtos</h2>
          <p className="mt-6 body-lg-on-dark max-w-2xl mx-auto">
            Serviços especializados para sua piscina em Camaragibe.
          </p>
        </Reveal>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((s, i) => (
            <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="card-dark h-full p-8 flex flex-col">
                <div className="text-[var(--accent-light)] w-12 h-12 flex items-center justify-center">{s.icon}</div>
                <h3 className="font-display text-xl mt-5 text-white leading-snug flex-1">{s.title}</h3>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-link inline-flex items-center gap-2 text-sm mt-5 text-[var(--accent-light)] self-start"
                >
                  Solicitar orçamento →
                </a>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- HOW IT WORKS ---------- */
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
          <h2 className="h-section">Do problema à solução em 4 passos</h2>
        </Reveal>
        <div className="mt-20 relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6">
          <div
            className="hidden md:block absolute top-12 left-[12%] right-[12%] h-px draw-line"
            style={{ background: "linear-gradient(to right, var(--accent), var(--accent-light), var(--accent))" }}
          />
          {steps.map((s, i) => (
            <Reveal key={i} delay={((i % 3) + 1) as 1 | 2 | 3}>
              <div className="relative text-center px-4">
                <div className="font-title text-7xl md:text-8xl" style={{ color: "rgba(0,150,199,0.10)" }}>{s.n}</div>
                <div
                  className="relative -mt-12 mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white"
                  style={{ background: "var(--accent)", boxShadow: "0 12px 30px -10px rgba(0,150,199,0.45)" }}
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

/* ---------- OFFER BANNER ---------- */
function OfferBanner() {
  return (
    <section className="relative overflow-hidden">
      <div className="section-y px-6 text-center" style={{ background: "linear-gradient(135deg, #0096C7 0%, #023E8A 100%)" }}>
        <Reveal>
          <h2 className="h-section text-white max-w-3xl mx-auto">Frete Grátis para Camaragibe e Região</h2>
          <p className="mt-5 text-white/85 text-lg">Em todos os pedidos.</p>
          <div className="mt-10">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium inline-flex items-center gap-2 px-8 py-4 bg-white !text-[#023E8A] font-medium"
            >
              Aproveitar no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- ABOUT ---------- */
function About() {
  const pillars = [
    { title: "Experiência Técnica", text: "Equipe com conhecimento real de tratamento de água." },
    { title: "Atendimento Rápido", text: "Diagnóstico em 10 min, resposta imediata." },
    { title: "Visita Presencial", text: "Atendemos in loco quando necessário." },
  ];
  return (
    <section id="quem-somos" className="section-y" style={{ background: "#ffffff" }}>
      <div className="container-prose grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <Reveal>
          <div className="img-zoom rounded-2xl overflow-hidden relative">
            <img src={aboutPool} alt="Loja e equipe GQA" loading="lazy" width={1024} height={1024} className="w-full aspect-square object-cover" />
          </div>
        </Reveal>
        <Reveal delay={1}>
          <span className="gold-line mb-6" />
          <h2 className="h-section text-text">Uma história de excelência</h2>
          <p className="mt-6 body-lg max-w-xl">
            A GQA nasceu para resolver de verdade os problemas das piscinas em Camaragibe.
            Com técnicos especializados, produtos de qualidade e atendimento humanizado,
            somos o parceiro da sua piscina. Em até 10 minutos você recebe um diagnóstico
            completo — presencialmente ou pelo WhatsApp.
          </p>
          <div className="mt-10 space-y-6">
            {pillars.map((p) => (
              <div key={p.title} className="flex gap-4">
                <div className="mt-1 w-8 h-8 rounded-full flex items-center justify-center shrink-0" style={{ background: "rgba(0,150,199,0.12)" }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12" /></svg>
                </div>
                <div>
                  <h4 className="font-display text-lg text-text">{p.title}</h4>
                  <p className="text-sm text-text-muted mt-1">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function FAQ() {
  const faqs = [
    { q: "Como faço o tratamento da minha piscina?", a: "Nossa equipe faz um diagnóstico em até 10 minutos e indica exatamente os produtos e dosagens corretos para o seu caso." },
    { q: "Vocês fazem visita presencial?", a: "Sim! Atendemos Camaragibe e região com visita técnica no local." },
    { q: "Qual o prazo de entrega?", a: "Para Camaragibe, fazemos entrega rápida. Fale conosco para confirmar disponibilidade." },
    { q: "Vocês vendem para condomínios?", a: "Sim, atendemos residências, condomínios e clubes com preços especiais por volume." },
    { q: "Têm frete grátis?", a: "Sim! Frete grátis para pedidos em Camaragibe e região." },
    { q: "Como funciona o diagnóstico em 10 minutos?", a: "Você nos conta o problema pelo WhatsApp ou pessoalmente. Nossos técnicos identificam a causa e indicam a solução em até 10 minutos." },
  ];
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="section-y" style={{ background: "var(--bg-2)" }}>
      <div className="container-prose max-w-3xl">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section">Perguntas frequentes</h2>
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
                      style={{ background: "rgba(0,150,199,0.10)", transform: isOpen ? "rotate(45deg)" : "rotate(0deg)" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14" /></svg>
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

/* ---------- CONTACT ---------- */
function Contact() {
  const cards = [
    { icon: <WAIcon className="w-5 h-5" />, label: "WhatsApp", value: PHONE_LABEL, href: WHATSAPP_URL },
    { icon: <IGIcon />, label: "Instagram", value: "@gquimica.ambiental", href: INSTAGRAM_URL },
    { icon: <PinIcon className="w-5 h-5" />, label: "Endereço", value: "Estrada de Aldeia, 10.811 · Sala D · Km 12 — Aldeia, Camaragibe/PE" },
    { icon: <Clock />, label: "Horário", value: "Seg–Sex 8h–18h · Sáb 8h–13h" },
  ];
  return (
    <section id="contato" className="section-y" style={{ background: "#062A40" }}>
      <div className="container-prose">
        <Reveal className="text-center">
          <span className="gold-line gold-line-center mb-6" />
          <h2 className="h-section text-white">Venha nos visitar</h2>
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
                    className="card-dark flex items-start gap-4 p-6 block hover:!translate-y-[-4px]"
                  >
                    <div className="shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-[var(--accent-light)]" style={{ background: "rgba(72,202,228,0.12)" }}>
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
            <div className="rounded-2xl overflow-hidden border border-white/10 h-full min-h-[360px]">
              <iframe
                title="Localização GQA Camaragibe"
                src="https://www.google.com/maps?q=Estrada+de+Aldeia+10811+Camaragibe+PE&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 360, display: "block" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- FOOTER ---------- */
function Footer() {
  return (
    <footer style={{ background: "#041020" }} className="pt-16 pb-8 px-6">
      <div className="container-prose text-center">
        <img src={logo} alt="GQA" className="logo-shadow mx-auto" style={{ height: 48, opacity: 0.9 }} width={140} height={48} />
        <nav className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70">
          <a href="#produtos" className="nav-link hover:text-white">Produtos</a>
          <a href="#servicos" className="nav-link hover:text-white">Serviços</a>
          <a href="#quem-somos" className="nav-link hover:text-white">Quem Somos</a>
          <a href="#faq" className="nav-link hover:text-white">FAQ</a>
          <a href="#contato" className="nav-link hover:text-white">Contato</a>
        </nav>
        <div className="mt-8 flex justify-center gap-4">
          <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all">
            <WAIcon className="w-4 h-4" />
          </a>
          <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-[#dc2743]/60 transition-all">
            <IGIcon />
          </a>
        </div>
        <div className="mt-10 pt-8 text-sm text-white/55 space-y-2" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p>GQA — Produtos para Piscina | Camaragibe, PE</p>
          <p className="text-white/40">© 2025 GQA. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

/* ---------- ICONS ---------- */
function S({ children, size = 24 }: { children: React.ReactNode; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {children}
    </svg>
  );
}
function PinIcon({ className = "" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z" /><circle cx="12" cy="10" r="2.5" /></svg>); }
function WAIcon({ className = "" }: { className?: string }) { return (<svg className={className} viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" /></svg>); }
function IGIcon() { return (<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>); }
function CheckBadge() { return (<S><path d="M9 12l2 2 4-4" /><circle cx="12" cy="12" r="9" /></S>); }
function Tag() { return (<S><path d="M20 12V4h-8L3 13l8 8 9-9z" /><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor" /></S>); }
function Store() { return (<S><path d="M3 9l1.5-5h15L21 9" /><path d="M3 9v11h18V9" /><path d="M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0" /></S>); }
function Truck() { return (<S><path d="M3 7h13v10H3zM16 10h4l1 3v4h-5" /><circle cx="7" cy="18" r="1.5" /><circle cx="18" cy="18" r="1.5" /></S>); }
function Heart() { return (<S><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></S>); }
function Gift() { return (<S><polyline points="20 12 20 22 4 22 4 12" /><rect x="2" y="7" width="20" height="5" /><line x1="12" y1="22" x2="12" y2="7" /><path d="M12 7H7.5a2.5 2.5 0 010-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 100-5C13 2 12 7 12 7z" /></S>); }
function Chem() { return (<S><path d="M9 3h6v5l4 9a4 4 0 01-4 5H9a4 4 0 01-4-5l4-9V3z" /><path d="M9 8h6" /></S>); }
function Drop() { return (<S><path d="M12 2s6 7 6 12a6 6 0 11-12 0c0-5 6-12 6-12z" /></S>); }
function Beaker() { return (<S><path d="M9 3h6M10 3v6L5 20a2 2 0 002 2h10a2 2 0 002-2L14 9V3" /></S>); }
function Sun() { return (<S><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" /></S>); }
function Gear() { return (<S><circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" /></S>); }
function Filter() { return (<S><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" /></S>); }
function Bolt() { return (<S><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></S>); }
function Brush() { return (<S><path d="M3 21l3-3M9 15l6-6 3 3-6 6-3-3z" /><path d="M14 4l6 6" /></S>); }
function Net() { return (<S><circle cx="11" cy="11" r="7" /><path d="M16 16l5 5" /></S>); }
function Hose() { return (<S><path d="M3 12c4 0 4-6 8-6s4 6 8 6-4 6-8 6" /></S>); }
function Bulb() { return (<S><path d="M9 18h6M10 22h4M12 2a7 7 0 017 7c0 3-2 5-3 7H8c-1-2-3-4-3-7a7 7 0 017-7z" /></S>); }
function Panel() { return (<S><rect x="3" y="4" width="18" height="16" rx="2" /><circle cx="8" cy="10" r="1.5" /><circle cx="14" cy="10" r="1.5" /><line x1="6" y1="16" x2="18" y2="16" /></S>); }
function Ladder() { return (<S><line x1="7" y1="2" x2="7" y2="22" /><line x1="17" y1="2" x2="17" y2="22" /><line x1="7" y1="6" x2="17" y2="6" /><line x1="7" y1="11" x2="17" y2="11" /><line x1="7" y1="16" x2="17" y2="16" /></S>); }
function Float() { return (<S><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="3" /></S>); }
function Thermo() { return (<S><path d="M14 14V4a2 2 0 10-4 0v10a4 4 0 104 0z" /></S>); }
function Spa() { return (<S><path d="M3 21h18M5 17h14M5 17c0-3 3-6 7-6s7 3 7 6M12 11V3" /></S>); }
function Flame() { return (<S><path d="M12 2s4 5 4 9a4 4 0 11-8 0c0-4 4-9 4-9z" /></S>); }
function Clock() { return (<S><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></S>); }
