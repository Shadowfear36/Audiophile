class Album < ApplicationRecord
    validates_presence_of :user_id
    
    has_one :user
    has_many :songs
    has_many :comments
    has_many :likes
end
