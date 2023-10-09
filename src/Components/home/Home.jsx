import React from "react";
import { Routes, Route } from "react-router-dom";
import Majbury from "../majburiy/Majbury";
import Ixtiyoriy from "../ixtiyoriy/Ixtiyoriy";
import Travel from "../travel/Travel";
import Buy from "../buy/Buy";
import Buy2 from "../buy/Buy2";
import data from "../../assets/data/products.json";
const Home = () => {
  console.log(data);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Majbury />} />
        <Route path="/ixtiyoriy" element={<Ixtiyoriy />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/buying" element={<Buy />} />
        <Route path="/buyin2" element={<Buy2 />} />
      </Routes>
    </div>
  );
};

export default Home;
