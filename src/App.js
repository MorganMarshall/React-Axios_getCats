import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import "bulma/css/bulma.css";
import Randomcats from "./components/Randomcats";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <section className="hero is-danger is-bold">
            <div className="hero-body">
              <div className="container">
                <h1 className="title">Cat Pictures</h1>
                <h2 className="subtitle">Random Cats</h2>
              </div>
            </div>
          </section>
        </header>
        <section className="container">
          <br />
          <br />
          <h3>Random cats using Axios.js</h3>
          <br />
          <div style={{ paddingTop: "20px" }}>
            <Randomcats />
          </div>
        </section>
        <br />
        <br /> <br />
        <br />
        <br />
        <Footer />
      </div>
    );
  }
}

export default App;
