import { useEffect, useState } from "react";
import api from "../services/api";

export default function CreateSale() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => { loadProducts(); }, []);

  const loadProducts = async () => {
    const res = await api.get("/products/");
    setProducts(res.data);
  };

  const addToCart = (product) => {
    const existing = cart.find(item => item.id === product.id);
    if (existing) {
      existing.quantity += 1;
      existing.subtotal = existing.quantity * existing.price;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...product, quantity: 1, subtotal: product.price }]);
    }
    setTotal(total + product.price);
  };

  const checkout = async () => {
    const saleData = {
      total_amount: total,
      items: cart.map(i => ({ product: i.id, quantity: i.quantity, subtotal: i.subtotal }))
    };
    await api.post("/sales/", saleData);
    alert("Sale completed!");
    setCart([]);
    setTotal(0);
  };

  return (
    <div className="row">
      <div className="col-md-7">
        <h4>Products</h4>
        <div className="d-flex flex-wrap">
          {products.map(p => (
            <div key={p.id} className="card m-2 p-2" style={{ width: "10rem" }}>
              <h6>{p.name}</h6>
              <p>${p.price}</p>
              <button className="btn btn-sm btn-primary" onClick={() => addToCart(p)}>Add</button>
            </div>
          ))}
        </div>
      </div>

      <div className="col-md-5">
        <h4>Cart</h4>
        <ul className="list-group mb-3">
          {cart.map(item => (
            <li key={item.id} className="list-group-item d-flex justify-content-between">
              <span>{item.name} x {item.quantity}</span>
              <span>${item.subtotal.toFixed(2)}</span>
            </li>
          ))}
        </ul>
        <h5>Total: ${total.toFixed(2)}</h5>
        <button className="btn btn-success w-100" onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
}
