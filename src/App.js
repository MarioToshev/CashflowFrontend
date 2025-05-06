import React, { useState, useEffect } from "react";
import Dashboard from "./pages/Dashboard";
import StockPage from "./pages/StockPage";
import Sidenav from "./navigation/Sidenav";
import SearchBar from "./components/SearchBar";
import { Route, Routes } from "react-router-dom";
import { Box, Container } from "@mui/material";
import LoginForm from "./pages/LoginForm";
import RegisterForm from "./pages/RegisterForm";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [selectedCompany, setSelectedCompany] = useState();
  return (
    <>
      <Sidenav />
      <Box sx={{ mt: 10, ml: 40 }}>
        <SearchBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stocks/:ticker" element={<StockPage />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </Box>
      <ToastContainer />
    </>
  );
}
export default App;
