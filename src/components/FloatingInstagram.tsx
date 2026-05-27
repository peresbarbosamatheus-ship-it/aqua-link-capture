const INSTAGRAM_URL = "https://instagram.com/gquimica.ambiental";

export function FloatingInstagram() {
  return (
    <a
      href={INSTAGRAM_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="@gquimica.ambiental no Instagram"
      title="@gquimica.ambiental"
      className="group fixed right-5 md:right-6 z-50 w-16 h-16 md:w-[58px] md:h-[58px] rounded-full flex items-center justify-center shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition-transform hover:scale-[1.05]"
      style={{
        background: "linear-gradient(135deg, #f09433 0%, #e6683c 25%, #dc2743 50%, #cc2366 75%, #bc1888 100%)",
        bottom: "calc(env(safe-area-inset-bottom, 0px) + 92px)",
      }}
    >
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
      <span className="absolute right-full mr-3 whitespace-nowrap rounded-md bg-[#0f172a] text-white text-xs px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden md:block">
        @gquimica.ambiental
      </span>
    </a>
  );
}
