export const postComment = comment =>
  $.ajax({
    method: "POST",
    url: `api/decks/${comment.deck_id}/comments`,
    data: comment
  });
