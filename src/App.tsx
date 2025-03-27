import { useLocation } from "react-router-dom";
import "./App.css";
import Footer from "./layouts/Footer";
import Navbar from "./layouts/Navbar";
import Router from "./Router";

function App() {
  const location = useLocation();

  return (
    <div className="relative flex flex-col justify-center h-screen overflow-hidden">
      <Navbar />
      <div className="container m-auto p-4">
        <Router location={location} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
