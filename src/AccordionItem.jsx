const AccordionItem = ({ el, index, curOpen, setCurOpen }) => {
  const { title, text } = el;

  const isOpen = index === curOpen;

  const handlerToogle = () => {
    setCurOpen(index);
  };
  return (
    <div
      className={`item ${isOpen ? "open" : "item"}`}
      onClick={() => {
        handlerToogle(index);
      }}
    >
      <p className="number">{index <= 9 ? `0${index + 1}` : index}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{text}</div>}
    </div>
  );
};

export default AccordionItem;
