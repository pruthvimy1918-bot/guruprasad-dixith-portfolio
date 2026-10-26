import { Link } from "react-router-dom";
import Title from "./Title";
import Reveal from "./Reveal";
import { NAME, ABOUT_TEXT, STATS } from "../data/config";

export default function AboutSection() {
  return (
    <section className="about"><div className="wrap">
      <Title h="About the Purohit" />
      <div className="about-g">
        <Reveal><div className="photo"><div><div style={{ fontSize: 48 }}>ॐ</div>need to update photo</div></div></Reveal>
        <Reveal delay={0.1}>
          <h3 style={{ fontSize: 34, color: "#fff" }}>{NAME}</h3>
          <p style={{ marginTop: 12 }}>{ABOUT_TEXT}</p>
          <p className="kn" style={{ marginTop: 12 }}>ಕನ್ನಡ, ಸಂಸ್ಕೃತ ಮತ್ತು ಇಂಗ್ಲಿಷ್‌ನಲ್ಲಿ ಮಾರ್ಗದರ್ಶನ ಲಭ್ಯ.</p>
          <div className="stats">{STATS.map(([n, l]) => <div key={l}><b>{n}</b>{l}</div>)}</div>
          <p style={{ marginTop: 24 }}><Link className="btn" to="/contact">Book a Pooja</Link></p>
        </Reveal>
      </div>
    </div></section>
  );
}
