import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import aquecedor from "@/assets/aqucedor.png";
import balde from "@/assets/balde.png";
import bomba from "@/assets/bomba.png";
import cascade from "@/assets/cascade.png";
import clarificante from "@/assets/clarificante.png";
import led from "@/assets/led.png";

const slides = [
  { image: aquecedor, alt: "Aquecedor para piscinas GQA", product: "Aquecedor" },
  { image: bomba, alt: "Bombas para piscinas GQA", product: "Bombas" },
  { image: cascade, alt: "Cascatas para piscinas GQA", product: "Cascatas" },
  { image: clarificante, alt: "Clarificante para piscinas GQA", product: "Clarificante" },
  { image: led, alt: "Iluminação LED para piscinas GQA", product: "Iluminação LED" },
  { image: balde, alt: "Produtos químicos para piscinas GQA", product: "Produtos Químicos" },
];

const WHATSAPP_NUMBER = "5581999125638";

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  useEffect(() => {
    const interval = setInterval(next, 6000);
    return () => clearInterval(interval);
  }, [next]);

  const handleClick = (product: string) => {
    const message = encodeURIComponent(
      `Olá! Tenho interesse em ${product}. Pode me passar mais informações?`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
  };

  return (
   <section className="relative w-full bg-[#0a2540] pt-20 md:pt-28">
  
      <div className="relative w-full overflow-hidden">
        {/* Proporção 8:3 exata - 2400x900 */}
        <div className="relative w-full aspect-[8/3] max-h-[800px] min-h-[280px]">
          {slides.map((slide, idx) => (
            <button
              key={idx}
              onClick={() => handleClick(slide.product)}
              aria-label={`Ver ${slide.product} no WhatsApp`}
              className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out cursor-pointer ${
                idx === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
              }`}
            >
              <img
                src={slide.image}
                alt={slide.alt}
                className="w-full h-full object-cover"
                loading={idx === 0 ? "eager" : "lazy"}
              />
            </button>
          ))}

          {/* Seta esquerda */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Anterior"
            className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-[#0a2540] rounded-full p-2 md:p-4 shadow-xl transition-all hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
          </button>

          {/* Seta direita */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Próximo"
            className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/95 hover:bg-white text-[#0a2540] rounded-full p-2 md:p-4 shadow-xl transition-all hover:scale-110"
          >
            <ChevronRight className="w-6 h-6 md:w-8 md:h-8" strokeWidth={2.5} />
          </button>

          {/* Indicadores (bolinhas) - posicionadas bem embaixo */}
          <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2.5">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrent(idx);
                }}
                aria-label={`Ir para slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all ${
                  idx === current
                    ? "w-10 bg-yellow-400"
                    : "w-3 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
