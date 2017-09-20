# == Schema Information
#
# Table name: colors
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  symbol     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Color < ApplicationRecord
  validates :name, :symbol, presence: true

  has_many :card_colors
  has_many :cards,
           through: :card_colors
end
