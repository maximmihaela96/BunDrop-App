import '../services/Cards.css';
import { Link } from "react-router-dom";

function BurgerCards({ name, price, image, id }) {
  return (
      <Link to={`/burgers/${id}`}>   
        <div className="card">
              <img src={image} />
              <h1>{name}</h1>
              <p>{price} <span>$</span></p>
              <button>Add to Cart</button>
        </div>
        </Link>
  );
}
export default BurgerCards;