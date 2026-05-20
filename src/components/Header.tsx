import { useEffect, useState } from "react";
import logo from "@/assets/gqa-logo.png";
import { CartIcon } from "@/components/cart/Cart";

const WHATSAPP_URL = "https://wa.me/5581999125638";
const PHONE_LABEL = "(81) 9 9912-5638";

const NAV = [
  { label: "Quem Somos", href: "#quem-somos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Marcas", href: "#marcas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      {/* TOPBAR */}
      <div className="hidden md:block w-full text-white text-xs" style={{ background: "#062A40" }}>
        <div className="container-prose flex items-center justify-between py-2">
          <div className="flex items-center gap-3 opacity-90">
            <span className="w-2 h-2 rounded-full bg-[#48CAE4] pulse-dot" aria-hidden />
            <span>Aldeia, PE — ao lado do Sete Coqueiros</span>
          </div>
          <div className="flex items-center gap-5 opacity-90">
            <span>Seg–Sex 8h–18h · Sáb 8h–13h</span>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 text-[#48CAE4] hover:text-white transition-colors">
              <WAIcon className="w-3.5 h-3.5" /> {PHONE_LABEL}
            </a>
          </div>
        </div>
      </div>

      <header
        className="fixed left-0 right-0 z-50 transition-all duration-500"
        style={{
          top: 0,
          background: scrolled || open ? "rgba(6,42,64,0.92)" : "transparent",
          backdropFilter: scrolled || open ? "blur(20px)" : "none",
          WebkitBackdropFilter: scrolled || open ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "1px solid transparent",
        }}
      >
        <div className="container-prose flex items-center justify-between py-3 md:py-4">
          <a href="#" className="relative z-[60] flex items-center logo-badge">
            <img
              src={logo}
              alt="GQA — Produtos para Piscina"
              className="logo-halo object-contain"
              style={{ height: 44 }}
              width={150}
              height={44}
            />
            <style>{`@media (min-width: 1024px) { header img[alt^="GQA"] { height: 58px !important; } }`}</style>
          </a>
          <nav className="hidden lg:flex items-center gap-8">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} className="nav-link text-sm tracking-wide text-white">
                {n.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-2">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-premium hidden lg:inline-flex items-center gap-2 px-4 py-2.5 text-sm text-white"
              style={{ background: "var(--whatsapp)" }}
            >
              <WAIcon className="w-4 h-4" /> {PHONE_LABEL}
            </a>
            <CartIcon />
            <button
              aria-label={open ? "Fechar menu" : "Abrir menu"}
              aria-expanded={open}
              className="lg:hidden text-white relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="block w-6 h-[2px] bg-current transition-transform duration-300" style={{ transform: open ? "translateY(4px) rotate(45deg)" : "none" }} />
              <span className="block w-6 h-[2px] bg-current transition-transform duration-300" style={{ transform: open ? "translateY(-4px) rotate(-45deg)" : "none" }} />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-40 lg:hidden overlay-fade" style={{ background: "rgba(6,42,64,0.98)", backdropFilter: "blur(20px)" }}>
          <div className="h-full flex flex-col justify-center items-center gap-7 px-6">
            {NAV.map((n) => (
              <a key={n.href} href={n.href} onClick={() => setOpen(false)} className="font-title text-3xl text-white">
                {n.label}
              </a>
            ))}
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="btn-premium mt-6 inline-flex items-center justify-center gap-2 px-7 py-4 text-sm text-white"
              style={{ background: "var(--whatsapp)" }}
            >
              <WAIcon className="w-4 h-4" /> {PHONE_LABEL}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function WAIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
    </svg>
  );
}
