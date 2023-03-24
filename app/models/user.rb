class User < ApplicationRecord
    before_save { self.email = email.downcase}
    has_secure_password

    validates_presence_of :name, :email, :username
    validates_uniqueness_of :username, :email


    has_many :albums
    has_many :songs
    has_many :playlists

    has_many :poly_comments
    has_many :poly_likes
    

    has_one_attached :image, service: :google

    def image_url
        if self.image.attached?
            return 'https://storage.googleapis.com/audio_bucket_1_d/' + self.image.key
        else
            return nil
        end
    end

end
