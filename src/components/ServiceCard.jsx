import Reveal from "./Reveal";
import { wa } from "../data/config";
export default function ServiceCard({ en, kn, delay }) {
  return (
    <Reveal delay={delay}>
      <a className="card" style={{ display: "block", textDecoration: "none", color: "inherit", height: "100%" }}
        href={wa(`Namaste, I would like to enquire about ${en} (${kn}).`)} target="_blank" rel="noreferrer">
        <div className="om">ॐ</div><h3>{en}</h3><div className="kn">{kn}</div>
      </a>
    </Reveal>
  );
}
