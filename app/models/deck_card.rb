# == Schema Information
#
# Table name: deck_cards
#
#  id         :integer          not null, primary key
#  deck_id    :integer          not null
#  card_id    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  quantity   :integer          default(0)
#

class DeckCard < ApplicationRecord
  validates :deck, :card, presence: true

  belongs_to :deck
  belongs_to :card,
             primary_key: :api_id

  def increment_quantity
    self.quantity += 1
    save
  end

  def decrement_quantity
    self.quantity -= 1
    save
  end
end
