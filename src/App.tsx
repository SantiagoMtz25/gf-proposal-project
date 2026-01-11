import { BrowserRouter, Routes, Route } from "react-router-dom";
import FlowerSides from "./components/flower-sides";
import LandingPage from "./pages/landing-page";
import PromptsPage from "./pages/prompts-page";
import RecordarPage from "./pages/recordar-page";
import SuccessPage from "./pages/success-page";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-full flex flex-col items-center justify-center bg-linear-to-br from-rose-50 via-amber-50 to-orange-100 relative overflow-hidden">
        <FlowerSides />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/prompts" element={<PromptsPage />} />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/recordar" element={<RecordarPage />} />
          <Route path="*" element={<LandingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
