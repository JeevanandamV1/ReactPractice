import React, { useState, useContext } from "react";
import "../styles/components/Filter.css";
import { ContextAPI } from "../pages/Ecommerce";

export default function Filter({ min = 0, max = 100 }) {
  const { handleFilterChange } = useContext(ContextAPI);
  const [price, setPrice] = useState(max);
  const [selectedBrands, setSelectedBrands] = useState([]);

  const availableBrands = [
    "Nike",
    "Adidas",
    "Levi's",
    "Raymond",
    "Puma",
    "Zara",
    "H&M",
    "FabIndia",
    "Tommy Hilfiger",
    "Under Armour",
  ];

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const applyFilters = () => {
    handleFilterChange({ price, brands: selectedBrands });
  };

  return (
    <div className="filters-wrapper">
      <div className="filter-section">
        <h3 className="filter-section-title">Price Range</h3>
        <div className="filter-container">
          <input
            type="range"
            min={min}
            max={max}
            value={price}
            onChange={(e) => setPrice(Number(e.target.value))}
            className="filter-input"
          />
          <div className="filter-range">
            <span>${min}</span>
            <span>${price}</span>
          </div>
        </div>
      </div>

      <div className="filter-section">
        <h3 className="filter-section-title">Brands</h3>
        <div className="brand-filters">
          {availableBrands.map((brand, index) => (
            <label key={index} className="brand-checkbox">
              <input
                type="checkbox"
                checked={selectedBrands.includes(brand)}
                onChange={() => handleBrandChange(brand)}
              />
              <span className="brand-name">{brand}</span>
            </label>
          ))}
        </div>
      </div>

      <button className="add-to-cart-button" onClick={applyFilters}>
        Apply Filters
      </button>
    </div>
  );
}
