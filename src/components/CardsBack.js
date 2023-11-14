function Back({ perfumes }) {
  return (
    <div className="back">
      <h2>{perfumes.title}</h2>
      <p>{perfumes.description}</p>
      <button>Buy</button>
    </div>
  );
}

export default Back;
