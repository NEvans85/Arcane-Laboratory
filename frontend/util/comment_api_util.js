export const postComment = comment =>
  $.ajax({
    method: "POST",
    url: `api/decks/${comment.deckId}/comments`,
    data: comment
  });
