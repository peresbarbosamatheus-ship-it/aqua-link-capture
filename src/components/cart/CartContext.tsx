import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";

export type CartItem = { name: string; qty: number };

type CartCtx = {
  items: CartItem[];
  count: number;
  open: boolean;
  setOpen: (v: boolean) => void;
  add: (name: string) => void;
  remove: (name: string) => void;
  setQty: (name: string, qty: number) => void;
  clear: () => void;
  bumped: number;
};

const Ctx = createContext<CartCtx | null>(null);
const KEY = "gqa.cart.v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [open, setOpen] = useState(false);
  const [bumped, setBumped] = useState(0);

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(KEY);
      if (raw) setItems(JSON.parse(raw));
    } catch { /* noop */ }
  }, []);
  useEffect(() => {
    try { sessionStorage.setItem(KEY, JSON.stringify(items)); } catch { /* noop */ }
  }, [items]);

  const value = useMemo<CartCtx>(() => ({
    items,
    count: items.reduce((s, i) => s + i.qty, 0),
    open,
    setOpen,
    bumped,
    add: (name) => {
      setItems((prev) => {
        const ex = prev.find((p) => p.name === name);
        if (ex) return prev.map((p) => p.name === name ? { ...p, qty: p.qty + 1 } : p);
        return [...prev, { name, qty: 1 }];
      });
      setBumped((b) => b + 1);
    },
    remove: (name) => setItems((prev) => prev.filter((p) => p.name !== name)),
    setQty: (name, qty) => setItems((prev) =>
      qty <= 0 ? prev.filter((p) => p.name !== name) : prev.map((p) => p.name === name ? { ...p, qty } : p)
    ),
    clear: () => setItems([]),
  }), [items, open, bumped]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useCart() {
  const v = useContext(Ctx);
  if (!v) throw new Error("useCart must be inside CartProvider");
  return v;
}
