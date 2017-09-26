# == Schema Information
#
# Table name: cards
#
#  id         :integer          not null, primary key
#  api_id     :string           not null
#  name       :string           not null
#  image_url  :string           not null
#  full_type  :string           not null
#  cmc        :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
