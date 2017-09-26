# == Schema Information
#
# Table name: deck_cards
#
#  id       :integer          not null, primary key
#  deck_id  :integer          not null
#  quantity :integer          default(0)
#  card_id  :integer
#

require 'test_helper'

class DeckCardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
