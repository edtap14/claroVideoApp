import { Link } from "react-router-dom";
import "./Card.css";

function Card({ title, portada, id }) {
  return (
    <>
      <Link to={id}>
        <div className="boxCardFilm">
          <img className="portadaImg" src={portada} alt={portada} />
          <div className="boxTitle">
            <p>{title}</p>
          </div>
        </div>
      </Link>
    </>
  );
}

export default Card;
