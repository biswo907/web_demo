import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout';
import Home from './home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rajorpay" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
