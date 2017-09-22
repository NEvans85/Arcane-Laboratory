@cards.each do |card|
  json.set! card.card_hash_id do
    json.partial! 'api/cards/short_card', card: card
  end
end
