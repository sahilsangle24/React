import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// function ProductCard() {
//   return (
//     <div className="product-card">
//       <h1>Wireless Headphone</h1>
//       <p>High-quality wireless headphones.</p>
//       <h3>Price: $850</h3>
//       <p>Rating: ⭐ 4.3</p>
//       <button onClick={() => alert("Added to Cart!")}>Add To Cart</button>
//     </div>
//   );
// }

let username = "siri";

let greetingmsg = () => {
  return <>Hello {username}. Have a great day!!</>;
};

function App() {
  return (
    <div>
      <h2>{greetingmsg()}</h2>
      {names.map((name) => (
        <h2>{name}</h2>
      ))}
    </div>
  );
}

let personDetails={
  address:"nashik",
  skills:"react js",
};

let names = ["ram", "sahil", "darshan", "vivek", "shreya"];

ReactDOM.createRoot(document.getElementById("root")).render(
  <div>
    <App />

    <h1>sahil sangale</h1>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia possimus
      nihil natus placeat id nam saepe laboriosam non, aspernatur quos?
    </p>
    <h2>Address:{personDetails.address}</h2>
    <h2>Skills:{personDetails.skills}</h2>
  </div>,
);
