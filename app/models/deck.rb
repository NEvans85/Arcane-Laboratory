# == Schema Information
#
# Table name: decks
#
#  id          :integer          not null, primary key
#  creator_id  :integer          not null
#  title       :string           not null
#  description :text             default("")
#  format      :string           not null
#  upvotes     :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Deck < ApplicationRecord
  validates :creator_id, :title, :description, :format, :upvotes, presence: true

  has_many :deck_cards

  has_many :cards,
           through: :deck_cards

  belongs_to :creator,
             class_name: :User
end
