# == Schema Information
#
# Table name: cards
#
#  id        :integer          not null, primary key
#  api_id    :string
#  name      :string
#  image_url :string
#  cmc       :integer
#  full_type :string
#

class Card < ApplicationRecord
  has_many :card_subtypes
  has_many :subtypes, through: :card_subtypes

  has_many :card_supertypes
  has_many :supertypes, through: :card_supertypes

  has_many :deck_cards,
           primary_key: :api_id
  has_many :decks, through: :deck_cards

  def self.search(query_hash = {})
    MTG::Card.where(query_hash).all
  end

  def self.create_by_api_id(api_id)
    new_card = MTG::Card.where(id: api_id).all.first
    card_params = { api_id: api_id,
                    name: new_card.name,
                    image_url: new_card.image_url,
                    full_type: new_card.type,
                    cmc: new_card.cmc }
    card = new(card_params)
    card.save!
    if new_card.supertypes
      new_card.supertypes.each do |name|
        supertype = Supertype.find_by(name: name)
        CardSupertype.create(card_id: card.id, supertype_id: supertype)
      end
    end
    if new_card.subtypes
      new_card.subtypes.each do |name|
        subtype = Subtype.find_by(name: name)
        CardSubtype.create(card_id: card.id, subtype_id: subtype)
      end
    end
    card
  end

end
