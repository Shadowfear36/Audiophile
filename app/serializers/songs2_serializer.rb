class Songs2Serializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :audio_url, :image_url, :artist, :likes, :comments, :created_at
  has_one :album
end
