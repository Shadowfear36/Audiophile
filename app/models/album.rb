class Album < ApplicationRecord
    has_one :user
    validates_presence_of :user_id
    has_many :songs
    has_many :comments
end
