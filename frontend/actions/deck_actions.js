import * as DeckAPIUtil from "../util/deck_api_util";

export const RECEIVE_DECK = "RECEIVE_DECK";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const RECEIVE_DECK_ERRORS = "RECEIVE_DECK_ERRORS";
export const RESET_CURRENT_DECK = "RESET_CURRENT_DECK";

const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
});

const receiveDecks = (decks, category) => ({
  type: RECEIVE_DECKS,
  decks,
  category
});

const receiveErrors = errors => ({
  type: RECEIVE_DECK_ERRORS,
  errors
});

export const resetCurrentDeck = () => ({
  type: RESET_CURRENT_DECK
});

export const postDeck = creator_id => dispatch =>
  DeckAPIUtil.postDeck(creator_id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );

export const deleteDeck = id => dispatch =>
  DeckAPIUtil.deleteDeck(id).then(
    deck => dispatch(fetchUserDecks(deck.creator_id)),
    errs => dispatch(receiveErrors(errs))
  );

export const updateDeck = (deck, update_type, api_id = 0) => dispatch =>
  DeckAPIUtil.updateDeck(deck, update_type, api_id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );

export const fetchDecks = category => dispatch =>
  DeckAPIUtil.fetchDecks(category).then(
    decks => dispatch(receiveDecks(decks, category)),
    errs => dispatch(receiveErrors)
  );

export const fetchUserDecks = userId => dispatch =>
  DeckAPIUtil.fetchUserDecks(userId).then(
    decks => dispatch(receiveDecks(decks, "user")),
    errs => dispatch(receiveErrors)
  );

export const fetchDeck = deckId => dispatch =>
  DeckAPIUtil.fetchDeck(deckId).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );
