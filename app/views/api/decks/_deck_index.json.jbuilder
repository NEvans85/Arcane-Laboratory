json.extract! deck, :id, :title, :upvotes, :updated_at

json.set! 'creator' do
  json.partial! 'api/users/user', user: deck.creator
end
