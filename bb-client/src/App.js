import { BrowserRouter, Routes, Route } from "react-router-dom";
import WelcomePage from "../src/components/WelcomePage/WelcomePage";
import LoginPage from "../src/components/LoginPage/LoginPage";
import SignupPage from "../src/components/SignupPage/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WelcomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
