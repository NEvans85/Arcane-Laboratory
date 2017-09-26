import * as DeckAPIUtil from "../util/deck_api_util";

export const RECEIVE_DECK = "RECEIVE_DECK";
export const RECEIVE_DECKS = "RECEIVE_DECKS";
export const RECEIVE_DECK_ERRORS = "RECEIVE_DECK_ERRORS";

const receiveDeck = deck => ({
  type: RECEIVE_DECK,
  deck
});

const receiveDecks = decks => ({
  type: RECEIVE_DECKS,
  decks
});

const receiveErrors = errors => ({
  type: RECEIVE_DECK_ERRORS,
  errors
});

export const postDeck = creator_id => dispatch =>
  DeckAPIUtil.postDeck(creator_id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );

export const deleteDeck = id => dispatch =>
  DeckAPIUtil.deleteDeck(id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );

export const updateDeck = (deck, update_type, api_id = 0) => dispatch =>
  DeckAPIUtil.updateDeck(deck, update_type, api_id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );

export const fetchDecks = category => dispatch =>
  DeckAPIUtil.fetchDecks(category).then(
    decks => dispatch(receiveDecks(decks)),
    errs => dispatch(receiveErrors)
  );

export const fetchUserDecks = user_id => dispatch =>
  DeckAPIUtil.fetchUserDecks(user_id).then(
    decks => dispatch(receiveDecks(decks)),
    errs => dispatch(receiveErrors)
  );

export const fetchDeck = deck_id => dispatch =>
  DeckAPIUtil.fetchDeck(deck_id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );
