

json.extract! deck, :id, :title, :upvotes
json.updated_at time_ago_in_words(deck.updated_at)
json.set! 'creator' do
  json.partial! 'api/users/user', user: deck.creator
end
