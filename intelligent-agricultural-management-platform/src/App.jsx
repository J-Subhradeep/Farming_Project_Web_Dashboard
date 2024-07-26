import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing Components
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ZoneManagement from "./components/ZoneManagement/Zonemangement";
import FarmMangement from "./components/FarmManagement/FarmMangement";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/create-account" element={<Register />} />
          <Route path="/zone-management" element={<ZoneManagement />} />
          <Route path="/farm-management" element={<FarmMangement />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
