import { useState, useEffect } from "react";
import Product from "./Product";

function ProductList() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="product-container">
      {products.map((product) => (
        <Product
          key={product.id}
          name={product.name}
          price={product.price}
          image={product.image}
        />
      ))}
    </div>
  );
}

export default ProductList;

//npx json-server --watch data/Product.json --port 3000 --static ./data

//http://localhost:5178/