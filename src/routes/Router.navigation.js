import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import {
  Login,
  AppPresentation,
  Dashboard,
  DataAnalytics,
  Reporting,
  DataShaColl,
  DeviceManagement,
  Alert,
  Settings,
  Help,
} from "../pages";



const Routers = () => {
  const [scrollY, setScrollY] = useState(0);

  const logit = () => {
    setScrollY(window.pageYOffset);
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener("scroll", logit);
    };
    watchScroll();
    return () => {
      window.removeEventListener("scroll", logit);
    };
  }, [scrollY]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/presentation" element={<AppPresentation />} />
      <Route path="/monitoring/dashbord" element={<Dashboard />} />
      <Route path="/monitoring/data-analytics" element={<DataAnalytics />} />
      <Route path="/monitoring/reporting" element={<Reporting />} />
      <Route path="/monitoring/data-sharing-collaboration" element={<DataShaColl />} />
      <Route path="/monitoring/device-management" element={<DeviceManagement />} />
      <Route path="/monitoring/alert" element={<Alert />} />
      <Route path="/monitoring/settings" element={<Settings />} />
      <Route path="/monitoring/help" element={<Help />} />
    </Routes>
  );
};

export default Routers;
