class Songs2Serializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :audio_url, :artist
  has_one :album
end
