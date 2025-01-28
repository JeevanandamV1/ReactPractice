import React, { createContext, useState } from "react";
import ProductList from "../components/ProductSection";
import Filter from "../components/Filter";
import "../styles/pages/Ecommerce.css";
import cargo from "../assets/img/cargo.jpg";
import hoodie from "../assets/img/hoodie.jpg";
import jacket from "../assets/img/jacket.jpg";
import jeans from "../assets/img/jeans.jpg";
import kurthi from "../assets/img/kurthi.jpg";
import shirt from "../assets/img/shirt.jpg";
import shoe from "../assets/img/shoe.jpg";
import sportsshorts from "../assets/img/sportsshorts.jpg";
import tshirt from "../assets/img/tshirt.jpg";
import winterjacket from "../assets/img/winterjacket.jpg";

export const ContextAPI = createContext();

const productsData = [
  {
    id: 1,
    name: "Men's T-Shirt",
    brand: "Nike",
    price: 25.99,
    image: tshirt,
  },
  {
    id: 2,
    name: "Women's Hoodie",
    brand: "Adidas",
    price: 49.99,
    image: hoodie,
  },
  {
    id: 3,
    name: "Denim Jeans",
    brand: "Levi's",
    price: 59.99,
    image: jeans,
  },
  {
    id: 4,
    name: "Formal Shirt",
    brand: "Raymond",
    price: 39.99,
    image: shirt,
  },
  {
    id: 5,
    name: "Running Shoes",
    brand: "Puma",
    price: 79.99,
    image: shoe,
  },
  {
    id: 6,
    name: "Casual Jacket",
    brand: "Zara",
    price: 89.99,
    image: jacket,
  },
  {
    id: 7,
    name: "Cargo Pants",
    brand: "H&M",
    price: 44.99,
    image: cargo,
  },
  {
    id: 8,
    name: "Cotton Kurti",
    brand: "FabIndia",
    price: 29.99,
    image: kurthi,
  },
  {
    id: 9,
    name: "Winter Sweater",
    brand: "Tommy Hilfiger",
    price: 69.99,
    image: winterjacket,
  },
  {
    id: 10,
    name: "Sports Shorts",
    brand: "Under Armour",
    price: 19.99,
    image: sportsshorts,
  },
];

function Ecommerce() {
  const [filteredProducts, setFilteredProducts] = useState(productsData);

  const handleFilterChange = (filters) => {
    const { price, brands } = filters;

    const newFilteredProducts = productsData.filter(
      (product) =>
        product.price <= price &&
        (brands.length === 0 || brands.includes(product.brand))
    );

    setFilteredProducts(newFilteredProducts);
  };

  return (
    <ContextAPI.Provider value={{ filteredProducts, handleFilterChange }}>
      <div className="page-container">
        <aside className="filter-sidebar">
          <Filter />
        </aside>
        <main className="main-content">
          <ProductList />
        </main>
      </div>
    </ContextAPI.Provider>
  );
}

export default Ecommerce;
