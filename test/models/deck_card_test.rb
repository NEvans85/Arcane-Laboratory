# == Schema Information
#
# Table name: deck_cards
#
#  id         :integer          not null, primary key
#  deck_id    :integer          not null
#  card_id    :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class DeckCardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
