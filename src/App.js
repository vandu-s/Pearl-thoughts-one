import React from "react";
import { Routes, Route } from "react-router-dom";
import Filter from "./pages/Filter";
import Selection from "./pages/Selection";
function App() {
  return (
    <>
      <div className="App">
        <Routes>
          <Route path="/" element={<Filter />} />
          <Route path="/selection" element={<Selection />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
