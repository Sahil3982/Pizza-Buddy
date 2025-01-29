import { useEffect, useState } from "react";
import Productcart from "../Components/Main/Productcart";

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/recipe", {
          method: "GET",
          headers: {
            "Cache-Control": "no-cache",
            "Pragma": "no-cache",
          },
          cache: "no-store",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch products");
        }

        const data = await response.json();
        console.log("data", data);

        setProducts(data); // Assuming data is an array of product objects
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  console.log("products", products);

  return (
    <>
      <h1>Product List</h1>
      <div className="product-list" style={{ display: "flex", flexWrap: "wrap" }}>
        {products.length > 0 ? (
          products.map((product, index) => (
            <Productcart
              key={index}
              img={product.img || "/Images/default.png"} // Make sure the image path is correct
              name={product.name}
              size={product.size}
              rupee={product.price} // Ensure this is the correct field
            />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </>
  );
};

export default Products;
