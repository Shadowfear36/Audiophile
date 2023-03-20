class SongsSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :audio_url, :artist
  has_one :user
  has_one :album
end
