class PlaylistsSerializer < ActiveModel::Serializer
  attributes :id, :name, :songs, :owner

  def songs
    ActiveModel::SerializableResource.new(object.songs,  each_serializer: SongsSerializer) 
  end

  def owner
    object.user.username
  end

end
