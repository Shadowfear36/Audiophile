class SongsSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :audio_url, :image_url, :artist, :likes
  has_one :user
  has_one :album
end
