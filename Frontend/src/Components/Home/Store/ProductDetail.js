
import React, {useState} from "react";
import "./Products.css";

export default function Products() {
  const [cartItems, setCartItems] = useState([]);
  const [cartItemCount, setCartItemCount] = useState(0);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    setCartItemCount(cartItemCount + 1);
   
  };
  

  return (
    <div className="products">
      <div className="cart-icon">
        <i className="fas fa-shopping-cart"></i>
        {cartItemCount > 0 && <span className="cart-item-count">{cartItemCount}</span>}
      </div>
      <div className="row">
        <div className="product">
          <img src="ASSETS/img/1.jpg" alt="" />
          <button type="submit" className="button" onClick={() => handleAddToCart("Product 1")}>
            AddToCart
          </button>
        </div>
        <div className="product">
          <img src="ASSETS/img/2.jpg" alt="" />
          <button type="submit" className="button" onClick={() => handleAddToCart("Product 2")}>
            AddToCart
          </button>
        </div>
        <div className="product">
          <img src="ASSETS/img/3.jpg" alt="" />
          <button type="submit" className="button" onClick={() => handleAddToCart("Product 3")}>
            AddToCart
          </button>
        </div>
        <div className="product">
          <img src="ASSETS/img/4.jpg" alt="" />
          <button type="submit" className="button" onClick={() => handleAddToCart("Product 4")}>
            AddToCart
          </button>
        </div>
      </div>
      <div className="row">
        <div className="product">
          <img src="ASSETS/img/5.jpg" alt="" />
          <button type="submit" className="button" onClick={() => handleAddToCart("Product 5")}>
            AddToCart
          </button>
        </div>
        <div className="product">
          <img src="ASSETS/img/4.jpg" alt="" />
          <button type="submit" className="button" onClick={() => handleAddToCart("Product 4")}>
            AddToCart
          </button>
        </div>
        <div className="product">
          <img src="ASSETS/img/1.jpg" alt="" />
          <button type="submit" className="button" onClick={() => handleAddToCart("Product 1")}>
            AddToCart
          </button>
        </div>
        <div className="product">
          <img src="ASSETS/img/2.jpg" alt="" />
          <button type="submit" className="button" onClick={() => handleAddToCart("Product 2")}>
            AddToCart
          </button>
        </div>
      </div>
    </div>
  );
}
