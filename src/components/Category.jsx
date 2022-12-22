import { Link } from "react-router-dom";
import "../card.css";

function Category(props) {
  const { category } = props;
  return (
    <div className="card category-list">
      <Link to={`${category}`}>
        <h1>{category}</h1>
      </Link>
    </div>
  );
}

export default Category;
