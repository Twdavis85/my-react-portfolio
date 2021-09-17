import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Navbar from "./components/Header";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
        <Navbar />
          <Route exact path="/" component={About} />
          <Route exact path="/about" component={About} />
          <Route exact path="/portfolio" component={Portfolio} />
        <Footer />
    </Router>
  );
}

export default App;
