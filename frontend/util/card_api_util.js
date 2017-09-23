export const indexQuery = queryParams =>
  $.ajax({
    method: "INDEX",
    url: "api/cards",
    data: cardQuery
  });

export const showCard = cardID =>
  $.ajax({
    method: "SHOW",
    url: `api/cards/${cardID}`
  });
