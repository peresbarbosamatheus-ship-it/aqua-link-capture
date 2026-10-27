import { jsxRuntimeExports, reactExports } from "./server-SoT0gpoX.mjs";
import { CartProvider, useCart } from "./router-Blg7nE7f.mjs";
import "node:async_hooks";
import "node:stream/web";
import "node:stream";
function Reveal$1({
  children,
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const delayClass = delay ? `reveal-delay-${delay}` : "";
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `reveal ${shown ? "in" : ""} ${delayClass} ${className}`, children });
}
function useElementScrollProgress() {
  const ref = reactExports.useRef(null);
  const [progress, setProgress] = reactExports.useState(0);
  reactExports.useEffect(() => {
    let raf = 0;
    const compute = () => {
      const el = ref.current;
      if (!el) {
        raf = 0;
        return;
      }
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = el.offsetHeight - vh;
      const p = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setProgress(p);
      raf = 0;
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(compute);
    };
    compute();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  return { ref, progress };
}
const poolWater = "/assets/pool-modern-3-CIAYWcft.jpg";
const logo = "/assets/gqa-logo-BCNe_O3b.png";
const WHATSAPP$2 = "5581999125638";
function CartIcon({ dark = false }) {
  const { count, setOpen, bumped } = useCart();
  const [bump, setBump] = reactExports.useState(false);
  reactExports.useEffect(() => {
    if (bumped === 0) return;
    setBump(true);
    const t = setTimeout(() => setBump(false), 450);
    return () => clearTimeout(t);
  }, [bumped]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "button",
    {
      "aria-label": `Carrinho (${count})`,
      onClick: () => setOpen(true),
      className: "relative w-10 h-10 flex items-center justify-center rounded-full transition-transform",
      style: { color: dark ? "#0f172a" : "#fff", transform: bump ? "scale(1.18)" : "scale(1)", transitionDuration: "0.25s" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "22", height: "22", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 3h2l2.4 12.3a2 2 0 002 1.7h8.7a2 2 0 002-1.6L21 8H6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "9", cy: "20", r: "1.6" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "20", r: "1.6" })
        ] }),
        count > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: "absolute -top-0.5 -right-0.5 min-w-[20px] h-[20px] px-1 rounded-full text-[11px] font-semibold flex items-center justify-center text-white",
            style: { background: "var(--accent)", boxShadow: "0 0 0 2px rgba(6,42,64,0.9)" },
            children: count
          }
        )
      ]
    }
  );
}
function CartDrawer() {
  const { items, open, setOpen, setQty, remove, count, clear } = useCart();
  const waUrl = (() => {
    if (!items.length) return `https://wa.me/${WHATSAPP$2}`;
    const lines2 = items.map((i) => `• ${i.name} — ${i.qty}x`).join("\n");
    const msg = `Olá! Tenho interesse nos seguintes produtos:
${lines2}

Poderia me passar informações?`;
    return `https://wa.me/${WHATSAPP$2}?text=${encodeURIComponent(msg)}`;
  })();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        onClick: () => setOpen(false),
        className: "fixed inset-0 z-[80] transition-opacity duration-300",
        style: { background: "rgba(2,16,32,0.6)", opacity: open ? 1 : 0, pointerEvents: open ? "auto" : "none" },
        "aria-hidden": true
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        role: "dialog",
        "aria-label": "Carrinho",
        className: "fixed top-0 right-0 bottom-0 z-[90] w-full max-w-[420px] flex flex-col",
        style: {
          background: "#fff",
          transform: open ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.4s cubic-bezier(0.16,1,0.3,1)",
          boxShadow: "-20px 0 60px rgba(2,16,32,0.35)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: "flex items-center justify-between px-6 py-5 border-b border-[rgba(0,42,64,0.08)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-display text-2xl text-[#0f172a]", children: "Seu carrinho" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-xs text-text-muted mt-1", children: [
                count,
                " ",
                count === 1 ? "item" : "itens"
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { "aria-label": "Fechar", onClick: () => setOpen(false), className: "w-9 h-9 rounded-full hover:bg-black/5 flex items-center justify-center text-[#0f172a]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 6l12 12M18 6L6 18" }) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex-1 overflow-y-auto px-6 py-5", children: items.length === 0 ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col items-center justify-center text-center gap-3 text-text-muted py-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-16 rounded-full flex items-center justify-center", style: { background: "rgba(0,73,133,0.08)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 3h2l2.4 12.3a2 2 0 002 1.7h8.7a2 2 0 002-1.6L21 8H6" }) }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm", children: "Seu carrinho está vazio." }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs", children: "Adicione produtos para solicitar pelo WhatsApp." })
          ] }) : /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: items.map((it) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 p-3 rounded-xl border border-[rgba(0,73,133,0.15)]", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 min-w-0", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-medium text-[#0f172a] leading-snug", children: it.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 inline-flex items-center gap-2 rounded-full border border-[rgba(0,42,64,0.12)]", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(it.name, it.qty - 1), className: "w-7 h-7 flex items-center justify-center text-[#0f172a] hover:bg-black/5 rounded-full", "aria-label": "Menos", children: "−" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm w-5 text-center", children: it.qty }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => setQty(it.name, it.qty + 1), className: "w-7 h-7 flex items-center justify-center text-[#0f172a] hover:bg-black/5 rounded-full", "aria-label": "Mais", children: "+" })
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: () => remove(it.name), "aria-label": "Remover", className: "shrink-0 w-7 h-7 rounded-full text-text-muted hover:text-red-600 hover:bg-red-50 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14" }) }) })
          ] }, it.name)) }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "px-6 py-5 border-t border-[rgba(0,42,64,0.08)] space-y-3", children: [
            items.length > 0 && /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: clear, className: "text-xs text-text-muted hover:text-[#0f172a] underline", children: "Limpar carrinho" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: waUrl,
                target: "_blank",
                rel: "noopener noreferrer",
                onClick: () => setOpen(false),
                className: `btn-premium w-full inline-flex items-center justify-center gap-2 px-6 py-4 text-base text-white ${items.length === 0 ? "opacity-60 pointer-events-none" : ""}`,
                style: { background: "var(--whatsapp)" },
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className: "w-5 h-5", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" }) }),
                  "Finalizar pelo WhatsApp"
                ]
              }
            )
          ] })
        ]
      }
    )
  ] });
}
const WHATSAPP_URL$2 = "https://wa.me/5581999125638";
const PHONE_LABEL$1 = "(81) 9 9912-5638";
const NAV = [
  { label: "sobre nós", href: "#sobre-nos" },
  { label: "Produtos", href: "#produtos" },
  { label: "Serviços", href: "#servicos" },
  { label: "Marcas", href: "#marcas" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" }
];
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "header",
      {
        className: "fixed left-0 right-0 z-50 transition-all duration-300",
        style: {
          top: 0,
          background: "#ffffff",
          boxShadow: scrolled ? "0 4px 16px rgba(0,73,133,0.08)" : "0 1px 0 rgba(15,23,42,0.06)"
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "div",
            {
              className: "hidden md:flex w-full text-xs items-center justify-center py-2 gap-5",
              style: { background: "#004985", color: "#ffffff" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-90", children: "Aldeia, PE — ao lado do Sete Casuarinas" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-40", children: "|" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-90", children: "Seg–Sex 8h–18h · Sáb 8h–13h" })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose flex items-center justify-between py-3 md:py-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#", className: "relative z-[60] flex items-center", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: logo,
                  alt: "GQA — Produtos para Piscina",
                  className: "object-contain",
                  style: { height: 44 },
                  width: 150,
                  height: 44
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
              @media (min-width: 1024px) {
                header img[alt^="GQA"] {
                  height: 52px !important;
                }
              }
            ` })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden lg:flex items-center gap-8", children: NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: n.href,
                className: "nav-link text-sm font-semibold tracking-wide",
                style: { color: "#004985" },
                children: n.label
              },
              n.href
            )) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: WHATSAPP_URL$2,
                  target: "_blank",
                  rel: "noopener noreferrer",
                  className: "btn-premium hidden lg:inline-flex items-center gap-2 px-4 py-2.5 text-white",
                  style: { background: "var(--whatsapp)" },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(WAIcon$1, { className: "w-4 h-4" }),
                    " ",
                    PHONE_LABEL$1
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(CartIcon, {}),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  "aria-label": open ? "Fechar menu" : "Abrir menu",
                  "aria-expanded": open,
                  className: "lg:hidden relative z-[60] w-10 h-10 flex flex-col items-center justify-center gap-1.5",
                  style: { color: "#004985" },
                  onClick: () => setOpen((v) => !v),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "block w-6 h-[2px] bg-current transition-transform duration-300",
                        style: { transform: open ? "translateY(4px) rotate(45deg)" : "none" }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "span",
                      {
                        className: "block w-6 h-[2px] bg-current transition-transform duration-300",
                        style: { transform: open ? "translateY(-4px) rotate(-45deg)" : "none" }
                      }
                    )
                  ]
                }
              )
            ] })
          ] })
        ]
      }
    ),
    open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-40 lg:hidden overlay-fade",
        style: {
          background: "rgba(6,42,64,0.98)",
          backdropFilter: "blur(20px)"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "h-full flex flex-col justify-center items-center gap-7 px-6", children: [
          NAV.map((n) => /* @__PURE__ */ jsxRuntimeExports.jsx(
            "a",
            {
              href: n.href,
              onClick: () => setOpen(false),
              className: "font-title text-3xl text-white",
              children: n.label
            },
            n.href
          )),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: WHATSAPP_URL$2,
              target: "_blank",
              rel: "noopener noreferrer",
              onClick: () => setOpen(false),
              className: "btn-premium mt-6 inline-flex items-center justify-center gap-2 px-7 py-4 text-sm text-white",
              style: { background: "var(--whatsapp)" },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(WAIcon$1, { className: "w-4 h-4" }),
                " ",
                PHONE_LABEL$1
              ]
            }
          )
        ] })
      }
    )
  ] });
}
function WAIcon$1({ className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" }) });
}
const WHATSAPP_URL$1 = "https://wa.me/5581999125638";
function FloatingWhatsApp() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: WHATSAPP_URL$1,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "Falar no WhatsApp",
      title: "Falar no WhatsApp",
      className: "group fixed bottom-5 right-5 md:bottom-6 md:right-6 z-50 w-16 h-16 md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center pulse-ring shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.05]",
      style: { background: "var(--whatsapp)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "28", height: "28", viewBox: "0 0 24 24", fill: "white", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#0f172a] text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block", children: "Falar no WhatsApp" })
      ]
    }
  );
}
const INSTAGRAM_URL$1 = "https://instagram.com/gquimica.ambiental";
function FloatingInstagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "a",
    {
      href: INSTAGRAM_URL$1,
      target: "_blank",
      rel: "noopener noreferrer",
      "aria-label": "@gquimica.ambiental no Instagram",
      title: "@gquimica.ambiental",
      className: "group fixed right-5 md:right-6 z-50 w-16 h-16 md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.05]",
      style: {
        background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 92px)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "white", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#0f172a] text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block", children: "@gquimica.ambiental" })
      ]
    }
  );
}
function Counter({ to, suffix = "" }) {
  const ref = reactExports.useRef(null);
  const [val, setVal] = reactExports.useState(0);
  const started = reactExports.useRef(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setVal(Math.round(to * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      });
    }, { threshold: 0.4 });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    val,
    suffix
  ] });
}
function ScrollProgressBar() {
  const [p, setP] = reactExports.useState(0);
  reactExports.useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "fixed top-0 left-0 right-0 z-[9999] h-[3px]", style: { background: "rgba(255,255,255,0.15)" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: { width: `${p}%`, height: "100%", background: "var(--accent)", transition: "width 0.1s linear", boxShadow: "0 0 12px rgba(0,73,133,0.6)" } }) });
}
const mergeClasses = (...classes) => classes.filter((className, index, array) => {
  return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
}).join(" ").trim();
const toKebabCase = (string) => string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
const toCamelCase = (string) => string.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (match, p1, p2) => p2 ? p2.toUpperCase() : p1.toLowerCase()
);
const toPascalCase = (string) => {
  const camelCase = toCamelCase(string);
  return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
var defaultAttributes = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
const hasA11yProp = (props) => {
  for (const prop in props) {
    if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
      return true;
    }
  }
  return false;
};
const Icon = reactExports.forwardRef(
  ({
    color = "currentColor",
    size = 24,
    strokeWidth = 2,
    absoluteStrokeWidth,
    className = "",
    children,
    iconNode,
    ...rest
  }, ref) => reactExports.createElement(
    "svg",
    {
      ref,
      ...defaultAttributes,
      width: size,
      height: size,
      stroke: color,
      strokeWidth: absoluteStrokeWidth ? Number(strokeWidth) * 24 / Number(size) : strokeWidth,
      className: mergeClasses("lucide", className),
      ...!children && !hasA11yProp(rest) && { "aria-hidden": "true" },
      ...rest
    },
    [
      ...iconNode.map(([tag, attrs]) => reactExports.createElement(tag, attrs)),
      ...Array.isArray(children) ? children : [children]
    ]
  )
);
const createLucideIcon = (iconName, iconNode) => {
  const Component = reactExports.forwardRef(
    ({ className, ...props }, ref) => reactExports.createElement(Icon, {
      ref,
      iconNode,
      className: mergeClasses(
        `lucide-${toKebabCase(toPascalCase(iconName))}`,
        `lucide-${iconName}`,
        className
      ),
      ...props
    })
  );
  Component.displayName = toPascalCase(iconName);
  return Component;
};
const __iconNode$1 = [["path", { d: "m15 18-6-6 6-6", key: "1wnfg3" }]];
const ChevronLeft = createLucideIcon("chevron-left", __iconNode$1);
const __iconNode = [["path", { d: "m9 18 6-6-6-6", key: "mthhwq" }]];
const ChevronRight = createLucideIcon("chevron-right", __iconNode);
const aquecedor = "/assets/aqucedor-C16WgolS.png";
const balde = "/assets/balde-Behd5RlU.png";
const bomba = "/assets/bomba-CkXbGccE.png";
const cascade = "/assets/cascade-Dv_ThnIU.png";
const clarificante = "/assets/clarificante-Tc_IQ0TD.png";
const led = "/assets/led-CxbGDSl-.png";
const slides = [
  { image: aquecedor, alt: "Aquecedor para piscinas GQA", product: "Aquecedor" },
  { image: bomba, alt: "Bombas para piscinas GQA", product: "Bombas" },
  { image: cascade, alt: "Cascatas para piscinas GQA", product: "Cascatas" },
  { image: clarificante, alt: "Clarificante para piscinas GQA", product: "Clarificante" },
  { image: led, alt: "Iluminação LED para piscinas GQA", product: "Iluminação LED" },
  { image: balde, alt: "Produtos químicos para piscinas GQA", product: "Produtos Químicos" }
];
const WHATSAPP_NUMBER = "5581999125638";
function HeroCarousel() {
  const [current, setCurrent] = reactExports.useState(0);
  const total = slides.length;
  const next = reactExports.useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);
  const prev = reactExports.useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);
  reactExports.useEffect(() => {
    const interval = setInterval(next, 6e3);
    return () => clearInterval(interval);
  }, [next]);
  const handleClick = (product) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse em ${product}. Pode me passar mais informações?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative w-full bg-[#0a2540] pt-20 md:pt-28", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-full overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-full aspect-[8/3] max-h-[800px] min-h-[280px]", children: [
    slides.map((slide, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: () => handleClick(slide.product),
        "aria-label": `Ver ${slide.product} no WhatsApp`,
        className: `absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out cursor-pointer ${idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "img",
          {
            src: slide.image,
            alt: slide.alt,
            className: "w-full h-full object-cover",
            loading: idx === 0 ? "eager" : "lazy"
          }
        )
      },
      idx
    )),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          prev();
        },
        "aria-label": "Anterior",
        className: "absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-[#0a2540] rounded-full p-2 md:p-4 shadow-xl transition-all hover:scale-110",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "w-6 h-6 md:w-8 md:h-8", strokeWidth: 2.5 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          next();
        },
        "aria-label": "Próximo",
        className: "absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-[#0a2540] rounded-full p-2 md:p-4 shadow-xl transition-all hover:scale-110",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "w-6 h-6 md:w-8 md:h-8", strokeWidth: 2.5 })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5", children: slides.map((_, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        onClick: (e) => {
          e.stopPropagation();
          setCurrent(idx);
        },
        "aria-label": `Ir para slide ${idx + 1}`,
        className: `h-2.5 rounded-full transition-all ${idx === current ? "w-10 bg-yellow-400" : "w-3 bg-white/70 hover:bg-white"}`
      },
      idx
    )) })
  ] }) }) });
}
const familiaImage = "/assets/familia-DLAw7AJd.png";
function Reveal({ children, delay = 0, className = "" }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `reveal ${className}`, style: { animationDelay: `${delay}ms` }, children });
}
function AnimOnView$1({
  children,
  direction = "from-bottom",
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
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
      { threshold: [0, 0.25, 0.5] }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      ref,
      className: `anim-on-view ${direction} ${shown ? "in" : ""} ${className}`,
      style: { animationDelay: `${delay}ms` },
      children
    }
  );
}
function FamiliaSection() {
  const WHATSAPP_URL2 = "https://wa.me/5581999125638";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "relative w-full", style: { minHeight: "900px" }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 z-0", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "img",
      {
        src: familiaImage,
        alt: "Família na piscina",
        className: "w-full h-auto brightness-110 contrast-105 saturate-125"
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "absolute inset-0 z-[1]",
        style: {
          background: "linear-gradient(to right, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.15) 60%, rgba(0,0,0,0.0) 100%)"
        }
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10 container-prose py-24", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "max-w-xl", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimOnView$1, { direction: "from-left", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "h2",
        {
          className: "font-title text-white leading-tight",
          style: { fontSize: "clamp(32px, 5vw, 56px)" },
          children: [
            "Mais que produtos,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#38bdf8" }, children: "oferecemos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#38bdf8" }, children: "momentos" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "inesquecíveis!"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 200, children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 text-lg text-white/90 leading-relaxed", children: "Tudo para sua piscina você encontra aqui." }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal, { delay: 400, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: WHATSAPP_URL2,
          target: "_blank",
          rel: "noopener noreferrer",
          className: "inline-flex items-center gap-2 px-8 py-4 bg-cyan-500 hover:bg-cyan-600 text-white font-bold rounded-full mt-10 transition-all hover:scale-105 shadow-xl",
          children: [
            "🛒 COMPRE AGORA",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-normal", children: "e transforme sua piscina!" })
          ]
        }
      ) })
    ] }) }) }) })
  ] });
}
const mascote = "/assets/mascote-azpvs9uz.png";
function AtomIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "1.5", fill: "currentColor" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "12", cy: "12", rx: "10", ry: "4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "12", cy: "12", rx: "10", ry: "4", transform: "rotate(60 12 12)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ellipse", { cx: "12", cy: "12", rx: "10", ry: "4", transform: "rotate(120 12 12)" })
  ] });
}
function BeakerIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "26", height: "26", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.7", strokeLinecap: "round", strokeLinejoin: "round", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 3h6M10 3v6L5 20a2 2 0 002 2h10a2 2 0 002-2L14 9V3" }) });
}
function CinematicAbout() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "sobre-nos", className: "w-full bg-white py-16 scroll-mt-24", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-6xl mx-auto px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-20 h-1 bg-yellow-400 mx-auto mb-6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-center text-4xl md:text-5xl font-bold text-slate-900 mb-12", children: "Sobre nós" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-10 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-5 text-slate-800 text-lg leading-relaxed", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Fundada em 2015, a GQA nasceu para atender indústrias e o mercado de recreação, oferecendo excelência no tratamento de piscinas — unindo conhecimento técnico, produtos de qualidade e atendimento especializado." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Nosso diferencial está no atendimento e na expertise técnica: a empresa é liderada por um engenheiro químico com mais de 30 anos de experiência em tratamento de águas." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-bold text-slate-900", children: "Mais do que produtos, entregamos qualidade e confiabilidade em cada atendimento." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 gap-4 mt-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AtomIcon, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-900", children: "30+ anos de expertise" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600", children: "Engenharia química aplicada" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 p-5 rounded-xl bg-blue-50 border border-blue-100", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-700", children: /* @__PURE__ */ jsxRuntimeExports.jsx(BeakerIcon, {}) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-bold text-slate-900", children: "Engenheiro Químico" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm text-slate-600", children: "Liderança técnica em cada solução" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        "img",
        {
          src: mascote,
          alt: "Mascote GQA",
          className: "w-full max-w-xl h-auto"
        }
      ) })
    ] })
  ] }) });
}
const qclor = "/assets/qclor-Dcr2Z1EI.png";
const rhofer$1 = "/assets/rhofer-4pUtS5Wh.png";
const hth$1 = "/assets/hth-2UTPVdNN.png";
const WHATSAPP$1 = "5581999125638";
const lines = [
  {
    name: "QCLOR",
    label: "Linha",
    tagline: "Cuidado completo para sua piscina",
    description: "Tratamento eficiente, manutenção prática e produtos de alta performance para manter a água sempre limpa, equilibrada e saudável.",
    image: qclor,
    side: "left",
    accent: "#4ab8d4",
    tag: "Cloro · pH · Clarificante"
  },
  {
    name: "Rhofer",
    label: "Linha",
    tagline: "Piscina limpa, água cristalina e equilibrada",
    description: "Fórmulas eficientes e confiáveis para quem busca qualidade comprovada, fácil aplicação e resultados visíveis desde o primeiro uso.",
    image: rhofer$1,
    side: "right",
    accent: "#7dd4e8",
    tag: "Dissolução Rápida · Alta Performance"
  },
  {
    name: "HTH",
    label: "Linha",
    tagline: "Alta performance para todos os tipos de piscina",
    description: "Produtos de nível profissional para piscinas sempre saudáveis e prontas para o mergulho, com tecnologia de ponta e praticidade.",
    image: hth$1,
    side: "left",
    accent: "#2a7a9a",
    tag: "Profissional · Multiação"
  }
];
function Products() {
  const [hovered, setHovered] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "produtos",
      className: "w-full py-24 scroll-mt-24 relative overflow-hidden",
      style: {
        background: "linear-gradient(160deg, #0d2233 0%, #0a1a28 50%, #071520 100%)"
      },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none",
            style: {
              background: "radial-gradient(ellipse at center, rgba(74,184,212,0.08) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 pointer-events-none overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "absolute bottom-0 left-0 w-full h-px",
            style: { background: "linear-gradient(90deg, transparent, rgba(74,184,212,0.3), transparent)" }
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative max-w-6xl mx-auto px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-20", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "span",
              {
                className: "inline-block text-[11px] font-bold tracking-[0.35em] uppercase mb-5 px-5 py-2 rounded-full",
                style: {
                  background: "rgba(74,184,212,0.12)",
                  color: "#4ab8d4",
                  border: "1px solid rgba(74,184,212,0.25)"
                },
                children: "Nossas Marcas"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                className: "text-5xl md:text-6xl font-black text-white mb-5 leading-tight",
                children: [
                  "Conheça nossos",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { style: { color: "#4ab8d4" }, children: "produtos" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                className: "w-16 h-0.5 mx-auto mb-5",
                style: { background: "linear-gradient(90deg, transparent, #4ab8d4, transparent)" }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/45 text-lg max-w-lg mx-auto leading-relaxed", children: "Linhas especializadas para manter sua piscina sempre cristalina e segura." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-8", children: lines.map((line, i) => {
            const isLeft = line.side === "left";
            const isHovered = hovered === i;
            const isOtherHovered = hovered !== null && hovered !== i;
            return /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "div",
              {
                className: "relative rounded-3xl overflow-hidden cursor-pointer",
                style: {
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  opacity: isOtherHovered ? 0.35 : 1,
                  transform: isHovered ? "scale(1.01)" : "scale(1)",
                  border: `1px solid ${isHovered ? line.accent + "55" : "rgba(255,255,255,0.06)"}`,
                  boxShadow: isHovered ? `0 40px 80px rgba(0,0,0,0.6), 0 0 60px ${line.accent}22` : "0 4px 30px rgba(0,0,0,0.3)",
                  background: isHovered ? "rgba(255,255,255,0.05)" : "rgba(255,255,255,0.025)",
                  filter: isOtherHovered ? "blur(1px)" : "blur(0px)"
                },
                onMouseEnter: () => setHovered(i),
                onMouseLeave: () => setHovered(null),
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      className: "absolute top-0 bottom-0 w-1",
                      style: {
                        left: isLeft ? 0 : "auto",
                        right: isLeft ? "auto" : 0,
                        background: `linear-gradient(180deg, ${line.accent}, transparent)`,
                        opacity: isHovered ? 1 : 0.4,
                        transition: "opacity 0.4s"
                      }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: `flex flex-col md:flex-row items-center gap-0 ${isLeft ? "" : "md:flex-row-reverse"}`,
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "relative overflow-hidden md:w-[55%] w-full",
                            style: {
                              transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)"
                            },
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "absolute inset-0 z-10 pointer-events-none",
                                  style: {
                                    background: isLeft ? "linear-gradient(to right, transparent 60%, rgba(13,34,51,0.9) 100%)" : "linear-gradient(to left, transparent 60%, rgba(13,34,51,0.9) 100%)",
                                    transition: "opacity 0.4s",
                                    opacity: isHovered ? 0.5 : 1
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "img",
                                {
                                  src: line.image,
                                  alt: `Linha ${line.name}`,
                                  className: "w-full h-auto object-contain block",
                                  style: {
                                    maxHeight: isHovered ? "520px" : "380px",
                                    minHeight: "280px",
                                    transition: "max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                    objectPosition: "center"
                                  }
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: `flex-1 p-8 md:p-12 z-20 ${isLeft ? "md:pl-6" : "md:pr-6"}`,
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "span",
                                {
                                  className: "inline-block text-[10px] font-bold tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full",
                                  style: {
                                    background: `${line.accent}18`,
                                    color: line.accent,
                                    border: `1px solid ${line.accent}33`
                                  },
                                  children: line.tag
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-white/40 text-sm font-medium tracking-widest uppercase block mb-1", children: line.label }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx(
                                  "h3",
                                  {
                                    className: "text-4xl md:text-5xl font-black leading-none",
                                    style: {
                                      color: isHovered ? line.accent : "#fff",
                                      transition: "color 0.4s"
                                    },
                                    children: line.name
                                  }
                                )
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "w-12 h-0.5 my-5",
                                  style: {
                                    background: line.accent,
                                    opacity: isHovered ? 1 : 0.4,
                                    transition: "opacity 0.4s"
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/90 font-semibold text-lg mb-3 leading-snug", children: line.tagline }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/45 text-sm leading-relaxed mb-8", children: line.description }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                                "a",
                                {
                                  href: `https://wa.me/${WHATSAPP$1}?text=${encodeURIComponent(
                                    `Olá! Gostaria de saber mais sobre a linha ${line.name}`
                                  )}`,
                                  target: "_blank",
                                  rel: "noopener noreferrer",
                                  className: "inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300",
                                  style: {
                                    background: isHovered ? line.accent : "rgba(255,255,255,0.08)",
                                    color: isHovered ? "#0d2233" : "#fff",
                                    border: `1px solid ${isHovered ? line.accent : "rgba(255,255,255,0.15)"}`,
                                    letterSpacing: "0.05em"
                                  },
                                  onClick: (e) => e.stopPropagation(),
                                  children: [
                                    /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "16", height: "16", viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" }) }),
                                    "Conheça a linha"
                                  ]
                                }
                              )
                            ]
                          }
                        )
                      ]
                    }
                  )
                ]
              },
              i
            );
          }) })
        ] })
      ]
    }
  );
}
const albacete = "/assets/albacete-BZa_hz-E.png";
const nautilus = "/assets/nautilus-D9o68WHH.png";
const brustec = "/assets/brustec-DDhFDcEF.png";
const jacuzzi = "/assets/jacuzzi-veUjDrV-.png";
const rhofer = "/assets/rhofer1-VO3kglN_.png";
const netuno = "/assets/netuno-CEMuCaYe.png";
const dancor = "/assets/dancor-JjcDblcJ.png";
const hipool = "/assets/hipool-Bo5wHiGv.png";
const hidrodomi = "/assets/hidrodomi-BgB5n1WU.png";
const pace = "/assets/pace-YGcYnF1p.png";
const maresias = "/assets/maresias-CKkkERO3.png";
const hth = "/assets/hth1-CITVqNA6.png";
const sodramar = "/assets/sodramar-D0OsjhI2.png";
const logos = [
  { name: "Albacete", src: albacete },
  { name: "Nautilus", src: nautilus },
  { name: "Brustec Lazer", src: brustec },
  { name: "Jacuzzi", src: jacuzzi },
  { name: "Rhofer", src: rhofer },
  { name: "Netuno", src: netuno },
  { name: "Dancor", src: dancor },
  { name: "HiPool", src: hipool },
  { name: "Hidrodomi", src: hidrodomi },
  { name: "Pace", src: pace },
  { name: "Maresias", src: maresias },
  { name: "HTH", src: hth },
  { name: "Sodramar", src: sodramar }
];
const track = [...logos, ...logos];
function BrandsCarousel() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "marcas",
      className: "w-full py-16",
      style: { background: "rgba(225,242,252,0.92)" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center mb-12 px-6", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-16 h-0.5 mx-auto mb-6", style: { background: "linear-gradient(90deg, transparent, #1a4a5c, transparent)" } }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-3xl md:text-4xl font-black text-slate-900 mb-3", children: "As melhores marcas estão aqui" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-slate-500 text-base max-w-md mx-auto", children: "Trabalhamos com as marcas mais confiáveis do mercado de piscinas." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none",
              style: { background: "linear-gradient(to right, rgba(225,242,252,0.92), transparent)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none",
              style: { background: "linear-gradient(to left, rgba(225,242,252,0.92), transparent)" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "flex gap-6 w-max",
              style: {
                animation: "brandScroll 35s linear infinite"
              },
              children: track.map((logo2, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  className: "flex-shrink-0 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1",
                  style: {
                    width: "160px",
                    height: "100px",
                    boxShadow: "0 4px 16px rgba(0,73,133,0.08)",
                    border: "1px solid rgba(0,73,133,0.08)"
                  },
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "img",
                    {
                      src: logo2.src,
                      alt: logo2.name,
                      className: "object-contain",
                      style: { maxWidth: "120px", maxHeight: "70px" }
                    }
                  )
                },
                i
              ))
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `
        @keyframes brandScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      ` })
      ]
    }
  );
}
const WHATSAPP = "5581999125638";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP}`;
const INSTAGRAM_URL = "https://instagram.com/gquimica.ambiental";
const PHONE_LABEL = "(81) 9 9912-5638";
const HERO_VIDEO = "/videos/hero.mp4";
const BREAK_VIDEO = "/videos/intermediate.mp4";
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(CartProvider, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-bg text-text", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(ScrollProgressBar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(VideoIntro, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HeroCarousel, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CinematicAbout, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Metrics, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Differentials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FamiliaSection, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(V2Scope, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Products, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(BrandsCarousel, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HowItWorks, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(OfferBanner, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FAQ, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingWhatsApp, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingInstagram, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(CartDrawer, {})
  ] }) });
}
function VideoIntro() {
  const {
    ref,
    progress
  } = useElementScrollProgress();
  const videoScale = 1 + progress * 0.14;
  const logoProgress = Math.max(0, Math.min(1, (progress - 0.42) / 0.58));
  const logoScale = 0.3 + logoProgress * 0.7;
  const overlayOpacity = 0.2 + logoProgress * 0.5;
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, style: {
    height: "200vh"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    position: "sticky",
    top: 0,
    height: "100vh",
    overflow: "hidden"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("video", { autoPlay: true, muted: true, loop: true, playsInline: true, preload: "auto", style: {
      position: "absolute",
      inset: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      transform: `scale(${videoScale})`,
      transformOrigin: "center center",
      willChange: "transform"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: HERO_VIDEO, type: "video/mp4" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: 1,
      background: `rgba(0,8,20,${overlayOpacity})`,
      transition: "background 0.05s linear"
    } }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      position: "absolute",
      inset: 0,
      zIndex: 2,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      opacity: logoProgress,
      transform: `scale(${logoScale})`,
      willChange: "transform, opacity"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "GQA", style: {
      width: "clamp(180px, 28vw, 340px)",
      filter: "drop-shadow(0 8px 60px rgba(0,0,0,0.95)) brightness(1.15)"
    } }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bounce-soft", style: {
      position: "absolute",
      bottom: 32,
      left: "50%",
      transform: "translateX(-50%)",
      zIndex: 3,
      color: "rgba(255,255,255,0.75)",
      opacity: Math.max(0, 1 - progress * 5)
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "34", height: "34", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.5", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M6 9l6 6 6-6" }) }) })
  ] }) });
}
function AnimOnView({
  children,
  direction = "from-bottom",
  delay = 0,
  className = ""
}) {
  const ref = reactExports.useRef(null);
  const [shown, setShown] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      });
    }, {
      threshold: [0, 0.25, 0.5]
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref, className: `anim-on-view ${direction} ${shown ? "in" : ""} ${className}`, style: {
    animationDelay: `${delay}ms`
  }, children });
}
function Metrics() {
  const items = [{
    label: "Expertise em química",
    render: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl align-top mr-1", children: "+" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 30 })
    ] }),
    dir: "from-left",
    delay: 0
  }, {
    label: "Clientes atendidos",
    render: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl align-top mr-1", children: "+" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 1e3 })
    ] }),
    dir: "from-bottom",
    delay: 150
  }, {
    label: "Serviços especializados",
    render: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 12 }),
    dir: "scale-center",
    delay: 300
  }, {
    label: "Tempo de diagnóstico",
    render: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 10 }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-3xl ml-1", children: "min" })
    ] }),
    dir: "from-bottom",
    delay: 450
  }, {
    label: "Fundada em",
    render: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { to: 2015 }),
    dir: "from-right",
    delay: 600
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", style: {
    background: "var(--bg-dark)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-prose grid grid-cols-2 md:grid-cols-5 gap-y-10", children: items.map((m, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AnimOnView, { direction: m.dir, delay: m.delay, className: `text-center px-4 ${i > 0 ? "md:border-l md:border-white/15" : ""}`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-title text-5xl md:text-6xl text-white leading-none", children: m.render }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 label-eyebrow label-eyebrow-light", children: m.label })
  ] }, i)) }) });
}
function Differentials() {
  const items = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, {}),
    title: "Diagnóstico em 10 Minutos",
    text: "Você descreve, nós resolvemos. Sem achismo, sem tempo perdido."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Beaker, {}),
    title: "Expertise Química Real",
    text: "30 anos de engenharia aplicados à sua piscina. Não é papo, é formação."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, {}),
    title: "Visita Presencial",
    text: "Quando precisa de olho no olho, a gente aparece."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckBadge, {}),
    title: "Produtos Certificados",
    text: "Nada aqui foi escolhido por acaso. Cada produto passou pelo crivo técnico do nosso engenheiro."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, {}),
    title: "Frete Grátis Região",
    text: "Porque facilitar a vida do cliente faz parte do serviço."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, {}),
    title: "Desde 2015",
    text: "Tempo suficiente para aprender o que funciona e eliminar o que não funciona."
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", style: {
    background: "var(--bg)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal$1, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-line gold-line-center mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-section", children: "Por que quem entende escolhe a GQA" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5", children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimOnView, { direction: "from-bottom", delay: i * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-light h-full p-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-accent w-12 h-12 flex items-center justify-center rounded-xl", style: {
        background: "rgba(0,73,133,0.08)"
      }, children: it.icon }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-2xl mt-6 text-text", children: it.title }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 body-lg", children: it.text })
    ] }) }, i)) })
  ] }) });
}
function V2Scope({
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sticky top-0 h-screen w-full overflow-hidden", style: {
      zIndex: 0
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("video", { className: "video-cover", autoPlay: true, muted: true, loop: true, playsInline: true, preload: "metadata", poster: poolWater, style: {
      animation: "slowZoom 20s ease-in-out alternate infinite"
    }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("source", { src: BREAK_VIDEO, type: "video/mp4" }) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
      marginTop: "-100vh",
      position: "relative",
      zIndex: 1
    }, children }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("style", { children: `@keyframes slowZoom { from { transform: scale(1.0) } to { transform: scale(1.15) } }` })
  ] });
}
function Services() {
  const items = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Store, {}),
    title: "Venda de Produtos, Bombas e Acessórios",
    desc: "Linha completa para residências, condomínios e clubes."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Gear, {}),
    title: "Manutenção de Bombas e Filtros",
    desc: "Diagnóstico e reparo com peças originais."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Filter, {}),
    title: "Troca de Elementos Filtrantes",
    desc: "Mantemos a filtragem em performance máxima."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Beaker, {}),
    title: "Análise e Diagnóstico da Água",
    desc: "Avaliação química completa em 10 minutos."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Drop, {}),
    title: "Remoção de Vazamentos",
    desc: "Identificação e correção precisa."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Ladder, {}),
    title: "Construção e Instalação de Piscinas",
    desc: "Projeto, execução e entrega completa."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bulb, {}),
    title: "Iluminação e LED",
    desc: "RGB e branca, com controle e instalação."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, {}),
    title: "Sauna — Instalação e Venda",
    desc: "Equipamentos selecionados e instalação técnica."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, {}),
    title: "Aquecedores de Água",
    desc: "Solar, elétrico e trocadores de calor."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Spa, {}),
    title: "SPA e Banheira de Hidromassagem",
    desc: "Venda e suporte completo."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Bolt, {}),
    title: "Geradores de Cloro (Salino)",
    desc: "Automação do tratamento via sal."
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Heart, {}),
    title: "Consultoria de Dosagens",
    desc: "Plano técnico individual para sua piscina."
  }];
  const [flipped, setFlipped] = reactExports.useState(null);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "servicos", className: "section-y relative", style: {
    background: "rgba(11,79,122,0.88)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal$1, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-line gold-line-center mb-6", style: {
        background: "var(--accent-light)"
      } }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-section text-white", children: "Soluções que vão além do produto" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 body-lg-on-dark max-w-2xl mx-auto", children: "Serviços especializados conduzidos por equipe técnica." })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5", children: items.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(AnimOnView, { direction: "from-bottom", delay: i % 3 * 120, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: `flip-card h-[260px] ${flipped === i ? "is-flipped" : ""}`, onClick: () => setFlipped((f) => f === i ? null : i), role: "button", tabIndex: 0, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flip-inner", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flip-face card-dark items-start", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[var(--accent-light)] w-12 h-12 flex items-center justify-center", children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-xl mt-5 text-white leading-snug", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-auto text-xs uppercase tracking-[0.2em] text-white/50", children: "Toque para detalhes →" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flip-face flip-back items-start", style: {
        background: "linear-gradient(135deg, #004985, #003a6b)",
        border: "1px solid rgba(255,255,255,0.15)"
      }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "font-display text-lg text-white leading-snug", children: s.title }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-sm text-white/85 leading-relaxed flex-1", children: s.desc }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", onClick: (e) => e.stopPropagation(), className: "btn-premium mt-4 inline-flex items-center gap-2 px-4 py-2.5 text-sm text-white self-start", style: {
          background: "var(--whatsapp)"
        }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(WAIcon, { className: "w-4 h-4" }),
          " Falar no WhatsApp"
        ] })
      ] })
    ] }) }) }, i)) })
  ] }) });
}
function HowItWorks() {
  const steps = [{
    n: "01",
    title: "Nos chame no WhatsApp",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(WAIcon, { className: "w-7 h-7" })
  }, {
    n: "02",
    title: "Diagnóstico em 10 minutos",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, {})
  }, {
    n: "03",
    title: "Produto ou visita técnica",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Truck, {})
  }, {
    n: "04",
    title: "Piscina resolvida",
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(CheckBadge, {})
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "section-y", style: {
    background: "var(--bg)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal$1, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-line gold-line-center mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-section", children: "Do diagnóstico à água perfeita" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-20 relative grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute top-12 left-[12%] right-[12%] h-px draw-line", style: {
        background: "linear-gradient(to right, var(--accent), var(--accent-light), var(--accent))"
      } }),
      steps.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal$1, { delay: i % 3 + 1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative text-center px-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-title text-7xl md:text-8xl", style: {
          color: "rgba(0,73,133,0.10)"
        }, children: s.n }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative -mt-12 mx-auto w-16 h-16 rounded-full flex items-center justify-center text-white", style: {
          background: "var(--accent)",
          boxShadow: "0 12px 30px -10px rgba(0,73,133,0.45)"
        }, children: s.icon }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-6 font-display text-xl", children: s.title })
      ] }) }, i))
    ] })
  ] }) });
}
function OfferBanner() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "relative overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "section-y px-6 text-center", style: {
    background: "linear-gradient(135deg, #004985 0%, #003a6b 100%)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal$1, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-section text-white max-w-3xl mx-auto", children: "Sua piscina está esperando. A GQA não." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-white/85 text-lg max-w-2xl mx-auto", children: "Frete grátis para toda a região. Porque facilitar faz parte do nosso serviço." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", className: "btn-premium inline-flex items-center gap-2 px-8 py-4 bg-white !text-[#003a6b] font-medium", children: "Falar no WhatsApp agora" }) })
  ] }) }) });
}
function FAQ() {
  const faqs = [{
    q: "Como faço o tratamento da minha piscina?",
    a: "Nossa equipe faz um diagnóstico técnico em até 10 minutos e indica exatamente os produtos e dosagens corretos para o seu caso."
  }, {
    q: "Vocês fazem visita presencial?",
    a: "Sim! Atendemos toda a região com visita técnica no local."
  }, {
    q: "Qual o prazo de entrega?",
    a: "Entrega rápida em toda a região. Fale conosco para confirmar disponibilidade."
  }, {
    q: "Vocês vendem para condomínios?",
    a: "Sim, atendemos residências, condomínios e clubes com preços especiais por volume."
  }, {
    q: "Têm frete grátis?",
    a: "Sim! Frete grátis para toda a região."
  }, {
    q: "Como funciona o diagnóstico em 10 minutos?",
    a: "Você nos conta o problema pelo WhatsApp ou pessoalmente. Nossos técnicos identificam a causa e indica a solução diretamente."
  }];
  const [open, setOpen] = reactExports.useState(0);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "section-y", style: {
    background: "var(--bg-2)"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose max-w-3xl", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal$1, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-line gold-line-center mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-section", children: "Respondemos antes de você perguntar" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 space-y-3", children: faqs.map((f, i) => {
      const isOpen = open === i;
      return /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal$1, { delay: i % 3 + 1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "card-light overflow-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("button", { onClick: () => setOpen(isOpen ? null : i), "aria-expanded": isOpen, className: "w-full flex items-center justify-between gap-4 p-6 text-left", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-display text-lg text-text", children: f.q }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-accent transition-transform", style: {
            background: "rgba(0,73,133,0.10)",
            transform: isOpen ? "rotate(45deg)" : "rotate(0deg)"
          }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 5v14M5 12h14" }) }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid transition-all duration-400 ease-out", style: {
          gridTemplateRows: isOpen ? "1fr" : "0fr"
        }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "overflow-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "px-6 pb-6 body-lg", children: f.a }) }) })
      ] }) }, i);
    }) })
  ] }) });
}
function Contact() {
  const cards = [{
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(WAIcon, { className: "w-5 h-5" }),
    label: "WhatsApp",
    value: PHONE_LABEL,
    href: WHATSAPP_URL
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(IGIcon, {}),
    label: "Instagram",
    value: "@gquimica.ambiental",
    href: INSTAGRAM_URL
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(PinIcon, { className: "w-5 h-5" }),
    label: "Endereço",
    value: "Estrada de Aldeia, 10.811 · Sala D · Km 12 — Aldeia, PE (ao lado do Sete Casuarinas)"
  }, {
    icon: /* @__PURE__ */ jsxRuntimeExports.jsx(Clock, {}),
    label: "Horário",
    value: "Seg–Sex 8h–18h · Sáb 8h–13h"
  }];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contato", className: "section-y", style: {
    background: "#0f172a"
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(Reveal$1, { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "gold-line gold-line-center mb-6" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "h-section text-white", children: "Estamos prontos para atender você" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-14 grid grid-cols-1 lg:grid-cols-2 gap-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal$1, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: cards.map((c, i) => {
        const Wrapper = c.href ? "a" : "div";
        return /* @__PURE__ */ jsxRuntimeExports.jsxs(Wrapper, { ...c.href ? {
          href: c.href,
          target: "_blank",
          rel: "noopener noreferrer"
        } : {}, className: "card-dark flex items-start gap-4 p-6 hover:!translate-y-[-4px]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 w-11 h-11 rounded-full flex items-center justify-center text-[var(--accent-light)]", style: {
            background: "rgba(10,108,196,0.12)"
          }, children: c.icon }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-w-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "label-eyebrow label-eyebrow-light", children: c.label }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-white text-base leading-relaxed break-words", children: c.value })
          ] })
        ] }, i);
      }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Reveal$1, { delay: 1, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "rounded-2xl overflow-hidden border border-white/10 min-h-[360px]", children: /* @__PURE__ */ jsxRuntimeExports.jsx("iframe", { title: "Localização GQA — Aldeia, PE", src: "https://www.google.com/maps?q=Estrada+de+Aldeia+10811+Aldeia+Camarajibe+PE&output=embed", width: "100%", height: "100%", style: {
          border: 0,
          minHeight: 360,
          display: "block"
        }, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-white/80 text-center", children: "📍 Ao lado do Sete casuarinas · Aldeia, PE" })
      ] }) })
    ] })
  ] }) });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("footer", { style: {
    background: "#041020"
  }, className: "pt-16 pb-8 px-6", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-prose text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "logo-badge inline-flex items-center mx-auto", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "GQA", className: "logo-halo object-contain", style: {
      height: 44
    }, width: 150, height: 44 }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/70", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#produtos", className: "nav-link hover:text-white", children: "Produtos" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#quimica", className: "nav-link hover:text-white", children: "Linha Química" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#servicos", className: "nav-link hover:text-white", children: "Serviços" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#sobre-nós", className: "nav-link hover:text-white", children: "sobre nós" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#faq", className: "nav-link hover:text-white", children: "FAQ" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contato", className: "nav-link hover:text-white", children: "Contato" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex justify-center gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: WHATSAPP_URL, target: "_blank", rel: "noopener noreferrer", "aria-label": "WhatsApp", className: "w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:bg-[#25D366]/20 hover:border-[#25D366]/60 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(WAIcon, { className: "w-4 h-4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: INSTAGRAM_URL, target: "_blank", rel: "noopener noreferrer", "aria-label": "Instagram", className: "w-11 h-11 rounded-full border border-white/15 flex items-center justify-center text-white/70 hover:text-white hover:border-[#dc2743]/60 transition-all", children: /* @__PURE__ */ jsxRuntimeExports.jsx(IGIcon, {}) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-10 pt-8 text-sm text-white/55 space-y-2", style: {
      borderTop: "1px solid rgba(255,255,255,0.08)"
    }, children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "GQA — Produtos para Piscina · Aldeia, PE (ao lado do Sete Casuarinas)" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-white/40", children: "© 2025 GQA. Todos os direitos reservados." })
    ] })
  ] }) });
}
function S({
  children,
  size = 24
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.6", strokeLinecap: "round", strokeLinejoin: "round", children });
}
function PinIcon({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 22s7-6 7-12a7 7 0 00-14 0c0 6 7 12 7 12z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "10", r: "2.5" })
  ] });
}
function WAIcon({
  className = ""
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" }) });
}
function IGIcon() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { width: "18", height: "18", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "1.8", strokeLinecap: "round", strokeLinejoin: "round", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "17.5", y1: "6.5", x2: "17.51", y2: "6.5" })
  ] });
}
function CheckBadge() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(S, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 12l2 2 4-4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "9" })
  ] });
}
function Store() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(S, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 9l1.5-5h15L21 9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 9v11h18V9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 9a3 3 0 006 0 3 3 0 006 0 3 3 0 006 0" })
  ] });
}
function Truck() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(S, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 7h13v10H3zM16 10h4l1 3v4h-5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "7", cy: "18", r: "1.5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "18", cy: "18", r: "1.5" })
  ] });
}
function Heart() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(S, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" }) });
}
function Drop() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(S, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2s6 7 6 12a6 6 0 11-12 0c0-5 6-12 6-12z" }) });
}
function Beaker() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(S, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 3h6M10 3v6L5 20a2 2 0 002 2h10a2 2 0 002-2L14 9V3" }) });
}
function Sun() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(S, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M5 19l1.5-1.5M17.5 6.5L19 5" })
  ] });
}
function Gear() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(S, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "3" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.4 15a1.7 1.7 0 00.3 1.8l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.8-.3 1.7 1.7 0 00-1 1.5V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1.1-1.5 1.7 1.7 0 00-1.8.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.8 1.7 1.7 0 00-1.5-1H3a2 2 0 110-4h.1A1.7 1.7 0 004.6 9a1.7 1.7 0 00-.3-1.8l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.8.3H9a1.7 1.7 0 001-1.5V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.5 1.7 1.7 0 001.8-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.8V9a1.7 1.7 0 001.5 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.5 1z" })
  ] });
}
function Filter() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(S, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" }) });
}
function Bolt() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(S, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("polygon", { points: "13 2 3 14 12 14 11 22 21 10 12 10 13 2" }) });
}
function Bulb() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(S, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M9 18h6M10 22h4M12 2a7 7 0 017 7c0 3-2 5-3 7H8c-1-2-3-4-3-7a7 7 0 017-7z" }) });
}
function Ladder() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(S, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "7", y1: "2", x2: "7", y2: "22" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "17", y1: "2", x2: "17", y2: "22" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "7", y1: "6", x2: "17", y2: "6" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "7", y1: "11", x2: "17", y2: "11" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("line", { x1: "7", y1: "16", x2: "17", y2: "16" })
  ] });
}
function Spa() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(S, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M3 21h18M5 17h14M5 17c0-3 3-6 7-6s7 3 7 6M12 11V3" }) });
}
function Flame() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(S, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2s4 5 4 9a4 4 0 11-8 0c0-4 4-9 4-9z" }) });
}
function Clock() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(S, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "9" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 7v5l3 2" })
  ] });
}
export {
  Index as component
};
