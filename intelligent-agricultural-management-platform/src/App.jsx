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
import Sensor from "./components/Sensor/Sensor";
import { createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import { greenishblue } from "./config";
import CreateWorker from "./components/Worker/CreateWorker";
import WorkerManagement from "./components/WorkerManagement/WorkerManagement";
import TaskAnalytics from "./components/WorkerManagement/TaskAnalytics";
const theme = createTheme({
  palette: {
    primary: {
      main: greenishblue,
    },
  },
});
function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/create-account" element={<Register />} />
            <Route path="/zone-management" element={<ZoneManagement />} />
            <Route path="/worker-management" element={<WorkerManagement />} />
            <Route path="/task-analytics" element={<TaskAnalytics />} />
            <Route path="/farm-management" element={<FarmMangement />} />
            <Route path="/zone-sensor-action" element={<ZoneSensor />} />
            <Route path="/create-worker" element={<CreateWorker />} />
            <Route path="/create-sensor" element={<Sensor />} />
            <Route path="*" element={<h1>Coming Soon...</h1>} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
