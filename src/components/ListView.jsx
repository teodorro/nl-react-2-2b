import PropTypes from "prop-types";
import ShopItem from "./ShopItem";
import "../css/main.css";

export default function ListView({ products }) {
  return products.map((product) => (
    <div key={product.key + product.name}>
      {ShopItem(product = { product })}
    </div>
  ));
}

ListView.propTypes = {
  products: PropTypes.array,
};
