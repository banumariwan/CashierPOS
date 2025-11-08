import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import CreateSale from "./pages/CreateSale";
import ProductList from "./pages/ProductList";
import SaleHistory from "./pages/SaleHistory";

export default function App() {
  return (
    <Router>
      <Navbar />
      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/create-sale" element={<CreateSale />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/sales-history" element={<SaleHistory />} />
        </Routes>
      </div>
    </Router>
  );
}
