import PropTypes from "prop-types";
import "../css/main.css";

export default function ShopItem({product}) {
  return (<>
  <div className="shop-item">
    <img className="shop-item-img" src={product.img} alt={product.name} />
    <div className="shop-item-name">{product.name}</div>
    <div className="shop-item-color">{product.color}</div>
    <div className="shop-item-price">${product.price}</div>
    <div className="shop-item-button">Add to cart</div>
  </div>
  </>)
}

ShopItem.propTypes = {
  product: PropTypes.object,
};