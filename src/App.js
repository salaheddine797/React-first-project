import React from "react";
import './App.css';
import NavBar from "./views/NavBar/NavBar";
import Header from "./views/Header/Header";
import Features from "./views/Features/Features";





function App(){

return(
  <div className="container">
    <nav>
    <NavBar />
    </nav>
    <section>
    <Header />
    </section>
    <div>
      <Features />
    </div>
  </div>
);




}

export default App;
