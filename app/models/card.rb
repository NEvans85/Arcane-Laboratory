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
require 'byebug'

class Card < ApplicationRecord
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
    unless new_card.supertypes.nil?
      new_card.supertypes.each do |name|
        supertype = Supertype.find_by(name: name)
        CardSupertype.create(card_id: card.id, supertype_id: supertype.id)
      end
    end
    unless new_card.subtypes.nil?
      new_card.subtypes.each do |name|
        subtype = Subtype.find_by(name: name)
        CardSubtype.create(card_id: card.id, subtype_id: subtype.id) if subtype
      end
    end
    card
  end

end
