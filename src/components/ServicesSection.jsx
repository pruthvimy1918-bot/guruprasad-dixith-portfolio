import Title from "./Title";
import ServiceCard from "./ServiceCard";
import { SERVICES } from "../data/services";

export default function ServicesSection({ full }) {
  return (
    <section><div className="wrap">
      <Title h="Our Services" sub="Poojas and homas for every auspicious occasion. Tap a card to enquire on WhatsApp." />
      <div className="grid">
        {SERVICES.map(([en, kn], i) => <ServiceCard key={en} en={en} kn={kn} delay={(i % 4) * 0.07} />)}
      </div>
      {full && (
        <div className="info" style={{ marginTop: 50 }}>
          <div><b>1. Choose</b>Pick your pooja and preferred date</div>
          <div><b>2. Confirm</b>Share details on WhatsApp</div>
          <div><b>3. Celebrate</b>We guide you on samagri and conduct the ceremony</div>
        </div>
      )}
    </div></section>
  );
}
