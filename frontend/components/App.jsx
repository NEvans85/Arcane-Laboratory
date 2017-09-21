import React from "react";
import SessionForm from "./MainContent/Session/session_form_container";
import { Route } from "react-router-dom";

const App = () => (
  <div>
    <header>
      <h1>Arcane Laboratory</h1>
    </header>
    <div className="maincontent">
      <Route path="/login" component={SessionForm} />
      <Route path="/signup" component={SessionForm} />
    </div>
    <footer>
      <p>Temporary footer</p>
    </footer>
  </div>
);

export default App;
