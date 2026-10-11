import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Success from "./pages/Success";

const App = () => {
  return (
    <>
      <Toaster />
      <Router>
        <Routes>
          <Route path="/" element={<div><Home></Home></div>} />
          <Route path="/success" element={<div><Success></Success></div>} />
          <Route path="*" element={<div><NotFound></NotFound></div>} />
        </Routes>
        <Toaster />
      </Router>
    </>
  );
};

export default App;
