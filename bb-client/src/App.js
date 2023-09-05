import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Loading from './components/Loading/Loading'
import Swipe from "./components/Swipe/Swipe";
// import Match from "./components/Match/Match";
import Setting from "./components/Setting/Setting";
import Home from "./pages/Home/Home";
import Onboard from "./pages/Onboard/Onboard";
import Dashboard from "./pages/Dashboard/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Onboard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/loading" element={<Loading />} />
        <Route path="/swipe" element={<Swipe />} />
        {/* <Route path="/swipe/message" element={<Match />} /> */}
        <Route path="/settings" element={<Setting />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
