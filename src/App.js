import React from "react";

import floralImage from "./assets/images/floral.png";
import coverImage from "./assets/images/cover.png";
import orientalImage from "./assets/images/oriental.png";
import aquaticImage from "./assets/images/aquatic.jpg";
import herbalImage from "./assets/images/herbal.jpg";
import leatherImage from "./assets/images/leather.jpg";
import woodyImage from "./assets/images/woody.jpg";

import PerfumeCards from "./components/PerfumeCards";
import Footer from "./components/Footer";
import SocialMedia from "./components/SocialMedia";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Filter from "./components/FilteringSystem";

export { coverImage };

const perfumes = [
  {
    title: "Floral",
    image: floralImage,
    description:
      "Experience the beauty of floral scents. Discover perfumes with delicate notes of flowers and blossoms.",
    price: 500,
  },

  {
    title: "Woody",
    image: woodyImage,
    description:
      "Indulge in the earthy and warm aroma of woody fragrances. Explore scents that evoke the essence of forests and woods.",
    price: 400,
  },

  {
    title: "Oriental",
    image: orientalImage,
    description:
      "Immerse yourself in the exotic and mysterious world of oriental perfumes. Uncover captivating blends of spices and resins.",
    price: 275,
  },

  {
    title: "Aquatic",
    image: aquaticImage,
    description:
      "Dive into the invigorating world of Aquatic perfumes, capturing the essence of oceanic freshness and sparkling water.",
    price: 350,
  },

  {
    title: "Herbal",
    image: herbalImage,
    description:
      "Embark on a herbal journey with our fragrances, capturing the essence of nature's lush botanicals and invigorating greenery.",
    price: 200,
  },

  {
    title: "Leather",
    image: leatherImage,
    description:
      "Indulge in the captivating allure of Leather perfumes, embracing the rich and sophisticated essence of supple leather accords.",
    price: 230,
  },
];

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Header image={coverImage}></Header>
      <Filter perfumes={perfumes}></Filter>
      <PerfumeCards perfumes={perfumes}></PerfumeCards>
      <SocialMedia></SocialMedia>
      <Footer></Footer>
    </div>
  );
}

export default App;
