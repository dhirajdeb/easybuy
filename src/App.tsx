import { Outlet } from "react-router-dom";

import Header from "./componets/header/Header";
import Footer from "./componets/footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="container">
      <Header />
      <div id="main">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}

export default App;
