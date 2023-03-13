class User < ApplicationRecord
    validates_presence_of :name, :email, :username, :password
    has_many :albums
    has_many :comments
    has_many :songs
end
