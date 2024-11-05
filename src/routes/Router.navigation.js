import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";

import {
  Login,
  AppPresentation,
  Dashboard,
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
    </Routes>
  );
};

export default Routers;
