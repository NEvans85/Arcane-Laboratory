@decks.each do |deck|
  json.set! deck.id do
    json.partial! 'api/decks/deck_index', deck: deck
  end
end
