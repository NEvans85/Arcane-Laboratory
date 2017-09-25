json.extract! @deck, :title, :description, :upvotes,
                     :created_at, :updated_at
                     
json.set! 'cards' do
  @deck.cards.each do |card|
    json.partial! 'api/cards/deck_show_card', card: card
  end
end
