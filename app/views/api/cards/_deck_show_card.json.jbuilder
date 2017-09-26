json.extract! card, :id, :name, :image_url, :cmc, :full_type
json.count DeckCard.find_by(deck_id: deck.id, card_id: card.id).quantity
