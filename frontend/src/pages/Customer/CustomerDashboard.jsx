import React, { useState } from "react";

// Mock Data for products
const PRODUCTS = [
  { id: 1, name: "19L Carboy", price: 60.0, category: "Returnable", icon: "🚰" },
  { id: 2, name: "5L Bottle", price: 25.0, category: "PET", icon: "🧴" },
  { id: 3, name: "Glass Carboy", price: 80.0, category: "Glass", icon: "🏺" },
  { id: 4, name: "0.5L x 12 Pack", price: 45.0, category: "Pack", icon: "📦" },
];

export default function CustomerDashboard() {
  // State
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [notes, setNotes] = useState("");

  // Metrics (Mock)
  const pendingOrders = 2;
  const totalOrders = 15;

  const handleIncrease = () => setQuantity(q => q + 1);
  const handleDecrease = () => setQuantity(q => q > 1 ? q - 1 : 1);

  const totalAmount = (quantity * selectedProduct.price).toFixed(2);
  const today = new Date().toISOString().split("T")[0];

  const handlePlaceOrder = () => {
    if (!date || !startTime || !endTime) {
      alert("Please select a valid delivery date and time slot.");
      return;
    }
    const orderDetails = {
      product: selectedProduct.name,
      qty: quantity,
      date,
      time: `${startTime} - ${endTime}`,
      total: totalAmount,
      notes
    };
    alert("Order Placed (Mock):\n" + JSON.stringify(orderDetails, null, 2));
  };

  return (
    <div>
      <div className="page-header">
        <h1>Dashboard</h1>
        <p>Welcome back! Ready to order?</p>
      </div>

      {/* Metrics Section */}
      <div className="metrics-grid">
        <div className="metric-card">
          <span className="metric-title">Pending Orders</span>
          <span className="metric-value">{pendingOrders}</span>
        </div>
        <div className="metric-card">
          <span className="metric-title">Total Orders</span>
          <span className="metric-value">{totalOrders}</span>
        </div>
      </div>

      {/* Product Selection */}
      <h3 style={{marginBottom:'1rem'}}>1. Select Product</h3>
      <div className="product-grid">
        {PRODUCTS.map(product => (
          <div 
            key={product.id} 
            className={`product-card ${selectedProduct.id === product.id ? 'selected' : ''}`}
            onClick={() => setSelectedProduct(product)}
          >
            <span className="product-icon">{product.icon}</span>
            <span className="product-name">{product.name}</span>
            <span className="product-price">${product.price}</span>
            <div style={{fontSize:'0.8rem', color:'var(--text-muted)'}}>{product.category}</div>
          </div>
        ))}
      </div>

      {/* Order Form */}
      <h3 style={{marginBottom:'1rem'}}>2. Order Details</h3>
      <div className="card">
        
        {/* Quantity (Animated + -) */}
        <div className="quantity-control">
          <button className="qty-btn" onClick={handleDecrease}>−</button>
          <div className="qty-display">{quantity}</div>
          <button className="qty-btn" onClick={handleIncrease}>+</button>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Delivery Date</label>
            <input 
              type="date" 
              min={today}
              value={date} 
              onChange={e=>setDate(e.target.value)} 
            />
          </div>

          <div className="form-group" style={{display:'flex', gap:'1rem'}}>
             <div style={{flex:1}}>
               <label>Start Time</label>
               <input 
                 type="time" 
                 value={startTime} 
                 onChange={e=>setStartTime(e.target.value)} 
               />
             </div>
             <div style={{flex:1}}>
               <label>End Time</label>
               <input 
                 type="time" 
                 value={endTime} 
                 onChange={e=>setEndTime(e.target.value)} 
               />
             </div>
          </div>
        </div>

        <div className="form-group">
          <label>Order Note (Optional)</label>
          <textarea 
            className="notes-area"
            placeholder="e.g. Please leave at the door..."
            value={notes} 
            onChange={e=>setNotes(e.target.value)} 
          />
        </div>

        <div className="info-display">
          <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div>
              <h3>Total Amount</h3>
              <p style={{color:'var(--text-muted)'}}>
                {quantity} x {selectedProduct.name} (${selectedProduct.price})
              </p>
            </div>
            <div className="price-tag">
              ${totalAmount}
            </div>
          </div>
        </div>

        <button 
          className="auth-btn" 
          style={{marginTop:'2rem'}}
          onClick={handlePlaceOrder}
        >
          Confirm Order
        </button>
      </div>
    </div>
  );
}
