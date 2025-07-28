import { HashRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import MissionLogDetailPage from "./components/MissionDetailPage";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} />
        <Route path="/mission/:id" element={<MissionLogDetailPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
