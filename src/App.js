import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import styled from "@emotion/styled";

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <img src={logo} className="app-logo" alt="logo" />
        <p>
          Edit <code>src/app.js</code> and save to reload.
        </p>
        <a
          className="app-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Test>Test</Test>
      </header>
    </div>
  );
}

export default App;

const Test = styled.div`/*  */
display: flex;
justify-content: center;
align-items: center;
min-height: 100vh;
font-size: calc(10px + 2vmin);
color: white;
background-color: #282c34;
flex-direction: column;

.asd {
  min-height: 100vh;
  font-size: calc(10px + 2vmin);
  color: white;
  background-color: #282c34;
  flex-direction: column;

  &_sajd {
    color: white;
    background-color: #282c34;
    flex-direction: column;
  }
}
`;
