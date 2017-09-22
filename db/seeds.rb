# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "DemoUser", password: "DemoPassword", email: "Demo@email.com")

Color.create(name: "White", symbol: "W")
Color.create(name: "Blue", symbol: "U")
Color.create(name: "Black", symbol: "B")
Color.create(name: "Red", symbol: "R")
Color.create(name: "Green", symbol: "G")

allSets = MTG::Set.all

allSets.each do |expansion|
  Expansion.create(name: expansion.name, code: expansion.code)
end

# allCards = MTG::Card.all
# allCards = []
# 343.times do |idx|
#   allCards.concat(MTG::Card.where(page: idx).where(pageSize: 100).all)
# end
stdSets = %w[kld aer akh hou]
stdCards = []
stdSets.each do |set|
  stdCards.concat(MTG::Card.where(set: set).all)
end

stdCards.each do |card|
  to_add = Card.new
  to_add.name = card.name
  to_add.card_hash_id = card.id
  to_add.mana_cost = card.mana_cost
  to_add.cmc = card.cmc
  to_add.card_type = card.type
  to_add.rarity = card.rarity
  to_add.rules_text = card.text
  to_add.flavor_text = card.flavor
  to_add.power = card.power
  to_add.toughness = card.toughness
  to_add.loyalty = card.loyalty
  to_add.image_url = card.image_url
  card_exp = Expansion.find_by(code: card.set)
  to_add.expansion_id = card_exp.id
  to_add.save
  unless card.colors.nil?
    card.colors.each do |color|
      puts "#{card.name} is #{color}"
      card_color = Color.find_by(name: color)
      CardColor.create!(card_id: card.id, color_id: card_color.id)
    end
  end
  # color_identity does not seem to be valid on the remote gem server yet.
  # unless card.color_identity.nil?
  #   card.color_identity.each do |color_symbol|
  #     puts "#{card.name} identifies as #{color_symbol}"
  #     color = Color.find_by(symbol: "#{color_symbol}")
  #     ColorIdentity.create!(card_id: card.id, color_id: color.id)
  #   end
  # end
  card.printings.each do |printing|
    expansion = Expansion.find_by(code: printing)
    CardPrinting.create(card_id: card.id, expansion_id: expansion.id)
  end
  puts "#{card.name} seeded."
end
