import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Reg from "./Reg"
import Home from "./Home"

function App() {
  return (
    <BrowserRouter>
      <div style={{ padding: 16 }}>
        <nav style={{ marginBottom: 16 }}>
          <Link to="/" style={{ marginRight: 12 }}>Home</Link>
          <Link to="/reg">Register</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/reg" element={<Reg/>} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App