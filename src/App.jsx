import { useEffect, useRef } from "react";
import flySound from "./assets/img/fly.mp3";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";

function App() {
  return (
    <div>
      <Header
      // scrollTo={(id) => {
      //   const el = document.getElementById(id);
      //   if (el) el.scrollIntoView({ behavior: "smooth" });
      // }}
      />

      <AppRoutes />

      <Footer />
      {/* <div className="plane">✈️</div> */}
    </div>
  );
}

export default App;
