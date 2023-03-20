class PlaylistSong < ApplicationRecord
    belongs_to :playlist
    belongs_to :song

    def songs
        return self.songs
    end
end
