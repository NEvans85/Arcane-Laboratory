# == Schema Information
#
# Table name: decks
#
#  id          :integer          not null, primary key
#  creator_id  :integer          not null
#  title       :string           default("")
#  description :text             default("")
#  upvotes     :integer          default(0)
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  format      :string
#

require 'test_helper'

class DeckTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
