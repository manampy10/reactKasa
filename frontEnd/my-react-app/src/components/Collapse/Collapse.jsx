import { useState } from "react";
import "./Collapse.css";

function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((prev) => !prev);

  return (
    <div className="collapse">
      <div
        className={`collapse-header ${isOpen ? "open" : ""}`}
        onClick={toggle}
      >
        <h2>{title}</h2>
        <span
          style={{
            transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.3s ease",
            fontSize: "1.5rem",
          }}
        >
          ˄
        </span>
      </div>
      {isOpen && (
        <div className="collapse-content">
          <p>{children}</p>
        </div>
      )}
    </div>
  );
}

export default Collapse;
