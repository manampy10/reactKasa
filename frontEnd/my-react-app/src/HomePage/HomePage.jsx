// src/pages/HomePage/HomePage.jsx
import "./HomePage.css";
import { useEffect, useState } from "react";
import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Card from "../components/Cards/Card";
import Footer from "../Footer/Footer";

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
      <Banner />
      <div className="card-list">
        {properties.map((property) => (
          <Card
            key={property.id}
            title={property.title}
            cover={property.cover}
          />
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
