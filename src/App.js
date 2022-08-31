import React from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div style={{ fontWeight: "bold", fontSize: "25px" }}>
        CUSTOMER RELATIONSHIP MANAGEMENET
      </div>
      <Carousel />
      <Jumbotron />
      <br />
      <br />
      <br />
      <Footer />
    </div>
  );
}

export default App;
