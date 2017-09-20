# == Schema Information
#
# Table name: card_printings
#
#  id         :integer          not null, primary key
#  card_id    :string           not null
#  set_id     :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CardPrinting < ApplicationRecord
end
