import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchStats();
  }, []);

  const fetchStats = async () => {
    const res = await api.get("/dashboard/");
    setStats(res.data);
  };

  if (!stats) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Dashboard</h2>

      <div className="row g-3">
        {/* Total Sales */}
        <div className="col-md-4">
          <div className="card text-center border-primary">
            <div className="card-body">
              <h5 className="card-title">Total Sales</h5>
              <p className="card-text fs-4">{stats.total_sales}</p>
            </div>
          </div>
        </div>

        {/* Total Revenue */}
        <div className="col-md-4">
          <div className="card text-center border-success">
            <div className="card-body">
              <h5 className="card-title">Total Revenue</h5>
              <p className="card-text fs-4">${stats.total_revenue.toFixed(2)}</p>
            </div>
          </div>
        </div>

        {/* Top Products */}
        <div className="col-md-4">
          <div className="card text-center border-warning">
            <div className="card-body">
              <h5 className="card-title">Top Products</h5>
              {stats.top_products.length > 0 ? (
                <ul className="list-unstyled mb-0">
                  {stats.top_products.map((p, i) => (
                    <li key={i}>{p}</li>
                  ))}
                </ul>
              ) : (
                <p className="mb-0">No sales yet</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
