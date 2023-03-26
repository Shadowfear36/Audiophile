class Album < ApplicationRecord
    validates_presence_of :user_id
    
    has_one :user
    has_many :songs

    has_many :poly_comments, as: :commentable
    has_many :poly_likes, as: :likeable

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

    def likes
        return self.poly_likes.length
    end

    def comments
        return self.poly_comments.as_json(only: [:user_id, :id, :content], methods: [:username, :pfp_url])
    end

end
