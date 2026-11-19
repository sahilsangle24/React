import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

function ProductCard() {
  return (
    <div className="product-card">
      <h1>Wireless Headphone</h1>
      <p>High-quality wireless headphones.</p>
      <h3>Price: $850</h3>
      <p>Rating: ⭐ 4.3</p>
      <button onClick={() => alert("Added to Cart!")}>Add To Cart</button>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<ProductCard />);
