json.extract! @card, :name, :mana_cost,
                     :rarity, :rules_text,
                     :flavor_text, :power,
                     :toughness, :loyalty,
                     :cmc, :image_url,
                     :card_type

json.expansion @card.expansion.name

json.colors @card.colors.map(&:name)

json.printings @card.printings.map(&:name)
