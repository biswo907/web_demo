import { HashRouter, Routes, Route } from "react-router-dom";
import Home from './home';
import { RajorpayPhotographer } from "./rajorpay_photographer";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rajorpay" element={<RajorpayPhotographer />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
