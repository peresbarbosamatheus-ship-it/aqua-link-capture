import { useEffect, useState } from "react";

export function ScrollProgressBar() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[9999] h-[3px]" style={{ background: "rgba(255,255,255,0.15)" }}>
      <div style={{ width: `${p}%`, height: "100%", background: "var(--accent)", transition: "width 0.1s linear", boxShadow: "0 0 12px rgba(0,73,133,0.6)" }} />
    </div>
  );
}
