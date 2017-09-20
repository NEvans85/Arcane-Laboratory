# == Schema Information
#
# Table name: colors
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  symbol     :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Color < ApplicationRecord
end
