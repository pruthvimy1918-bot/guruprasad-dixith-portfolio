import { NAME, PHONE_DISPLAY, CITY } from "../data/config";
export default function Footer() {
  return (
    <footer>
      <h3>{NAME}</h3>
      <p style={{ margin: "6px 0" }}>{PHONE_DISPLAY} · {CITY} · <span className="kn">ಕನ್ನಡ</span> / English</p>
      <p>© {new Date().getFullYear()} All rights reserved.</p>
    </footer>
  );
}
