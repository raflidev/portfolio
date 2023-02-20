import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import Project from "./pages/Project";
import ProjectId from "./pages/ProjectId";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project" element={<Project />} />
        <Route path="/project/{id}" element={<ProjectId />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;