# == Schema Information
#
# Table name: comments
#
#  id         :integer          not null, primary key
#  author_id  :integer          not null
#  deck_id    :integer          not null
#  comment_id :integer
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Comment < ApplicationRecord
  validates :author_id, :deck_id, :body, presence: true

  belongs_to :deck
  belongs_to :author,
             class_name: :User
  belongs_to :origin,
             class_name: :Comment,
             foreign_key: :comment_id
  has_many :responses,
           class_name: :Comment,
           foreign_key: :comment_id

end
