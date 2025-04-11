import React from "react";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <div>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default App;
