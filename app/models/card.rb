# == Schema Information
#
# Table name: cards
#
#  id           :integer          not null, primary key
#  card_id      :string           not null
#  name         :string           not null
#  mana_cost    :string
#  type         :string           not null
#  rarity       :string           not null
#  rules_text   :text
#  flavor_text  :text
#  power        :string
#  toughness    :string
#  loyalty      :string
#  image_url    :string           not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  expansion_id :integer
#

class Card < ApplicationRecord
  has_many :card_colors
  has_many :colors,
           through: :card_colors

  has_many :card_printings
  has_many :printings,
           through: :card_printings

  belongs_to :expansion
end
