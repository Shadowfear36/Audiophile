class Playlist < ApplicationRecord
    belongs_to :user
    validates_presence_of :name
    has_many :songs
    has_many :comments

end
