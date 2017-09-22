# == Schema Information
#
# Table name: card_colors
#
#  id         :integer          not null, primary key
#  card_id    :string           not null
#  color_id   :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CardColorTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
