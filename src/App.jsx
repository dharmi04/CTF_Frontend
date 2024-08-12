import Flag1 from "./Pages/Flag1";
import Flag2 from "./Pages/Flag2";
import Flag3 from "./Pages/Flag3";
import Flag4 from "./Pages/Flag4";
import Flag5 from "./Pages/Flag5";
import Home from "./Pages/Home"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
  <>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/flag1" element={<Flag1 />} />
      <Route path="/flag2" element={<Flag2 />} />
      <Route path="/flag3" element={<Flag3 />} />
      <Route path="/flag4" element={<Flag4 />} />
      <Route path="/flag5" element={<Flag5 />} />
    </Routes>
  </Router>
  </>
  )
}

export default App
