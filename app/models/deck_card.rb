# == Schema Information
#
# Table name: deck_cards
#
#  id          :integer          not null, primary key
#  card_api_id :string           not null
#  deck_id     :integer          not null
#  quantity    :integer          default(0)
#

class DeckCard < ApplicationRecord
  validates :deck, :card, presence: true

  belongs_to :deck
  belongs_to :card,
             primary_key: :card_api_id

  def increment_quantity
    self.quantity += 1
    save
  end

  def decrement_quantity
    self.quantity -= 1
    save
  end
end
