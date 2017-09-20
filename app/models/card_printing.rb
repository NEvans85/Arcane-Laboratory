# == Schema Information
#
# Table name: card_printings
#
#  id           :integer          not null, primary key
#  card_id      :string           not null
#  expansion_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class CardPrinting < ApplicationRecord
  belongs_to :card
  belongs_to :expansion
end
