import { useState } from "react";

function Product(props) {

  const [cart, setCart] = useState(false);

  function AddToCart() {
    setCart(true);
  }

  return (
    <div className="card">

      <img src={props.image} alt={props.name} />

      <h2>{props.name}</h2>

      <p>{props.price}</p>

      <button onClick={AddToCart}>
        {cart ? "Added ✅" : "Add to Cart 🛒"}
      </button>

      <p>{cart ? "Added to Cart ✅" : "Available"}</p>

    </div>
  );
}

export default Product;