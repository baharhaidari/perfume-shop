import CardsButton from "./CardsButton";

function Front({ perfumes }) {
  return (
    <div className="front">
      <img src={perfumes.image} alt={perfumes.title} />
      <h2>{perfumes.title}</h2>
      <CardsButton perfumes={perfumes}></CardsButton>
    </div>
  );
}

export default Front;
