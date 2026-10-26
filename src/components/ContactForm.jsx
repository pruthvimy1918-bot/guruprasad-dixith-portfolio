import { useState } from "react";
import Title from "./Title";
import { SERVICES } from "../data/services";
import { WHATSAPP, PHONE_DISPLAY, CITY, wa } from "../data/config";

export default function ContactForm() {
  const [f, setF] = useState({ name: "", phone: "", service: SERVICES[0][0], date: "", place: "", msg: "" });
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    const text = `Namaste 🙏\nName: ${f.name}\nPhone: ${f.phone}\nService: ${f.service}\nDate: ${f.date || "-"}\nPlace: ${f.place || "-"}\nMessage: ${f.msg || "-"}`;
    window.open(wa(text), "_blank");
  };
  return (
    <section><div className="wrap">
      <Title h="Book a Pooja" sub="Fill the form and it will open WhatsApp with your details ready to send." />
      <div className="info">
        <div><b>Phone</b><a href={`tel:+${WHATSAPP}`}>{PHONE_DISPLAY}</a></div>
        <div><b>Service Area</b>{CITY} & nearby</div>
        <div><b>Languages</b><span className="kn">ಕನ್ನಡ</span>, English, Sanskrit</div>
      </div>
      <form className="form" onSubmit={submit}>
        <label>Your Name<input required value={f.name} onChange={set("name")} /></label>
        <label>Phone Number<input required type="tel" pattern="[0-9+ ]{10,15}" value={f.phone} onChange={set("phone")} /></label>
        <label>Service<select value={f.service} onChange={set("service")}>{SERVICES.map(([en]) => <option key={en}>{en}</option>)}</select></label>
        <label>Preferred Date<input type="date" value={f.date} onChange={set("date")} /></label>
        <label>Place / Address<input value={f.place} onChange={set("place")} /></label>
        <label>Message<textarea rows="3" value={f.msg} onChange={set("msg")} /></label>
        <button className="btn" type="submit">Send on WhatsApp</button>
      </form>
    </div></section>
  );
}
