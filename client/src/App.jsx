import "./App.css";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Home from "../components/Home";
import Events from "../components/Events";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../components/Login";
import Signup from "../components/Signup";
import Register from "../components/Register";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/services" element={<Services />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Signup />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/event-registration" element={<Register />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
