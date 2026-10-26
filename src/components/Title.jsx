import Reveal from "./Reveal";
export default function Title({ h, sub }) {
  return <Reveal><h2 className="sec-h">{h}</h2><span className="orn" />{sub && <p className="sec-sub">{sub}</p>}</Reveal>;
}
