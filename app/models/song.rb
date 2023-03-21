class Song < ApplicationRecord
    validates_presence_of :name
  
    belongs_to :user
    belongs_to :album
    
    has_many :playlist_songs
    has_many :comments
    has_many :likes
    
    has_one_attached :audio, service: :google
    has_one_attached :image, service: :google

  
    def audio_url
        if self.audio.attached?
           return 'https://storage.googleapis.com/audio_bucket_1_d/' + self.audio.key
        else 
            return nil  
        end
    end

    def image_url
        if self.image.attached?
            return 'https://storage.googleapis.com/audio_bucket_1_d/' + self.image.key
        else
            return nil
        end
    end

    def artist
        return self.user.username
    end
  end
