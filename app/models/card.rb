# == Schema Information
#
# Table name: cards
#
#  id          :integer          not null, primary key
#  card_id     :string           not null
#  name        :string           not null
#  mana_cost   :string
#  type        :string           not null
#  rarity      :string           not null
#  set         :string           not null
#  rules_text  :text
#  flavor_text :text
#  power       :string
#  toughness   :string
#  loyalty     :string
#  image_url   :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Card < ApplicationRecord
end
