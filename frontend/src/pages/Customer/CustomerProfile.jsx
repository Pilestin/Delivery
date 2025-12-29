import React from "react";

export default function CustomerProfile() {
  // Static Data for now
  const user = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 555 0123",
    address: "123 Water Street, Hydration City, HC 10101"
  };

  return (
    <div>
      <div className="page-header">
        <h1>My Profile</h1>
        <p>Manage your personal information.</p>
      </div>

      <div className="card">
        <div style={{display:'flex', alignItems:'center', marginBottom:'2rem'}}>
          <div style={{
            width:'80px', height:'80px', borderRadius:'50%', 
            backgroundColor:'#e2e8f0', display:'flex', 
            alignItems:'center', justifyContent:'center',
            fontSize:'2rem', marginRight:'1.5rem'
          }}>
            👤
          </div>
          <div>
            <h2 style={{fontSize:'1.5rem'}}>{user.name}</h2>
            <p style={{color:'var(--text-muted)'}}>Customer Account</p>
          </div>
        </div>

        <div className="form-grid">
          <div className="form-group">
            <label>Full Name</label>
            <input type="text" value={user.name} readOnly style={{backgroundColor:'#f8fafc'}} />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input type="email" value={user.email} readOnly style={{backgroundColor:'#f8fafc'}} />
          </div>
          <div className="form-group">
            <label>Phone Number</label>
            <input type="text" value={user.phone} readOnly style={{backgroundColor:'#f8fafc'}} />
          </div>
          <div className="form-group">
            <label>Delivery Address</label>
            <input type="text" value={user.address} readOnly style={{backgroundColor:'#f8fafc'}} />
          </div>
        </div>

        <button className="auth-btn" style={{width:'auto'}}>
          Edit Profile
        </button>
      </div>
    </div>
  );
}
