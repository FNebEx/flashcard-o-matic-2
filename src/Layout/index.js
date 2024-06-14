import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import { Routes, Route } from "react-router-dom";
import DeckList from "../Deck/DeckList";
import AddDeck from "../Deck/AddDeck";
import DeckDetailsPage from "../Deck/DeckDetailsPage";
import DeckEditPage from "../Deck/DeckEditPage";

function Layout() {
  return (
    <>
      <Header />
      <div className="container">
        {/* TODO: Implement the screen starting here */}
        <Routes>
          <Route path="/" element={<DeckList />} />
          <Route path="/decks/new" element={<AddDeck />} />
          <Route path="/decks/:deckId" element={<DeckDetailsPage />} />
          <Route path="/decks/:deckId/edit" element={<DeckEditPage />} />
          <Route path="/decks/:deckId/study" element={"DeckStudy"} />
          <Route path="/decks/:deckId/cards/new" element={"NewCard"} />
          <Route
            path="/decks/:deckId/cards/:cardId/edit"
            element={"EditCard"}
          />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </>
  );
}

export default Layout;
