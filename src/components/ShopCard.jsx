import PropTypes from "prop-types";
import "../css/main.css";

export default function ShopCard({ product }) {
  return (
    <>
      <div className="shop-card">
        {/* <div>{product.name}</div>
        <div>{product.color}</div>
        <img className="shop-card-img" src={product.img}></img> */}
        <div className="shop-card-img-container">
          <div className="shop-card-header">
            <div className="shop-card-name">{product.name}</div>
            <div>{product.color}</div>
          </div>
          <img
            className="shop-card-img"
            src={product.img}
          ></img>
        </div>
        <div>
          <span>${product.price}</span>
          <button className="shop-cart-button">Add to cart</button>
        </div>
      </div>
    </>
  );
}

ShopCard.propTypes = {
  product: PropTypes.object,
};
