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

export const createDeck = creator_id => dispatch =>
  DeckAPIUtil.postDeck(creator_id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );

export const deleteDeck = id => dispatch =>
  DeckAPIUtil.deleteDeck(id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );

export const addCard = (deck_data, api_id) => dispatch =>
  DeckAPIUtil.updateDeck("addCard", deck_data, api_id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );

export const removeCard = (deck_data, api_id) => dispatch =>
  DeckAPIUtil.updateDeck("removeCard", deck_data, api_id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );
export const upvote = deck_data => dispatch =>
  DeckAPIUtil.updateDeck("upvote", deck_data).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );
export const updateAttributes = deck_data => dispatch =>
  DeckAPIUtil.updateDeck("updateAttributes", deck_data).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );

export const fetchTopDecks = () => dispatch =>
  DeckAPIUtil.fetchDecks("top").then(
    decks => dispatch(receiveDecks(decks)),
    errs => dispatch(receiveErrors(errs))
  );

export const fetchNewDecks = () => dispatch =>
  DeckAPIUtil.fetchDecks("new").then(
    decks => dispatch(receiveDecks(decks)),
    errs => dispatch(receiveErrors(errs))
  );

export const fetchUserDecks = user_id => dispatch =>
  DeckAPIUtil.fetchDecks("user", user_id).then(
    decks => dispatch(receiveDecks(decks)),
    errs => dispatch(receiveErrors(errs))
  );

export const fetchDeck = deck_id => dispatch =>
  DeckAPIUtil.fetchDeck(deck_id).then(
    deck => dispatch(receiveDeck(deck)),
    errs => dispatch(receiveErrors(errs))
  );
