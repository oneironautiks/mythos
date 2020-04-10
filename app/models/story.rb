class Story < ApplicationRecord
  belongs_to :users
  has_many :comments, through: :users
end
