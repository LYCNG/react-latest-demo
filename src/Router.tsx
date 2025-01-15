import React from "react";
import { Location, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
// import Dashboard from '../pages/Dashboard';
// import RevenuePage from '../pages/RevenuePage';
// import Actual from '../pages/Actual';
// import Management from '../pages/Management';
// import EntirePage from '../pages/EntirePage';
// import Login from '../pages/Login';
// import ProfitEfficient from '../pages/ProfitEfficient';
// import CreateProject from '../pages/CreateProject';
// import Test from '../pages/Test';

interface RouterProps {
  location: Location;
}

const Router: React.FC<RouterProps> = ({ location }) => (
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<LoginPage />} />
  </Routes>
);

export default Router;
