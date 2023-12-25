import PropTypes from "prop-types";
import "../css/main.css";
import ShopCard from "./ShopCard";

export default function CardsView({ products }) {
  return products.map((product) => (
    <div key={product.name + product.color}>
      <ShopCard product={product} />
    </div>
  ));
}

CardsView.propTypes = {
  products: PropTypes.array,
};
