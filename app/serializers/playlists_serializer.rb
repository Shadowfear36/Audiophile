class PlaylistsSerializer < ActiveModel::Serializer
  attributes :id, :name, :songs, :artist, :image_url

  def songs
    ActiveModel::SerializableResource.new(object.songs,  each_serializer: Songs2Serializer) 
  end

  def artist
    object.user.username
  end

end
