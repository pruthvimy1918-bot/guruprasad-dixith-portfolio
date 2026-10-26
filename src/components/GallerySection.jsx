import { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Title from "./Title";
import { GALLERY } from "../data/config";

export default function GallerySection({ preview }) {
  const [open, setOpen] = useState(null);
  const all = GALLERY.length ? GALLERY : Array.from({ length: 8 }, () => null);
  const items = preview ? all.slice(0, 4) : all;
  return (
    <section><div className="wrap">
      <Title h="Gallery & Blessings" sub="Moments from ceremonies" />
      <div className="gal">
        {items.map((src, i) => (
          <button key={i} onClick={() => setOpen(i)} aria-label={`Open photo ${i + 1}`}>
            {src ? <img src={src} alt={`Ceremony ${i + 1}`} loading="lazy" /> : "ॐ"}
          </button>
        ))}
      </div>
      {preview && <p style={{ textAlign: "center", marginTop: 28 }}><Link className="btn" to="/gallery">View Full Gallery</Link></p>}
      <AnimatePresence>
        {open !== null && (
          <motion.div className="lb" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            onClick={() => setOpen(null)} role="dialog" aria-modal="true" tabIndex={-1}
            onKeyDown={(e) => e.key === "Escape" && setOpen(null)} ref={(el) => el && el.focus()}>
            <button className="x" onClick={() => setOpen(null)} aria-label="Close">×</button>
            {items[open] ? <img src={items[open]} alt="" /> : <div className="ph" style={{ color: "#D6B16C", fontSize: 80 }}>ॐ</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </div></section>
  );
}
