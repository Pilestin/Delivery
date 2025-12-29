import React, { useState } from "react";
import "../styles/Auth.css";

export default function RegisterPage() {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {
    setLoading(true);
    try {
      const res = await fetch("http://localhost:4000/api/auth/register", {
        method:"POST",
        headers:{ "Content-Type":"application/json" },
        body: JSON.stringify({ full_name, email, phone_number, password })
      });
      const data = await res.json();
      if(data.success){
        alert("Registration successful! Redirecting to login...");
        window.location.href = "/";
      } else {
        alert(data.message || "Registration failed.");
      }
    } catch(err) {
      console.error(err);
      alert("An error occurred.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="auth-container">
      {/* Left Side: Branding */}
      <div className="auth-left">
        <div className="auth-content">
          <div className="brand-title">Join Us</div>
          <div className="brand-desc">
            Create an account to start managing your deliveries efficiently.
          </div>
        </div>
      </div>

      {/* Right Side: Register Form */}
      <div className="auth-right">
        <div className="auth-form-box">
          
          <div className="form-header">
            <h2>Create Account</h2>
            <p>Enter your information below</p>
          </div>

          <div className="form-group">
            <label>Full Name</label>
            <input 
              placeholder="John Doe" 
              value={full_name} 
              onChange={e=>setFullName(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label>Email</label>
            <input 
              placeholder="name@company.com" 
              value={email} 
              onChange={e=>setEmail(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input 
              placeholder="+1 234 567 890" 
              value={phone_number} 
              onChange={e=>setPhone(e.target.value)} 
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input 
              type="password"
              placeholder="••••••••" 
              value={password} 
              onChange={e=>setPassword(e.target.value)} 
            />
          </div>

          <button className="auth-btn" onClick={handleRegister} disabled={loading}>
            {loading ? "Registering..." : "Register"}
          </button>

          <div className="auth-footer">
            Already have an account?{" "}
            <span 
              className="link-text"
              onClick={() => window.location.href = "/"}
            >
              Sign in
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
