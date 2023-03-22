class UsersSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :gender, :age, :user_type, :image_url, :songs, :playlists, :albums

  def songs
    ActiveModel::SerializableResource.new(object.songs,  each_serializer: Songs2Serializer) 
  end

  def playlists
    ActiveModel::SerializableResource.new(object.playlists,  each_serializer: PlaylistsSerializer) 
  end

  def albums
    ActiveModel::SerializableResource.new(object.albums,  each_serializer: AlbumsSerializer) 
  end

end
