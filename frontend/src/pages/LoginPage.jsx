import React, { useState } from "react";
import "../styles/Auth.css";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (data.role === "admin") {
        window.location.href = "/admin";
      } else if (data.role === "driver") {
        window.location.href = "/driver";
      } else if (data.role === "customer") {
        window.location.href = "/customer";
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login error:", error);
      alert("An error occurred during login.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {/* Left Side: Branding / Visuals */}
      <div className="auth-left">
        <div className="auth-content">
          <div className="brand-title">Nisay</div>
          <div className="brand-desc">
            Next-Gen Fleet Management & Delivery Optimization Platform
          </div>
        </div>
      </div>

      {/* Right Side: Login Form */}
      <div className="auth-right">
        <div className="auth-form-box">
          
          <div className="form-header">
            <h2>Welcome Back</h2>
            <p>Please enter your details to sign in.</p>
          </div>

          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              placeholder="name@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="auth-btn" onClick={handleLogin} disabled={loading}>
            {loading ? "Signing in..." : "Sign in"}
          </button>

          <div className="auth-footer">
            Don't have an account?{" "}
            <span 
              className="link-text"
              onClick={() => window.location.href = "/register"}
            >
              create an account
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}

export default LoginPage;
