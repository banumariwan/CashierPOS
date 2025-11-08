import { useEffect, useState } from "react";
import api from "../services/api";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetchProducts();
  }, [query]);

  const fetchProducts = async () => {
    const res = await api.get(`/products/?search=${query}`);
    setProducts(res.data);
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-3">Products</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search products..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      <div className="table-responsive">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Price ($)</th>
              <th>Stock</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((p) => (
                <tr key={p.id}>
                  <td>{p.name}</td>
                  <td>{p.price.toFixed(2)}</td>
                  <td>{p.stock}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  No products found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
