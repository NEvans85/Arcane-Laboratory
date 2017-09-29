
User.create(username: "DemoUser", password: "DemoPassword", email: "Demo@email.com")


10.times do |i|
  username =Faker::Internet.user_name
  User.create(username: username,
              password: 'password',
              email: Faker::Internet.email(username))
end
def create_rand_deck(user_id)
  kld_block_cards = MTG::Card.where(set: 'kld,aer').all
  kld_block_lands = MTG::Card.where(set: 'kld,aer', type: 'land').all
  colors = %w[White Blue Green Black Red]
  deck_types = %w[Agro Control Ramp Mid-Range Combo Zoo Tokens Agro-Control]
  formats = %w[Standard Modern Legacy Casual]
  rand_deck_colors = colors.sample(rand(1..3))
  title = rand_deck_colors.join('-') + ' ' + deck_types.sample
  d = Deck.create(creator_id: user_id, title: title,
                  upvotes: rand(50), description: Faker::Lorem.paragraph(rand(1..8)),
                  format: formats.sample)
  card_count = 0
  while card_count < 20
    c = kld_block_lands.sample
    copies = rand(1..4)
    copies.times { d.add_card!(c.id) }
    card_count += copies
  end
  while card_count < 60
    c = kld_block_cards.sample
    copies = rand(1..4)
    copies.times { d.add_card!(c.id) }
    card_count += copies
  end
end

user_count = User.all.length
10.times do
  create_rand_deck(1)
end
50.times do
  create_rand_deck(rand(1..user_count))
end

deck_count = Deck.all.length

100.times do
  Comment.create(author_id: rand(1..user_count), deck_id: rand(1..deck_count),
                 body: Faker::Lorem.paragraphs(rand(1..3)))
end

200.times do
  comment_count = Comment.all.length
  response_to = rand(1..comment_count)
  response_deck_id = Comment.find(response_to).deck.id
  Comment.create(author_id: rand(1..user_count), deck_id: response_deck_id,
                 body: Faker::Lorem.paragraphs(rand(1..3)),
                 comment_id: response_to)
end
