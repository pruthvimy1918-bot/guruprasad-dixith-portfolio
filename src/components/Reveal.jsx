import { motion, useReducedMotion } from "framer-motion";
export default function Reveal({ children, delay = 0 }) {
  const rm = useReducedMotion();
  return (
    <motion.div initial={rm ? false : { opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.55, delay }}>
      {children}
    </motion.div>
  );
}
