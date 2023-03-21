class Songs2Serializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :audio_url, :image_url, :artist, :created_at
  has_one :album
end
