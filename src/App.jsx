import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import GlobalGlobeBackground from "./utils/GlobalGlobeBackground/GlobalGlobeBackground";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen";
import logo from "./assets/img/newlogo.png";

function App() {
  return (
    <div className="app-shell">
      <LoadingScreen />
      <div className="globe-container">
        <GlobalGlobeBackground />
      </div>
      <Header
      // scrollTo={(id) => {
      //   const el = document.getElementById(id);
      //   if (el) el.scrollIntoView({ behavior: "smooth" });
      // }}
      />

      <main className="app-main">
        <AppRoutes />
      </main>
      <Footer />
      {/* <div className="plane">✈️</div> */}
    </div>
  );
}

export default App;
