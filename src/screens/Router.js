import Home from "../screens/Home/Home";
import Licor from "./Licor/Licor";
import Nav from "../components/UI/Nav";

import { BrowserRouter, Routes, Route } from "react-router-dom";

const Router = () => {
  return (
    <BrowserRouter>
        <Nav/>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category/:e" element={<Home />}></Route>
        <Route path="/licor/:idLicor" element={<Licor />}></Route>
        <Route path="/*" element={<div>404 not found</div>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;