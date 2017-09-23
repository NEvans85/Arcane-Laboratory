@cards.each do |card|
  json.set! card.id do
    json.partial! 'api/cards/short_card', card: card
  end
end
