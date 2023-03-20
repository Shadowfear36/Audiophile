class UsersSerializer < ActiveModel::Serializer
  attributes :id, :name, :username, :gender, :age, :user_type, :songs
  has_many :albums
  has_many :playlists

  def songs
    ActiveModel::SerializableResource.new(object.songs,  each_serializer: Songs2Serializer) 
  end

end
