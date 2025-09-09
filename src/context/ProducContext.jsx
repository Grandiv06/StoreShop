import { createContext, useContext, useEffect, useState } from "react";
import api from "../services/config";

const ProductContxt = createContext();

function ProductsProvider({ children }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // setProducts(await api.get("/products"));
        const data = await api.get("/products");

        setProducts(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchProducts();
  }, []);
  return (
    <ProductContxt.Provider value={products}>{children}</ProductContxt.Provider>
  );
}

const useProducts = () => {
  const products = useContext(ProductContxt);
  return products;
};

const useProductsDetails = (id) => {
  const products = useContext(ProductContxt);
  const result = products.find((product) => product.id === id);
  return result;
};

export { useProducts, useProductsDetails };
export default ProductsProvider;
