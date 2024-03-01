import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import Home from './home';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/#/rajorpay" element={<Layout />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
