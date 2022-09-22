import "./App.css";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Container from "./components/Container/Container";
import RightNavbar from "./components/RightNavbar/RightNavbar";
import Dashboard from "./components/Dashboard/Dashboard";
// import Analytics from "./components/Analytics/Analytics";
import Campaings from "./components/Campaigns/Campaings";
import Team from "./components/Team/Team";

import NavContext from "./Context/NavContext";
function App() {
  const [nav, setNav] = useState(false);
  const value = { nav, setNav };

  return (
    <div className="App">
      <NavContext.Provider value={value}>
        <Navbar />
        <Container
          stickyNav={<RightNavbar />}
          content={
            <Routes>
              <Route path="*" element={<main>NOT FOUND</main>} />
              <Route path="/" element={<Dashboard />} />
              {/* <Route path="/analytics" element={<Analytics />} /> */}
              <Route path="/campaings" element={<Campaings />} />
              <Route path="/team" element={<Team />} />
              <Route path="/messages" element={<main>Messages</main>} />
            </Routes>
          }
        />
      </NavContext.Provider>
    </div>
  );
}

export default App;
