# == Schema Information
#
# Table name: card_colors
#
#  id         :integer          not null, primary key
#  card_id    :string           not null
#  color_id   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class CardColor < ApplicationRecord
  belongs_to :card,
             primary_key: :card_hash_id,
             foreign_key: :card_id,
             class_name: :Card
  belongs_to :color,
             foreign_key: :color_id,
             primary_key: :id,
             class_name: :Color
end
