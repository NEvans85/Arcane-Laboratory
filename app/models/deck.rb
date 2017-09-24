# == Schema Information
#
# Table name: decks
#
#  id          :integer          not null, primary key
#  creator_id  :integer          not null
#  title       :string           default("")
#  description :text             default("")
#  upvotes     :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Deck < ApplicationRecord
  validates :creator, :title, :description, :upvotes, presence: true

  has_many :deck_cards

  has_many :cards,
           through: :deck_cards

  belongs_to :creator,
             class_name: :User

  def add_card(api_id)
    card = Card.find_or_create_by(api_id: api_id)
    deck_card = DeckCard.find_or_create_by(card_id: card.id, deck_id: id)
    deck_card.increment_quantity
  end

  def remove_card(api_id)
    card = Card.find_by(id: api_id)
    deck_card = DeckCard.find_by(card_id: card.id, deck_id: id)
    deck_card.decrement_quantity
  end

  def upvote
    self.upvotes += 1
  end
end
