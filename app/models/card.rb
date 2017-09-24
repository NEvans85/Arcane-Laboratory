# == Schema Information
#
# Table name: cards
#
#  id        :integer          not null, primary key
#  api_id    :string
#  name      :string
#  image_url :string
#  type      :string
#  cmc       :integer
#

class Card < ApplicationRecord
  has_many :card_subtypes
  has_many :subtypes, through: :card_subtypes

  has_many :card_supertypes
  has_many :supertypes, through: :card_supertypes

  has_many :deck_cards
  has_many :decks, through: :deck_cards

  def self.search(query_hash = {})
    MTG::Card.where(query_hash).all
  end

  def self.create(api_id)
    new_card = MTG::Card.where(id: api_id)
    card_params = { api_id: api_id,
                    name: new_card.name,
                    image_url: new_card.image_url,
                    type: new_card.type,
                    cmc: new_card.cmc }
    card = new(card_params)
    card.save
    new_card.supertypes.each do |name|
      supertype = Supertype.find_by(name: name)
      CardSupertype.create(card_id: card.id, supertype_id: supertype)
    end
    new_card.subtypes.each do |name|
      subtype = Subtype.find_by(name: name)
      CardSubtype.create(card_id: card.id, subtype_id: subtype)
    end
    object
  end

end
