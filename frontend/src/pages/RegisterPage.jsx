import React, { useState } from "react";

export default function RegisterPage() {
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhone] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    const res = await fetch("http://localhost:4000/api/auth/register", {
      method:"POST",
      headers:{ "Content-Type":"application/json" },
      body: JSON.stringify({ full_name, email, phone_number, password })
    });
    const data = await res.json();
    if(data.success){
      alert("Kayıt başarılı, giriş sayfasına yönlendiriliyorsunuz.");
      window.location.href = "/";
    }
  }

  return (
    <div style={{padding:50}}>
      <h2>Register</h2>

      <input placeholder="Full Name" value={full_name} onChange={e=>setFullName(e.target.value)} /><br/><br/>
      <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} /><br/><br/>
      <input placeholder="Phone Number" value={phone_number} onChange={e=>setPhone(e.target.value)} /><br/><br/>
      <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} /><br/><br/>

      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
