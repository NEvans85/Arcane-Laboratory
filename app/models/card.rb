# == Schema Information
#
# Table name: cards
#
#  id        :integer          not null, primary key
#  api_id    :string
#  name      :string
#  image_url :string
#  type      :string
#

class Card < ApplicationRecord
  has_many :card_subtypes
  has_many :subtypes, through: :card_subtypes
  
  has_many :card_supertypes
  has_many :supertypes, through: :card_supertypes

  def self.search(query_hash = {})
    @cards = MTG::Card.where(query_hash).all
  end

end
