class PlaylistsSerializer < ActiveModel::Serializer
  attributes :id, :name, :artist, :image_url, :likes, :comments, :songs

  # def songs
  #   ActiveModel::SerializableResource.new(self.songs,  each_serializer: Songs2Serializer) 
  # end
end
