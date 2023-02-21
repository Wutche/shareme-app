import { Routes, Route } from "react-router-dom";
import Home from "./container/Home";
import Login from "./container/Login";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route exact path="*" element={<Home />} />
    </Routes>
  );
}

export default App;
