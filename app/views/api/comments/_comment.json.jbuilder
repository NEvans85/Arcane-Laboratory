json.set! comment.id do
  json.extract! comment, :id, :body
  json.author comment.author.username
  json.created time_ago_in_words(comment.created_at)
  json.set! 'responses' do
    comment.responses.each do |response|
      json.partial! 'api/comments/comment', comment: response
    end
  end
end
