class PolyLikeSerializer < ActiveModel::Serializer
  attributes :id, :user_id
  has_one :likeable
end
