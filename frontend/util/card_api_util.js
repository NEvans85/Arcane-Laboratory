export const indexQuery = queryParams =>
  $.ajax({
    method: "GET",
    url: "api/cards",
    data: queryParams
  });

export const showCard = cardID =>
  $.ajax({
    method: "GET",
    url: `api/cards/${cardID}`
  });
