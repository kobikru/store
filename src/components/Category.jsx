import { Link } from "react-router-dom";

function Category(props) {
  const { category } = props;
  return (
    <div className="category">
      <Link to={`${category}`}>
        <h1>{category}</h1>
      </Link>
    </div>
  );
}

export default Category;
