import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Search from "./components/Search";
import Header from "./components/Header";
import Footer from "./components/footer";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Search />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
