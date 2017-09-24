# == Schema Information
#
# Table name: cards
#
#  id        :integer          not null, primary key
#  api_id    :string
#  name      :string
#  image_url :string
#  cmc       :integer
#  full_type :string
#

require 'test_helper'

class CardTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
