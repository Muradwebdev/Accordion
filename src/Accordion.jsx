import { useState } from "react";
import AccordionItem from "./AccordionItem";

const Accardion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          el={el}
          key={i}
          index={i}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        />
      ))}
    </div>
  );
};

export default Accardion;
