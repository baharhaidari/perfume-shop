import Front from "./CardsFront";
import Back from "./CardsBack";

function PerfumeCards({ perfumes }) {
  return (
    <div id="products" className="perfume-list">
      {perfumes.map((perfume, index) => (
        <div className="perfume" key={index}>
          <Front perfumes={perfume}></Front>
          <Back perfumes={perfume}></Back>
        </div>
      ))}
    </div>
  );
}

export default PerfumeCards;
