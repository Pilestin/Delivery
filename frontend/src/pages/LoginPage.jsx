import React, { useState } from "react";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
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
      alert("Unauthorized");
    }
  };

  return (
    <div style={{ padding: 50 }}>
      <h2>DeliverOps Login</h2>

      <input
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <br />

      <input
        placeholder="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <br />

      <button onClick={handleLogin}>Login</button>

      <p onClick={()=> window.location.href="/register"} 
        style={{color:"blue",cursor:"pointer"}}>
        Register new account
      </p>

    
    </div>
  );
}

export default LoginPage;
