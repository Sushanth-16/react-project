import { BrowserRouter, Routes, Route } from "react-router-dom";
import Reg from "./Reg"
import Home from "./Home"
function App() {
  return (
    <>
      <h1>Iam App</h1>
      <BrowserRouter>
      <Routes>
          <Route path="/reg" element={<Reg/>}/>
          <Route path="/h" element={<Home/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}
export default App