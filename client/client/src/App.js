import "./App.css";
import { Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import { useEffect } from "react";
import Login from "./components/login";
import Homepage from "./components/homepage";
import CpuUsageTable from "./components/cpuUsageView";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/cpuUsage" element={<CpuUsageTable />} />
      </Routes>
    </div>
  );
};

export default App;
