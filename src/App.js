import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Starships from "./pages/Starships";
import People from "./pages/People";
import Species from "./pages/Species";
import Cover from "./pages/Cover";
import DeathStar from "./pages/DeathStar";
import Shank from "./pages/Shank";
import Wookie from "./pages/Wookie";

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
          <Route path="/cover" element={<Cover/>}></Route>
          <Route path="/deathstar" element={<DeathStar/>}></Route>
          <Route path="/shank" element={<Shank/>}></Route>
          <Route path="/wookie" element={<Wookie/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
