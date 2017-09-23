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
  def colors
    card_colors.map(&:color)
  end
  # this association curiously returns an middleman object,
  # has_many :colors,
  #          through: :card_colors,
  #          source: :color

  # cut color_identitites because the gem has not yet updated on the gem server and
  # to cut down on rows to fit on Heroku's free db
  # has_many :color_identities,
  #          primary_key: :card_hash_id,
  #          class_name: :ColorIdentity
  # has_many :color_identity,
  #          through: :color_identities,
  #          source: :color

  has_many :card_printings,
           primary_key: :card_hash_id
  has_many :printings,
           through: :card_printings,
           source: :expansion

  belongs_to :expansion

  def self.search(name: nil, cmc: nil, card_type: nil, expansion_id: nil, color_ids: nil)
    query = Card.joins(:card_colors).where(nil)

    if name.present?
      query = query.where('lower(name) = ?', "%#{name.downcase}%")
    end

    if card_type.present?
      query = query.where('lower(card_type) = ?', "%#{card_type.downcase}%")
    end

    if cmc.present?
      query = query.where(cmc: cmc)
    end

    if expansion_id.present?
      query = query.where(expansion_id: expansion_id)
    end

    if color_ids.present?
      color_ids.each do |color_id|
        query = query.where()
      end
    end
    query
  end
end
