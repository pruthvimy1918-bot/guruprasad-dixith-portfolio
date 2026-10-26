import Reveal from "./Reveal";
import { REVIEWS } from "../data/config";
export default function Reviews() {
  return (
    <div className="tg">
      {REVIEWS.map((r, i) => (
        <Reveal key={i} delay={i * 0.1}><blockquote>“{r.t}”<cite>{r.n}</cite></blockquote></Reveal>
      ))}
    </div>
  );
}
