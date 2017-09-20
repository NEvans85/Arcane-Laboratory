# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Color.create(name: "White", symbol: "{W}")
Color.create(name: "Blue", symbol: "{U}")
Color.create(name: "Black", symbol: "{B}")
Color.create(name: "Red", symbol: "{R}")
Color.create(name: "Green", symbol: "{G}")
puts "colors seeded"

allSets = MTG::Set.all

allSets.each do |expansion|
  Expansion.create(name: expansion.name, code: expansion.code)
  puts "#{expansion.name} seeded"
end

# allCards = MTG::Card.all
allCards = []
100.times do |idx|
  allCards.concat(MTG::Card.where(page: idx).where(pageSize: 100).all)
end
# allCards = MTG::Card.where(page: 0).where(pageSize: 100).all

allCards.each do |card|
  to_add = Card.new
  to_add.name = card.name
  to_add.card_id = card.id
  to_add.mana_cost = card.mana_cost
  to_add.cmc = card.cmc
  to_add.card_type = card.type
  to_add.rarity = card.rarity
  to_add.rules_text = card.text
  to_add.flavor_text = card.flavor
  to_add.power = card.power
  to_add.toughness = card.toughness
  to_add.loyalty = card.loyalty
  # TODO: Locate the English image_url in objects returned by SDK
  to_add.image_url = card.image_url
  if defined?(card.colors).nil?
    card.colors.each do |color|
      card_color = Color.find_by(name: color)
      CardColor.create(card_id: card.id, color_id: card_color.id)
    end
  end
  card_exp = Expansion.find_by(code: card.set)
  to_add.expansion_id = card_exp.id
  card.printings.each do |printing|
    expansion = Expansion.find_by(code: printing)
    CardPrinting.create(card_id: card.id, expansion_id: expansion.id)
  end
  # color identity is yet to be defined by the SDK, I have initiated a pull request with the improvement.
  # if defined?(card.color_identity).nil?
  #   card.color_identity.each do |color_symbol|
  #     color = Color.find_by(symbol: "{#{color_symbol}}")
  #     ColorIdentity.create(card_id: card.id, color_id: color.id)
  #   end
  # end
  to_add.save
  puts "#{card.name} seeded."
end
