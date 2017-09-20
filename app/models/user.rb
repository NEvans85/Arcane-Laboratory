# == Schema Information
#
# Table name: users
#
#  id              :integer          not null, primary key
#  username        :string           not null
#  email           :string           not null
#  password_digest :string           not null
#  session_token   :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password, length: { minimum: 6, allow_nil: true }
  validates :password_digest, presence: true

  attr_reader :password

  after_initialize :ensure_session_token

  has_many(:decks,
           class_name: :Deck,
           foreign_key: :creator_id,
           primary_key: :id)

  has_many(:comments,
           class_name: :Comment,
           foreign_key: :author_id,
           primary_key: :id)

end
