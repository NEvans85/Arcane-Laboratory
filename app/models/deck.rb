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
  validates :creator, :upvotes, presence: true

  has_many :deck_cards

  has_many :cards,
           through: :deck_cards

  belongs_to :creator,
             foreign_key: :creator_id,
             class_name: :User

  def add_card!(api_id)
    card = Card.find_by(api_id: api_id)
    card ||= Card.create_by_api_id(api_id)
    deck_card = DeckCard.find_or_create_by(card_api_id: card.api_id, deck_id: id)
    deck_card.increment_quantity
    card
  end

  def remove_card!(api_id)
    card = Card.find_by(api_id: api_id)
    deck_card = DeckCard.find_by(card_id: card.api_id, deck_id: id)
    deck_card.decrement_quantity
    deck_card.destroy if deck_card.quantity.zero?
    card
  end

  def upvote
    self.upvotes += 1
    save
  end
end
