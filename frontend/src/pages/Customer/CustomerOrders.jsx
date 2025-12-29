import React from "react";

export default function CustomerOrders() {
  // Mock Data
  const orders = [
    { id: "ORD-001", date: "2023-10-01", qty: 5, total: 75.00, status: "completed" },
    { id: "ORD-002", date: "2023-10-05", qty: 2, total: 30.00, status: "completed" },
    { id: "ORD-003", date: "2023-10-12", qty: 10, total: 150.00, status: "pending" },
    { id: "ORD-004", date: "2023-10-15", qty: 1, total: 15.00, status: "cancelled" },
  ];

  return (
    <div>
      <div className="page-header">
        <h1>My Orders</h1>
        <p>View your past and current delivery history.</p>
      </div>

      <div className="card">
        <div className="order-list">
          {orders.map(order => (
            <div key={order.id} className="order-item">
              <div>
                <div style={{fontWeight:600}}>{order.id}</div>
                <div style={{fontSize:'0.9rem', color:'var(--text-muted)'}}>{order.date}</div>
              </div>
              <div style={{textAlign:'right', marginRight:'1rem'}}>
                <div style={{fontWeight:600}}>{order.qty} Bottles</div>
                <div style={{fontSize:'0.9rem'}}>${order.total.toFixed(2)} Total</div>
              </div>
              <div>
                <span className={`order-badge badge-${order.status}`}>
                  {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
