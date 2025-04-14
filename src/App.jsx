import React from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import ServicesPage from "./pages/ServicesPage";
import { Route, Routes } from "react-router";
import ContactUs from "./pages/ContactUs";
import BlogPage from "./pages/BlogPage";
import ReactComponent from './components/Blog/ReactComponent'
import FaqsPage from "./pages/FaqsPage";

const App = () => {
  return (
    <div>
      <Layout>
      <Routes>
        <Route index element={<HomePage />} />
        <Route path="/services/:title" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUs/>}/>
        <Route path="/blog" element={<BlogPage/>}/>
        <Route path="/blog-detail" element={<ReactComponent/>}/>
        <Route path="/faqs" element={<FaqsPage/>}/>
        
      
      </Routes >
      </Layout>
        {/* <ServicesPage/> */}
    </div>
  );
};
  
export default App;
