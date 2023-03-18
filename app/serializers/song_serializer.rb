class SongSerializer
  include JSONAPI::Serializer
  attributes :id, :name, :audio_url, :album_id, :user_id, :likes, :songs
end
