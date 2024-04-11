import "./App.css";
import AllRoute from "./components/Allroutes";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <AllRoute />
        <Footer />
      </div>
    </>
  );
}

export default App;
