# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: "DemoUser", password: "DemoPassword", email: "Demo@email.com")


5.times do |i|
  User.create(username: "User#{i + 1}",
              password: 'password',
              email: "User#{i + 1}@email.com")
end

user_count = User.all.length

kld_block_cards = MTG::Card.where(set: 'kld,aer').all

10.times do |i|
  d = Deck.create(creator_id: rand(user_count), title: "RandomDeck ##{i}")
  card_count = 0
  until card_count >= 60 do
    c = kld_block_cards.sample
    copies = rand(1..4)
    copies.times { d.add_card!(c.id) }
    card_count += copies
    puts "#{copies} x #{c.name} added to #{d.title}"
  end
end
