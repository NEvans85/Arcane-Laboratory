# == Schema Information
#
# Table name: card_subtypes
#
#  id         :integer          not null, primary key
#  card_id    :integer
#  subtype_id :integer
#

class CardSubtype < ApplicationRecord
  belongs_to :card_id
  belongs_to :subtype_id
end
