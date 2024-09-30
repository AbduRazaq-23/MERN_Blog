import Home from "./components/blog/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/navbar";
import Footer from "./components/footer/Footer";
import Signup from "./components/user/Signup";
import Signin from "./components/user/Signin";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
