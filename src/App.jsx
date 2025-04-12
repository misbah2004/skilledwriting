import React from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import { Route, Routes } from "react-router";

const App = () => {
  return (
    <div>
      <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/services/:title" element={<ServicesPage />} />
      
      </Routes>
      </Layout>
        {/* <ServicesPage/> */}
    </div>
  );
};

export default App;
