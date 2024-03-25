import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Starships from "./pages/Starships";
import People from "./pages/People";
import Species from "./pages/Species";

function App() {
  return (
    <div className="h-[100vh]">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard/>}></Route>
          <Route path="/people" element={<People/>}></Route>
          <Route path="/starships" element={<Starships/>}></Route>
          <Route path="/species" element={<Species />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
