# == Schema Information
#
# Table name: deck_cards
#
#  id         :integer          not null, primary key
#  deck_id    :integer          not null
#  card_id    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  quantity   :integer
#

class DeckCard < ApplicationRecord
  validates :deck_id, :card_id, presence: true

  belongs_to :deck
  belongs_to :card,
             primary_key: :card_hash_id
end
