# == Schema Information
#
# Table name: expansions
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  code       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Expansion < ApplicationRecord
  validates :name, :code, presence: true, uniqueness: true

  has_many :card_printings
  has_many :cards
end
