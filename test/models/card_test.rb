# == Schema Information
#
# Table name: cards
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  mana_cost    :string
#  rarity       :string           not null
#  rules_text   :text
#  flavor_text  :text
#  power        :string
#  toughness    :string
#  loyalty      :string
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  expansion_id :integer
#  cmc          :integer
#  image_url    :string
#  card_type    :string           not null
#  card_hash_id :string
#

require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
