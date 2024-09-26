import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import News from "../pages/News";
import Login from '../pages/Login';

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<News />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
