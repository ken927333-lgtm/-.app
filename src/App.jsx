import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage.jsx";
import WeeklyPage from "./WeeklyPage.jsx";
import { DataProvider } from "./data.jsx";

function App() {
  return (
    <DataProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/weekly" element={<WeeklyPage />} />
      </Routes>
    </DataProvider>
  );
}

export default App;

/*cd "C:\Users\user\OneDrive\Desktop\programing\js 学習\React\my-app" */
