import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Slideshow from "../../components/Slideshow/Slideshow";
import "./PropertyPageCarrousel.css";
function PropertyPageCarroussel() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8080/api/properties")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => p.id === id);
        setProperty(found);
      });
  }, [id]);

  if (!property) return <div>Chargement...</div>;

  return (
    <>
      <div className="property-container">
        <Slideshow pictures={property.pictures} />
        <h1>{property.title}</h1>
      </div>
    </>
  );
}

export default PropertyPageCarroussel;
