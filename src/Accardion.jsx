import AccardionItem from "./AccardionItem";

const Accardion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccardionItem el={el} key={i} index={i} />
      ))}
    </div>
  );
};

export default Accardion;
