import React from "react";
import SessionForm from "./Session/session_form_container";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <h1>Arcane Laboratory</h1>
    </header>
    <div className="maincontent">
      <SessionForm />
    </div>
    <footer>
      <p>Temporary footer</p>
    </footer>
  </div>
);

export default App;
