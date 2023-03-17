class Song < ApplicationRecord
    validates_presence_of :name
  
    belongs_to :user
    belongs_to :album
    
    has_many :playlist_songs
    has_many :comments
    has_many :likes
    
    has_one_attached :audio, service: :google

  
    def audio_url
        Rails.application.routes.url_helpers.url_for(audio) if audio.attached?
    end
  end
