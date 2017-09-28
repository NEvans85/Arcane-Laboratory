import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar/nav_bar_container";
import SessionForm from "./MainContent/Session/session_form_container";
import CardSearch from "./MainContent/CardSearch/card_search_container";
import DeckView from "./MainContent/DeckView/deck_view_container";
import DeckIndex from "./MainContent/DeckIndex/deck_index_container";
import UserDeckIndex from "./MainContent/DeckIndex/UserDeckIndex/user_deck_index_container";
import DeckEditor from "./MainContent/DeckEditor/deck_editor_container";
import Footer from "./Footer/footer_container";

const App = () => (
  <div className="body_root">
    <header>
      <Route path="/" component={NavBar} />
    </header>
    <div className="maincontent">
      <Route path="/login" component={SessionForm} />
      <Route path="/signup" component={SessionForm} />
      <Route path="/cards" component={CardSearch} />
      <Route exact path="/decks" component={DeckIndex} />
      <Route path="/users/:userId/decks" component={UserDeckIndex} />
      <Route exact path="/decks/:deckId" component={DeckView} />
      <Route path="/decks/:deckId/edit" component={DeckEditor} />
    </div>
    <footer>
      <Route path="/" component={Footer} />
    </footer>
  </div>
);

export default App;
