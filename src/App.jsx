import { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home";
import NameInput from "./components/NameInput";

function App() {
  

  return (
    <Router>
      <Routes>
        <Route path="/" element = {<Home/>}></Route>
        <Route path="/name-input" element={<NameInput/>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
