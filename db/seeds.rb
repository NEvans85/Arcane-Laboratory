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

silly_cards = MTG::Card.where(set: 'unh,ugl').all

10.times do |i|
  d = Deck.create(creator_id: rand(user_count), title: "RandomSillyDeck ##{i}")
  5.times do
    c = silly_cards.sample
    d.add_card!(c.id)
    puts "#{c.name} added to #{d.title}"
  end
end
