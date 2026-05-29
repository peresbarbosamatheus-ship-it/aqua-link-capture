import { useState } from "react";
import qclor from "@/assets/qclor.png";
import rhofer from "@/assets/rhofer.png";
import hth from "@/assets/hth.png";

const WHATSAPP = "5581999125638";

const lines = [
  {
    name: "QCLOR",
    label: "Linha",
    tagline: "Cuidado completo para sua piscina",
    description:
      "Tratamento eficiente, manutenção prática e produtos de alta performance para manter a água sempre limpa, equilibrada e saudável.",
    image: qclor,
    side: "left",
    accent: "#4ab8d4",
    tag: "Cloro · pH · Clarificante",
  },
  {
    name: "Rhofer",
    label: "Linha",
    tagline: "Piscina limpa, água cristalina e equilibrada",
    description:
      "Fórmulas eficientes e confiáveis para quem busca qualidade comprovada, fácil aplicação e resultados visíveis desde o primeiro uso.",
    image: rhofer,
    side: "right",
    accent: "#7dd4e8",
    tag: "Dissolução Rápida · Alta Performance",
  },
  {
    name: "HTH",
    label: "Linha",
    tagline: "Alta performance para todos os tipos de piscina",
    description:
      "Produtos de nível profissional para piscinas sempre saudáveis e prontas para o mergulho, com tecnologia de ponta e praticidade.",
    image: hth,
    side: "left",
    accent: "#2a7a9a",
    tag: "Profissional · Multiação",
  },
];

export default function Products() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="produtos"
      className="w-full py-24 scroll-mt-24 relative overflow-hidden"
      style={{
        background: "linear-gradient(160deg, #0d2233 0%, #0a1a28 50%, #071520 100%)",
      }}
    >
      {/* Decoração de fundo */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(74,184,212,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Linhas decorativas */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute bottom-0 left-0 w-full h-px"
          style={{ background: "linear-gradient(90deg, transparent, rgba(74,184,212,0.3), transparent)" }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        {/* Cabeçalho */}
        <div className="text-center mb-20">
          <span
            className="inline-block text-[11px] font-bold tracking-[0.35em] uppercase mb-5 px-5 py-2 rounded-full"
            style={{
              background: "rgba(74,184,212,0.12)",
              color: "#4ab8d4",
              border: "1px solid rgba(74,184,212,0.25)",
            }}
          >
            Nossas Marcas
          </span>
          <h2
            className="text-5xl md:text-6xl font-black text-white mb-5 leading-tight"
          >
            Conheça nossos{" "}
            <span style={{ color: "#4ab8d4" }}>produtos</span>
          </h2>
          <div
            className="w-16 h-0.5 mx-auto mb-5"
            style={{ background: "linear-gradient(90deg, transparent, #4ab8d4, transparent)" }}
          />
          <p className="text-white/45 text-lg max-w-lg mx-auto leading-relaxed">
            Linhas especializadas para manter sua piscina sempre cristalina e segura.
          </p>
        </div>

        {/* Cards alternados */}
        <div className="flex flex-col gap-8">
          {lines.map((line, i) => {
            const isLeft = line.side === "left";
            const isHovered = hovered === i;
            const isOtherHovered = hovered !== null && hovered !== i;

            return (
              <div
                key={i}
                className="relative rounded-3xl overflow-hidden cursor-pointer"
                style={{
                  transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                  opacity: isOtherHovered ? 0.35 : 1,
                  transform: isHovered ? "scale(1.01)" : "scale(1)",
                  border: `1px solid ${isHovered ? line.accent + "55" : "rgba(255,255,255,0.06)"}`,
                  boxShadow: isHovered
                    ? `0 40px 80px rgba(0,0,0,0.6), 0 0 60px ${line.accent}22`
                    : "0 4px 30px rgba(0,0,0,0.3)",
                  background: isHovered
                    ? "rgba(255,255,255,0.05)"
                    : "rgba(255,255,255,0.025)",
                  filter: isOtherHovered ? "blur(1px)" : "blur(0px)",
                }}
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                {/* Barra de cor lateral */}
                <div
                  className="absolute top-0 bottom-0 w-1"
                  style={{
                    left: isLeft ? 0 : "auto",
                    right: isLeft ? "auto" : 0,
                    background: `linear-gradient(180deg, ${line.accent}, transparent)`,
                    opacity: isHovered ? 1 : 0.4,
                    transition: "opacity 0.4s",
                  }}
                />

                <div
                  className={`flex flex-col md:flex-row items-center gap-0 ${
                    isLeft ? "" : "md:flex-row-reverse"
                  }`}
                >
                  {/* IMAGEM */}
                  <div
                    className="relative overflow-hidden md:w-[55%] w-full"
                    style={{
                      transition: "all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                    }}
                  >
                    {/* Overlay gradiente na imagem */}
                    <div
                      className="absolute inset-0 z-10 pointer-events-none"
                      style={{
                        background: isLeft
                          ? "linear-gradient(to right, transparent 60%, rgba(13,34,51,0.9) 100%)"
                          : "linear-gradient(to left, transparent 60%, rgba(13,34,51,0.9) 100%)",
                        transition: "opacity 0.4s",
                        opacity: isHovered ? 0.5 : 1,
                      }}
                    />
                    <img
                      src={line.image}
                      alt={`Linha ${line.name}`}
                      className="w-full h-auto object-contain block"
                      style={{
                        maxHeight: isHovered ? "520px" : "380px",
                        minHeight: "280px",
                        transition: "max-height 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                        objectPosition: "center",
                      }}
                    />
                  </div>

                  {/* TEXTO */}
                  <div
                    className={`flex-1 p-8 md:p-12 z-20 ${
                      isLeft ? "md:pl-6" : "md:pr-6"
                    }`}
                  >
                    {/* Tag */}
                    <span
                      className="inline-block text-[10px] font-bold tracking-[0.3em] uppercase mb-4 px-3 py-1 rounded-full"
                      style={{
                        background: `${line.accent}18`,
                        color: line.accent,
                        border: `1px solid ${line.accent}33`,
                      }}
                    >
                      {line.tag}
                    </span>

                    {/* Nome */}
                    <div className="mb-2">
                      <span className="text-white/40 text-sm font-medium tracking-widest uppercase block mb-1">
                        {line.label}
                      </span>
                      <h3
                        className="text-4xl md:text-5xl font-black leading-none"
                        style={{
                          color: isHovered ? line.accent : "#fff",
                          transition: "color 0.4s",
                        }}
                      >
                        {line.name}
                      </h3>
                    </div>

                    {/* Linha divisória */}
                    <div
                      className="w-12 h-0.5 my-5"
                      style={{
                        background: line.accent,
                        opacity: isHovered ? 1 : 0.4,
                        transition: "opacity 0.4s",
                      }}
                    />

                    {/* Tagline */}
                    <p className="text-white/90 font-semibold text-lg mb-3 leading-snug">
                      {line.tagline}
                    </p>

                    {/* Descrição */}
                    <p className="text-white/45 text-sm leading-relaxed mb-8">
                      {line.description}
                    </p>

                    {/* Botão */}
                    <a
                      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(
                        `Olá! Gostaria de saber mais sobre a linha ${line.name}`
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-7 py-3.5 rounded-xl font-bold text-sm transition-all duration-300"
                      style={{
                        background: isHovered
                          ? line.accent
                          : "rgba(255,255,255,0.08)",
                        color: isHovered ? "#0d2233" : "#fff",
                        border: `1px solid ${isHovered ? line.accent : "rgba(255,255,255,0.15)"}`,
                        letterSpacing: "0.05em",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24z" />
                      </svg>
                      Conheça a linha
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
