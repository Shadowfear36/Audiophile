class Song < ApplicationRecord
    validates_presence_of :name

    belongs_to :user
    belongs_to :album
    
    has_many :playlist_songs
    has_many :comments
    has_many :likes

    has_one_attached :audio, service: :google

    
    def audio_url
        if audio.attached?
          self.audio.service_url
        end
    end
    
    def file_attached?
        audio.attached?
    end

    def as_json(options = {})
        super(options).merge({
          audio_url: audio_url
        })
    end
    
end
