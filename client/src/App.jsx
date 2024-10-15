import Home from "./components/blog/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/Navbar";
import Footer from "./components/footer/Footer";
import Signup from "./components/user/Signup";
import Signin from "./components/user/Signin";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Router>
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/signin" element={<Signin />} />
          </Routes>
        </div>

        <Footer />
      </Router>

      <ToastContainer />
    </div>
  );
}

export default App;
