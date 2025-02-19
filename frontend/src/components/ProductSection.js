import React, { useContext } from "react";
import "../styles/components/ProductSection.css";
import { ContextAPI } from "../pages/Ecommerce";

export default function ProductList() {
  const { filteredProducts } = useContext(ContextAPI);

  return (
    <div className="product-grid-container">
      {filteredProducts.length === 0 ? (
        <p className="no-products-message">No products match your filters.</p>
      ) : (
        <div className="product-grid">
          {filteredProducts.map((product) => (
            <div key={product.id} className="product-cell">
              <div className="product-card">
                <div className="product-image-container">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="product-image"
                  />
                </div>
                <div className="product-content">
                  <h3 className="product-title">{product.name}</h3>
                  <p className="product-brand">{product.brand}</p>
                </div>
                <div className="product-footer">
                  <span className="product-price">
                    ${product.price.toFixed(2)}
                  </span>
                  <button className="add-to-cart-button">Add to Cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
