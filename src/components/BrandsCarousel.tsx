import albacete from "@/assets/albacete.png";
import nautilus from "@/assets/nautilus.png";
import brustec from "@/assets/brustec.png";
import jacuzzi from "@/assets/jacuzzi.png";
import rhofer from "@/assets/rhofer1.png";
import netuno from "@/assets/netuno.png";
import dancor from "@/assets/dancor.png";
import hipool from "@/assets/hipool.png";
import hidrodomi from "@/assets/hidrodomi.png";
import pace from "@/assets/pace.png";
import maresias from "@/assets/maresias.png";
import hth from "@/assets/hth1.png";
import sodramar from "@/assets/sodramar.png";

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
  { name: "Sodramar", src: sodramar },
];

// Duplica pra loop infinito
const track = [...logos, ...logos];

export default function BrandsCarousel() {
  return (
    <section
      id="marcas"
      className="w-full py-16"
      style={{ background: "rgba(225,242,252,0.92)" }}
    >
      {/* Título */}
      <div className="text-center mb-12 px-6">
        <div className="w-16 h-0.5 mx-auto mb-6" style={{ background: "linear-gradient(90deg, transparent, #1a4a5c, transparent)" }} />
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-3">
          As melhores marcas estão aqui
        </h2>
        <p className="text-slate-500 text-base max-w-md mx-auto">
          Trabalhamos com as marcas mais confiáveis do mercado de piscinas.
        </p>
      </div>

      {/* Carrossel */}
      <div className="relative overflow-hidden">
        {/* Fade esquerda */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, rgba(225,242,252,0.92), transparent)" }}
        />
        {/* Fade direita */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, rgba(225,242,252,0.92), transparent)" }}
        />

        {/* Track animado */}
        <div
          className="flex gap-6 w-max"
          style={{
            animation: "brandScroll 35s linear infinite",
          }}
        >
          {track.map((logo, i) => (
            <div
              key={i}
              className="flex-shrink-0 bg-white rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              style={{
                width: "160px",
                height: "100px",
                boxShadow: "0 4px 16px rgba(0,73,133,0.08)",
                border: "1px solid rgba(0,73,133,0.08)",
              }}
            >
              <img
                src={logo.src}
                alt={logo.name}
                className="object-contain"
                style={{ maxWidth: "120px", maxHeight: "70px" }}
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes brandScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
