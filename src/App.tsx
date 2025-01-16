import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Router from "./Router";

function App() {
  const location = useLocation();
  const { t } = useTranslation();
  console.log(12121212122, t("language"));
  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <Navbar />

      <Router location={location} />

      <Footer />
    </div>
  );
}

export default App;
