class User < ApplicationRecord
    has_secure_password

    validates_presence_of :name, :email, :username
    validates :password, presence: true, length: { minimum: 8 }
    validates :password_confirmation, presence: true
    validates_uniqueness_of :username, :email


    has_many :albums
    has_many :comments
    has_many :songs
    has_many :playlists
    has_many :likes
end
