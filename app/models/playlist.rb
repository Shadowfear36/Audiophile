class Playlist < ApplicationRecord
    validates_presence_of :name

    belongs_to :user
    
    has_many :songs

    has_many :playlist_songs

    has_many :poly_comments, as: :commentable
    has_many :poly_likes, as: :likeable

    has_many :songs, through: :playlist_songs

    has_one_attached :image
    
    def image_url
        if self.image.attached?
            return 'https://storage.googleapis.com/audio_bucket_1_d/' + self.image.key
        else
            return nil
        end
    end

    def likes
        return self.poly_likes.length
    end

    def comments
        return self.poly_comments
    end

end
