class Album < ApplicationRecord
    validates_presence_of :user_id
    
    has_one :user
    has_many :songs
    has_many :comments
    has_many :likes

    has_one_attached :image, service: :google

    def artist
        User.find(self.user_id).username
    end

    def image_url
        if self.image.attached?
            return 'https://storage.googleapis.com/audio_bucket_1_d/' + self.image.key
        else
            return nil
        end
    end
end
