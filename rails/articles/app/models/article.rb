class Article < ApplicationRecord
  has_many :comments

  validates :content, presence: true
end
