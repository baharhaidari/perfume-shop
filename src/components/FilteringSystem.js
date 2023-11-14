function Filter({ perfumes }) {
  let perfumeContainer;

  const handleFilterChange = () => {
    perfumeContainer = document.querySelector(".perfume-list");
    const filterInput = document.getElementById("filterInput");
    const filterInputValue = filterInput.value.toLowerCase();

    const filteredPerfumes = perfumes.filter((perfume) => {
      return perfume.title.toLowerCase().slice(0, 1).includes(filterInputValue);
    });

    if (filteredPerfumes.length > 0) {
      showPerfumes(filteredPerfumes);
    } else {
      perfumeContainer.textContent = "";
    }
  };

  const showPerfumes = (perfume) => {
    perfumeContainer = document.querySelector(".perfume-list");
    perfumeContainer.innerHTML = "";

    perfume.forEach((perfume) => {
      perfumeContainer.appendChild(createPerfumeCard(perfume));
    });
  };

  const createPerfumeCard = (perfume) => {
    const perfumediv = document.createElement("div");
    perfumediv.classList.add("perfume");

    const front = document.createElement("div");
    front.classList.add("front");

    const frontImage = document.createElement("img");
    frontImage.src = perfume.image;
    frontImage.alt = perfume.title;
    front.appendChild(frontImage);

    const frontTitle = document.createElement("h2");
    frontTitle.textContent = perfume.title;
    front.appendChild(frontTitle);

    const price = document.createElement("button");
    price.textContent = "$" + perfume.price;
    front.appendChild(price);

    const back = document.createElement("div");
    back.classList.add("back");

    const backTitle = document.createElement("h2");
    backTitle.textContent = perfume.title;
    back.appendChild(backTitle);

    const backDescription = document.createElement("p");
    backDescription.textContent = perfume.description;
    back.appendChild(backDescription);

    perfumediv.appendChild(front);
    perfumediv.appendChild(back);

    return perfumediv;
  };

  return (
    <div className="filter-container">
      <label>Filter by Title: </label>
      <input type="text" id="filterInput" onKeyUp={handleFilterChange} />
    </div>
  );
}

export default Filter;
