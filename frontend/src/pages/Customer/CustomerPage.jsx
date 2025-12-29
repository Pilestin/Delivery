import React, { useState } from "react";
import CustomerDashboard from "./CustomerDashboard";
import CustomerOrders from "./CustomerOrders";
import CustomerProfile from "./CustomerProfile";
import "../../styles/Customer.css";

export default function CustomerPage() {
  const [activeTab, setActiveTab] = useState("dashboard");

  const handleLogout = () => {
    // In a real app, clear tokens here
    window.location.href = "/";
  };

  const renderContent = () => {
    switch (activeTab) {
      case "dashboard":
        return <CustomerDashboard />;
      case "orders":
        return <CustomerOrders />;
      case "profile":
        return <CustomerProfile />;
      default:
        return <CustomerDashboard />;
    }
  };

  return (
    <div className="customer-layout">
      {/* Sidebar Navigation */}
      <aside className="customer-sidebar">
        <div className="sidebar-logo">Nisay</div>
        
        <nav className="sidebar-menu">
          <div 
            className={`menu-item ${activeTab === "dashboard" ? "active" : ""}`}
            onClick={() => setActiveTab("dashboard")}
          >
            <span>🛍️</span> New Order
          </div>
          <div 
            className={`menu-item ${activeTab === "orders" ? "active" : ""}`}
            onClick={() => setActiveTab("orders")}
          >
            <span>📦</span> My Orders
          </div>
          <div 
            className={`menu-item ${activeTab === "profile" ? "active" : ""}`}
            onClick={() => setActiveTab("profile")}
          >
            <span>👤</span> Profile
          </div>
        </nav>

        <div className="sidebar-footer">
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="customer-content">
        {renderContent()}
      </main>
    </div>
  );
}
