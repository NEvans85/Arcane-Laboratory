@decks.each do |deck|
  json.set! deck.id do
    json.partial! 'api/deck/deck_index', deck: deck
  end
end
