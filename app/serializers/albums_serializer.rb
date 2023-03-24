class AlbumsSerializer < ActiveModel::Serializer
  attributes :id, :name, :user_id, :artist, :songs, :image_url, :likes, :comments

  def songs
    ActiveModel::SerializableResource.new(object.songs,  each_serializer: Songs2Serializer) 
  end

end
