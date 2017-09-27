# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "DemoUser", password: "DemoPassword", email: "Demo@email.com")


10.times do |i|
  User.create(username: "User#{i + 1}",
              password: 'password',
              email: "User#{i + 1}@email.com")
end

user_count = User.all.length

kld_block_cards = MTG::Card.where(set: 'kld,aer').all
kld_block_lands = MTG::Card.where(set: 'kld,aer', type: 'land').all
colors = %w[White Blue Green Black Red]
deck_types = %w[Agro Control Ramp Mid-Range Combo Zoo Tokens Agro-Control]
50.times do
  rand_deck_colors = colors.sample(rand(1..3))
  title = rand_deck_colors.join('-') + ' ' + deck_types.sample
  d = Deck.create(creator_id: rand(user_count),
                  title: title, upvotes: rand(50))
  card_count = 0
  while card_count < 20
    c = kld_block_lands.sample
    copies = rand(1..4)
    copies.times { d.add_card!(c.id) }
    card_count += copies
    puts "#{copies} x #{c.name} added to #{d.title}"
  end
  while card_count < 60
    c = kld_block_cards.sample
    copies = rand(1..4)
    copies.times { d.add_card!(c.id) }
    card_count += copies
    puts "#{copies} x #{c.name} added to #{d.title}"
  end
end
