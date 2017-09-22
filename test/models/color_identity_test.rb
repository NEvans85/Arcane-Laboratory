# == Schema Information
#
# Table name: color_identities
#
#  id         :integer          not null, primary key
#  color_id   :integer
#  card_id    :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class ColorIdentityTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
