@cards.each do |card|
  json.set! card.id do
    json.partial! 'api/cards/search_results_card', card: card
  end
end
