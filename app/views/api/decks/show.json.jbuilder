
json.extract! @deck, :id, :title, :description, :upvotes
json.created_at time_ago_in_words(@deck.created_at)
json.updated_at time_ago_in_words(@deck.updated_at)
json.set! 'creator' do
  json.partial! 'api/users/user', user: @deck.creator
end
json.set! 'cards' do
  @deck.cards.each do |card|
    json.set! card.id do
      json.partial! 'api/cards/deck_show_card', card: card, deck: @deck
    end
  end
end
