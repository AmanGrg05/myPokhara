import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/explore" element={<Explore />} />
    </Routes>
  );
};

export default App;
