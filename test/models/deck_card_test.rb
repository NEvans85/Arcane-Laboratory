# == Schema Information
#
# Table name: deck_cards
#
#  id          :integer          not null, primary key
#  card_api_id :string           not null
#  deck_id     :integer          not null
#  quantity    :integer          default(0)
#

require 'test_helper'

class DeckCardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
