import React, { useState } from "react";

const AccardionItem = ({ el, index }) => {
  const { title, text } = el;

  const [isOpen, setIsOpen] = useState(false);

  const handlerToogle = () => {
    setIsOpen(!isOpen);
  };
  console.log(isOpen);
  console.log("item", el, index);
  return (
    <div
      className={`item ${isOpen ? "open" : "item"}`}
      onClick={() => handlerToogle()}
    >
      <p className="number">{index <= 9 ? `0${index + 1}` : index}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccardionItem;
