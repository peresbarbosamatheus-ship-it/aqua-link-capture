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

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const nav = [
    { label: "Produtos", href: "#produtos" },
    { label: "Serviços", href: "#diferenciais" },
    { label: "Sobre", href: "#sobre" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "backdrop-blur-xl border-b border-white/5" : ""
        }`}
        style={{ background: scrolled || open ? "rgba(2,11,24,0.85)" : "transparent" }}
      >
        <div className="max-w-[1200px] mx-auto px-6 lg:px-10 py-5 flex items-center justify-between">
          <a href="#" className="font-title text-2xl tracking-[0.3em] text-text relative z-[60]">
            GQA
          </a>
          <nav className="hidden lg:flex items-center gap-10">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="nav-link text-sm text-text-muted hover:text-text transition-colors tracking-wide"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-premium hidden lg:inline-flex items-center px-5 py-2.5 border border-white/40 text-sm tracking-wide hover:bg-white hover:!text-bg"
          >
            Falar com Especialista
          </a>
          <button
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="lg:hidden text-text relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className="block w-6 h-[1.5px] bg-current transition-transform duration-300"
              style={{ transform: open ? "translateY(4px) rotate(45deg)" : "none" }}
            />
            <span
              className="block w-6 h-[1.5px] bg-current transition-transform duration-300"
              style={{ transform: open ? "translateY(-4px) rotate(-45deg)" : "none" }}
            />
          </button>
        </div>
      </header>

      {open && (
        <div
          className="fixed inset-0 z-40 lg:hidden overlay-fade"
          style={{ background: "rgba(2,8,18,0.98)", backdropFilter: "blur(20px)" }}
        >
          <div className="h-full flex flex-col justify-center items-center gap-8 px-6">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="font-title text-3xl text-text"
              >
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-premium mt-6 inline-flex items-center justify-center px-7 py-4 border border-white/40 text-sm tracking-wide"
            >
              Falar com Especialista
            </a>
          </div>
        </div>
      )}
    </>
  );
}
