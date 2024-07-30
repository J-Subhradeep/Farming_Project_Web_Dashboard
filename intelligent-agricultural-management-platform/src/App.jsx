import { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Importing Components
import Home from "./components/home/Home";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import ZoneManagement from "./components/ZoneManagement/Zonemangement";
import FarmMangement from "./components/FarmManagement/FarmMangement";
import ZoneSensor from "./components/ZoneSensorActionPage/ZoneSensor";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { greenishblue } from "./config";
const theme = createTheme({
  palette: {
    primary: {
      main: greenishblue
    }
  }
});
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/about" element={<About />} /> */}
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<Register />} />
            <Route path="/zone-management" element={<ZoneManagement />} />
            <Route path="/farm-management" element={<FarmMangement />} />
            <Route path="/zone-sensor-action" element={<ZoneSensor />} />
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
