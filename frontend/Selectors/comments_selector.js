export const parentComments = commentsState => {
  const commentsArr = Object.values(commentsState);
  const parents = commentsArr.filter(comment => !comment.comment_id);
  return parents;
};

export const childComments = (commentsState, id) => {
  const commentsArr = Object.values(commentsState);
  const children = commentsArr.filter(comment => comment.comment_id === id);
  return children;
};
