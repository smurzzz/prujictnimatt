import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Brands from "./pages/Brands";
import Contacts from "./pages/Contacts";
import Mens from "./components/Mens";
import Womens from "./components/Womens";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="brands" element={<Brands />} />
          <Route path="brands/mens" element={<Mens />} />
          <Route path="brands/womens" element={<Womens />} />
          <Route path="contacts" element={<Contacts />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
