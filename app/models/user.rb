class User < ApplicationRecord
    before_save { self.email = email.downcase}
    has_secure_password

    validates_presence_of :name, :email, :username
    validates_uniqueness_of :username, :email


    has_many :albums
    has_many :comments
    has_many :songs
    has_many :playlists
    has_many :likes
end
