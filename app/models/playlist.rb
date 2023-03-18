class Playlist < ApplicationRecord
    validates_presence_of :name

    belongs_to :user
    
    has_many :songs
    has_many :comments
    has_many :playlist_songs
    has_many :likes
    has_many :songs, through: :playlist_songs

    def songs
        @songs = self.songs
        @songs
    end
end
