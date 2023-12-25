import PropTypes from "prop-types";
import "../css/main.css";

export default function ShopCard({ product }) {
  return (
    <>
      <div className="shop-card">
        <div className="shop-card-img-container">
          <div className="shop-card-header">
            <div className="shop-card-header-name material-icons">
              {product.name}
            </div>
            <div className="shop-card-header-color material-icons">
              {product.color}
            </div>
          </div>
          <div className="shop-card-footer">
            <div className="shop-card-price material-icons">
              ${product.price}
            </div>
            <button className="shop-cart-button">Add to cart</button>
          </div>
          <img
            className="shop-card-img"
            src={product.img}
          ></img>
        </div>
      </div>
    </>
  );
}

ShopCard.propTypes = {
  product: PropTypes.object,
};
