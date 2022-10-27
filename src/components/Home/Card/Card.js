import "./Card.css";
import { Link } from "react-router-dom";

const Card = ({ id, name, image, category }) => {
  return (
    <div className="card">
      <Link to={`licor/${id}`}>
        <img alt={`licor ${name}`} src={image} />
        <div className="description-container">
          <h3>{name}</h3>
          <p>{category}</p>
        </div>
      </Link>
    </div>
  );
};

export default Card;