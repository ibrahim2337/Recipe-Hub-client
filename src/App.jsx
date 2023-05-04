import { Outlet } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";



function App() {
  return (
      <div>
          <Navbar />
          <div className="min-h-screen">
              <Outlet />
          </div>
          <Footer />
      </div>
  );
}

export default App;
