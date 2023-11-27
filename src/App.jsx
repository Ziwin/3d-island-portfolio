import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import { Navbar } from "./components";
import { Home, About, Project } from "./pages";

function App() {
  return (
    <main className="bg-slate-300/20">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/*"
            element={
              <>
                <Routes>
                  <Route path="/about" element={<About />} />
                  <Route path="/projects" element={<Project />} />
                </Routes>
              </>
            }
          />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
