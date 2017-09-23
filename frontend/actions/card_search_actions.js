import * as CardAPIUtil from "../util/card_api_util";

export const RECEIVE_SEARCH_RESULTS = "RECEIVE_SEARCH_RESULTS";
export const RECEIVE_CARD = "RECEIVE_CARD";

const receiveSearchResults = cards => ({
  type: RECEIVE_SEARCH_RESULTS,
  cards
});

const receiveCard = card => ({
  type: RECEIVE_CARD,
  card
});

export const search = queryParams => dispatch =>
  CardAPIUtil.indexQuery(queryParams).then(cards =>
    dispatch(receiveSearchResults(cards))
  );

export const cardDetails = cardID => dispatch =>
  CardAPIUtil.showCard(cardID).then(card => dispatch(receiveCard(card)));
