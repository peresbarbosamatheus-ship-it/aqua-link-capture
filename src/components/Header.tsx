import { useEffect, useState } from "react";

const WHATSAPP_URL = "https://wa.me/5581999999999";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const nav = [
    { label: "Produtos", href: "#produtos" },
    { label: "Serviços", href: "#diferenciais" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl border-b border-white/5"
          : ""
      }`}
      style={{
        background: scrolled ? "rgba(2,11,24,0.85)" : "transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
        <a href="#" className="font-title text-2xl tracking-[0.3em] text-text">
          GQA
        </a>
        <nav className="hidden lg:flex items-center gap-10">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm text-text-muted hover:text-text transition-colors tracking-wide"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center px-5 py-2.5 border border-white/40 text-sm tracking-wide rounded-full hover:bg-white hover:text-bg transition-all duration-300"
        >
          Falar com Especialista
        </a>
        <button
          aria-label="Menu"
          className="lg:hidden text-text"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <><path d="M3 7h18" /><path d="M3 17h18" /></>}
          </svg>
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-white/5 backdrop-blur-xl" style={{ background: "rgba(2,11,24,0.95)" }}>
          <div className="px-6 py-6 flex flex-col gap-5">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="text-text-muted hover:text-text"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-3 border border-white/40 text-sm rounded-full"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
