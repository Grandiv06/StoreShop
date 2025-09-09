import { Navigate, Route, Routes } from "react-router-dom";

import CheckoutPage from "./pages/CheckoutPage";
import ProductsPage from "./pages/ProductsPage";
import Detailspage from "./pages/Detailspage";
import PageNotFound from "./pages/404";
import Layout from "./layout/Layout";
import CartProvider from "./context/CartContext";
import ProductsProvider from "./context/ProducContext";

function App() {
  return (
    <CartProvider>
      <Layout>
        <ProductsProvider>
          <Routes>
            <Route index element={<Navigate to="/products" replace />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<Detailspage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/*" element={<PageNotFound />} />
          </Routes>
        </ProductsProvider>
      </Layout>
    </CartProvider>
  );
}

export default App;
