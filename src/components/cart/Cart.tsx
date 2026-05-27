import { useEffect, useState } from "react";
import { useCart } from "./CartContext";

const WHATSAPP = "5581999125638";

export function CartIcon({ dark = false }: { dark?: boolean }) {
  const { count, setOpen, bumped } = useCart();
  const [bump, setBump] = useState(false);
  useEffect(() => {
    if (bumped === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 450);
    return () => clearTimeout(t);
  }, [bumped]);
  return (
    <button
      aria-label={`Carrinho (${count})`}
      onClick={() => setOpen(true)}
      className="relative w-10 h-10 flex items-center justify-center rounded-full transition-transform"
      style={{ color: dark ? "#0f172a" : "#fff", transform: bump ? "scale(1.18)" : "scale(1)", transitionDuration: "0.25s" }}
    >
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3h2l2.4 12.3a2 2 0 002 1.7h8.7a2 2 0 002-1.6L21 8H6" />
        <circle cx="9" cy="20" r="1.6" />
        <circle cx="18" cy="20" r="1.6" />
      </svg>
      {count > 0 && (
        <span
          className="absolute -top-0.5 -right-0.5 min-w-[20px] h-[20px] px-1 rounded-full text-[11px] font-semibold flex items-center justify-center text-white"
          style={{ background: "var(--accent)", boxShadow: "0 0 0 2px rgba(6,42,64,0.9)" }}
        >
          {count}
        </span>
      )}
    </button>
  );
}

export function CartDrawer() {
  const { items, open, setOpen, setQty, remove, count, clear } = useCart();

  const waUrl = (() => {
    if (!items.length) return `https://wa.me/${WHATSAPP}`;
    const lines = items.map((i) => `• ${i.name} — ${i.qty}x`).join("\n");
    const msg = `Olá! Tenho interesse nos seguintes produtos:\n${lines}\n\nPoderia me passar informações?`;
    return `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
  })();

  return (
    <>
      <div
        onClick={() => setOpen(false)}
        className="fixed inset-0 z-[80] transition-opacity duration-300"
        style={{ background: "rgba(2,16,32,0.6)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" }}
        aria-hidden
      />
      <aside
        role="dialog"
        aria-label="Carrinho"
        className="fixed top-0 right-0 bottom-0 z-[90] w-full max-w-[420px] flex flex-col"
        style={{
          background: "#fff",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: "-20px 0 60px rgba(2,16,32,0.35)",
        }}
      >
        <header className="flex items-center justify-between px-6 py-5 border-b border-[rgba(0,42,64,0.08)]">
          <div>
            <div className="font-display text-2xl text-[#0f172a]">Seu carrinho</div>
            <div className="text-xs text-text-muted mt-1">{count} {count === 1 ? "item" : "itens"}</div>
          </div>
          <button aria-label="Fechar" onClick={() => setOpen(false)} className="w-9 h-9 rounded-full hover:bg-black/5 flex items-center justify-center text-[#0f172a]">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M6 6l12 12M18 6L6 18" /></svg>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          {items.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-text-muted py-20">
              <div className="w-16 h-16 rounded-full flex items-center justify-center" style={{ background: "rgba(0,73,133,0.08)" }}>
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 3h2l2.4 12.3a2 2 0 002 1.7h8.7a2 2 0 002-1.6L21 8H6" /></svg>
              </div>
              <p className="text-sm">Seu carrinho está vazio.</p>
              <p className="text-xs">Adicione produtos para solicitar pelo WhatsApp.</p>
            </div>
          ) : (
            <ul className="space-y-3">
              {items.map((it) => (
                <li key={it.name} className="flex items-start gap-3 p-3 rounded-xl border border-[rgba(0,73,133,0.15)]">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-[#0f172a] leading-snug">{it.name}</p>
                    <div className="mt-2 inline-flex items-center gap-2 rounded-full border border-[rgba(0,42,64,0.12)]">
                      <button onClick={() => setQty(it.name, it.qty - 1)} className="w-7 h-7 flex items-center justify-center text-[#0f172a] hover:bg-black/5 rounded-full" aria-label="Menos">−</button>
                      <span className="text-sm w-5 text-center">{it.qty}</span>
                      <button onClick={() => setQty(it.name, it.qty + 1)} className="w-7 h-7 flex items-center justify-center text-[#0f172a] hover:bg-black/5 rounded-full" aria-label="Mais">+</button>
                    </div>
                  </div>
                  <button onClick={() => remove(it.name)} aria-label="Remover" className="shrink-0 w-7 h-7 rounded-full text-text-muted hover:text-red-600 hover:bg-red-50 flex items-center justify-center">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" /></svg>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>

        <footer className="px-6 py-5 border-t border-[rgba(0,42,64,0.08)] space-y-3">
          {items.length > 0 && (
            <button onClick={clear} className="text-xs text-text-muted hover:text-[#0f172a] underline">Limpar carrinho</button>
          )}
          <a
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setOpen(false)}
            className={`btn-premium w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base text-white ${items.length === 0 ? "opacity-60 pointer-events-none" : ""}`}
            style={{ background: "var(--whatsapp)" }}
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor"><path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" /></svg>
            Finalizar pelo WhatsApp
          </a>
        </footer>
      </aside>
    </>
  );
}
