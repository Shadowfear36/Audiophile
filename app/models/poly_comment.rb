class PolyComment < ApplicationRecord
  belongs_to :user
  belongs_to :commentable, polymorphic: true

  def username
    return self.user.username
  end

  def pfp_url
    return self.user.image_url
  end
end
