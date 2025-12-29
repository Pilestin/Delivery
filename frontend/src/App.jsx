import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/Admin/AdminPage";
import DriverPage from "./pages/Driver/DriverPage";
import CustomerPage from "./pages/Customer/CustomerPage";
import RegisterPage from "./pages/RegisterPage";


function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/driver" element={<DriverPage />} />
        <Route path="/customer" element={<CustomerPage />} />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
