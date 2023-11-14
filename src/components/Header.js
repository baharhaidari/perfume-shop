export default function Header(props) {
  return (
    <header className="header" id="home">
      <img src={props.image} alt="Floral perfume" />
      <h1>Fragrance Collection</h1>
      <p>Discover the art of perfumery and find your signature scent</p>
    </header>
  );
}
