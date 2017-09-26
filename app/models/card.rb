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
    card
  end

end
