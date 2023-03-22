class Playlist < ApplicationRecord
    validates_presence_of :name

    belongs_to :user
    
    has_many :songs
    has_many :comments
    has_many :playlist_songs
    has_many :likes
    has_many :songs, through: :playlist_songs

    has_one_attached :image

    def image_url
        if self.image.attached?
            return 'https://storage.googleapis.com/audio_bucket_1_d/' + self.image.key
        else
            return nil
        end
    end

end
