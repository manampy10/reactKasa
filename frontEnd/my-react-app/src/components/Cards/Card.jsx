// src/components/Card/Card.jsx
import "./Card.css";

function Card({ title, cover }) {
  return (
    <div className="card">
      <img src={cover} alt={title} className="card-img" />
      <h3 className="card-title">{title}</h3>
    </div>
  );
}

export default Card;
