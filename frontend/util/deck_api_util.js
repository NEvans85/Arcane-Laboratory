export const fetchDecks = category => {
  return $.ajax({
    method: "GET",
    url: "api/decks",
    data: { category }
  });
};

export const fetchUserDecks = userId =>
  $.ajax({
    method: "GET",
    url: `api/user/${userId}/decks`
  });

export const fetchDeck = deckId =>
  $.ajax({
    method: "GET",
    url: `api/decks/${deckId}`
  });

export const postDeck = creator_id =>
  $.ajax({
    method: "POST",
    url: "api/decks",
    data: { creator_id }
  });

export const updateDeck = (deck, update_type, api_id) =>
  $.ajax({
    method: "PATCH",
    url: `api/decks/${deck.id}`,
    data: { update_type, api_id, deck }
  });

export const deleteDeck = id =>
  $.ajax({
    method: "DELETE",
    url: `api/decks/${id}`
  });
