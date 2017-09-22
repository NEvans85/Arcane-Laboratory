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

class ColorIdentity < ApplicationRecord
  belongs_to :card,
             primary_key: :card_hash_id
  belongs_to :color
end
