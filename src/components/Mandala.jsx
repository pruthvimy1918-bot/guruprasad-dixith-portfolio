import { motion } from "framer-motion";
export default function Mandala({ animate }) {
  const petals = Array.from({ length: 16 }, (_, i) => i * 22.5);
  return (
    <motion.svg className="mandala" viewBox="-100 -100 200 200" fill="none" stroke="#D6B16C" strokeWidth=".5"
      animate={animate ? { rotate: 360 } : {}} transition={{ duration: 80, ease: "linear", repeat: Infinity }}>
      {[95, 80, 50, 25].map((r) => <circle key={r} r={r} />)}
      {petals.map((a) => <ellipse key={a} cx="0" cy="-65" rx="9" ry="28" transform={`rotate(${a})`} />)}
      {petals.map((a) => <ellipse key={"b" + a} cx="0" cy="-37" rx="5" ry="14" transform={`rotate(${a + 11})`} />)}
    </motion.svg>
  );
}
