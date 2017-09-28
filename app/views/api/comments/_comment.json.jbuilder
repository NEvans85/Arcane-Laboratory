json.set! comment.id do
  json.extract! comment, :id, :body, :comment_id
  json.author comment.author.username
  json.created time_ago_in_words(comment.created_at)
end
