class Song < ApplicationRecord
    validates_presence_of :name

    belongs_to :user
    belongs_to :album
    
    has_many :playlist_songs
    has_many :comments
    has_many :likes
end
