import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import Mandala from "./Mandala";
import { SLIDES, wa } from "../data/config";

const fill = { position: "absolute", top: 0, left: 0, width: "100%", height: "100%" };

export default function Hero() {
  const rm = useReducedMotion();
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setTimeout(() => setI((x) => (x + 1) % SLIDES.length), SLIDES[i].ms || 6000);
    return () => clearTimeout(t);
  }, [i]);

  const s = SLIDES[i];
  const fade = (d) => ({
    initial: rm ? false : { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay: d },
  });

  return (
    <div className="hero" style={{ position: "relative", overflow: "hidden", width: "100%" }}>
      {/* FULL-WIDTH MEDIA LAYER (direct child of .hero) */}
      <AnimatePresence>
        <motion.div
          key={i}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2 }}
          style={{
            ...fill,
            zIndex: 0,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundImage: s.img && !s.video ? `url(${s.img})` : "none",
          }}
        >
          {s.video && (
            <video
              src={s.video}
              poster={s.img}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              style={{ ...fill, objectFit: "cover" }}
            />
          )}
          <div style={{ ...fill, background: "linear-gradient(rgba(0,0,0,.25), rgba(0,0,0,.5))" }} />
        </motion.div>
      </AnimatePresence>

      <Mandala animate={!rm} />

      <button className="arrow l" onClick={() => setI((i + SLIDES.length - 1) % SLIDES.length)} aria-label="Previous slide">‹</button>
      <button className="arrow r" onClick={() => setI((i + 1) % SLIDES.length)} aria-label="Next slide">›</button>

      {/* TEXT CONTENT */}
      <div className="wrap in" key={i}>
        <motion.p className="kn" {...fade(0.2)}>{s.kn}</motion.p>
        <h1>
          <motion.span style={{ display: "block", color: "#fff" }} {...fade(0.5)}>{s.a}</motion.span>
          <motion.span style={{ display: "block" }} {...fade(0.9)}>{s.b}</motion.span>
        </h1>
        <motion.p className="lead" {...fade(1.2)}>{s.t}</motion.p>
        <motion.div className="ctas" {...fade(1.5)}>
          <a className="btn" href={wa("Namaste, I would like to book a pooja.")} target="_blank" rel="noreferrer">Book on WhatsApp</a>
          <Link className="btn line" to="/services">View Services</Link>
        </motion.div>
      </div>

      <div className="dots">
        {SLIDES.map((_, n) => (
          <button key={n} className={n === i ? "on" : ""} onClick={() => setI(n)} aria-label={`Slide ${n + 1}`} />
        ))}
      </div>
    </div>
  );
}