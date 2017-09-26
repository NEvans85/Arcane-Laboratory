json.extract! @deck, :id, :title, :description, :upvotes,
                     :created_at, :updated_at

json.set! 'cards' do
  @deck.cards.each do |card|
    json.set! card.id do
      json.partial! 'api/cards/deck_show_card', card: card, deck: @deck
    end
  end
end
