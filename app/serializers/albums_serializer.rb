class AlbumsSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :artist, :songs, :image_url, :likes

  def songs
    ActiveModel::SerializableResource.new(object.songs,  each_serializer: Songs2Serializer) 
  end

end
