import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import WeeklyPage from "./WeeklyPage.jsx";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/weekly" element={<WeeklyPage />} />
    </Routes>
  );
}

export default App;
