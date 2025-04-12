// src/pages/HomePage/HomePage.jsx
import "./HomePage.css";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/Card";
import Footer from "../Footer/Footer";
import bannerAccueil from "../logo/banner.png";

function HomePage() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data))
      .catch((err) => console.error("Erreur API :", err));
  }, []);

  return (
    <div className="homepage">
      <Header />
      <Banner text="Chez vous, partout et ailleurs" image={bannerAccueil} />
      <div className="card-list-container">
        <div className="card-list">
          {properties.map((property) => (
            <Card
              key={property.id}
              title={property.title}
              cover={property.cover}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
