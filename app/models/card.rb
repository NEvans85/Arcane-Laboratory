# == Schema Information
#
# Table name: cards
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  mana_cost    :string
#  rarity       :string           not null
#  rules_text   :text
#  flavor_text  :text
#  power        :string
#  toughness    :string
#  loyalty      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  expansion_id :integer
#  cmc          :integer
#  image_url    :string
#  card_type    :string           not null
#  card_hash_id :string
#

class Card < ApplicationRecord
  has_many :card_colors,
           primary_key: :card_hash_id,
           class_name: :CardColor,
           foreign_key: :card_id
  def actual_colors
    card_colors.map { |cc| cc.color }
  end
  # has_many :colors,
  #          through: :card_colors,
  #          source: :color

  has_many :color_identities,
           primary_key: :card_hash_id,
           class_name: :ColorIdentity
  has_many :color_identity,
           through: :color_identities,
           source: :color

  has_many :card_printings,
           primary_key: :card_hash_id
  has_many :printings,
           through: :card_printings,
           source: :expansion

  belongs_to :expansion

end
