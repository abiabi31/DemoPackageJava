import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Header from "./pages/header/Header";
import Footer from "./pages/footer/Footer";
import GlobalGlobeBackground from "./utils/GlobalGlobeBackground/GlobalGlobeBackground";
import LoadingScreen from "./pages/LoadingScreen/LoadingScreen";

function App() {
  return (
    <div className="app-shell">
      <LoadingScreen />
      <GlobalGlobeBackground />
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
