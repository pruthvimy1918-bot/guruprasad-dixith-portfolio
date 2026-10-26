import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { NAME, wa } from "../data/config";

const LINKS = [["/", "Home"], ["/services", "Services"], ["/about", "About"], ["/gallery", "Gallery"], ["/contact", "Contact"]];

export default function Navbar() {
  const [menu, setMenu] = useState(false);
  return (
    <header>
      <div className="nav">
        <Link className="logo" to="/" onClick={() => setMenu(false)}>{NAME}<small>VEDIC CEREMONIES</small></Link>
        <button className="burger" onClick={() => setMenu(!menu)} aria-label="Menu">{menu ? "✕" : "☰"}</button>
        <nav className={menu ? "open" : ""}>
          {LINKS.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"} onClick={() => setMenu(false)}
              className={({ isActive }) => "lnk" + (isActive ? " act" : "")}>{label}</NavLink>
          ))}
          <a className="btn" href={wa("Namaste, I would like to book a pooja.")} target="_blank" rel="noreferrer" style={{ padding: "9px 18px" }}>WhatsApp</a>
        </nav>
      </div>
    </header>
  );
}
